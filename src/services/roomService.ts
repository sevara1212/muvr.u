import { 
  roomsCollection, 
  usersCollection,
  activitiesCollection,
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  arrayUnion, 
  arrayRemove, 
  query, 
  where, 
  getDocs,
  serverTimestamp,
  db,
  collection,
  addDoc,
  orderBy,
  limit,
  onSnapshot
} from "@/lib/firebase";
import { FirebaseRoom, Room, User, JoinRequest, RequestStatus, ChatMessage } from "@/types";
import { DocumentData } from "firebase/firestore";

// Helper function to batch fetch host data
const fetchHostsData = async (hostIds: string[]): Promise<Record<string, User>> => {
  // Remove duplicates
  const uniqueHostIds = [...new Set(hostIds)];
  const hostsMap: Record<string, User> = {};
  
  // Batch fetch in groups of 10 (Firestore limit for 'in' queries)
  for (let i = 0; i < uniqueHostIds.length; i += 10) {
    const batch = uniqueHostIds.slice(i, i + 10);
    try {
      const q = query(usersCollection, where('__name__', 'in', batch));
      const hostSnaps = await getDocs(q);
      
      hostSnaps.forEach(doc => {
        hostsMap[doc.id] = { id: doc.id, ...doc.data() } as User;
      });
    } catch (error) {
      console.error('Error batch fetching hosts:', error);
    }
  }
  
  return hostsMap;
};

// Create a new room
export const createRoom = async (roomData: Omit<Room, 'id' | 'participants' | 'createdAt'>, userId: string): Promise<string> => {
  try {
    // Create a new document with auto-generated ID
    const roomRef = doc(roomsCollection);
    const roomId = roomRef.id;
    
    // Prepare room data for Firestore
    const newRoom: FirebaseRoom = {
      ...roomData,
      hostId: userId,
      participants: [userId], // Host is automatically a participant
      approvedParticipants: [userId], // Host is automatically approved
      pendingRequests: [], // Initialize empty pending requests array
      createdAt: serverTimestamp()
    };
    
    // Add room to Firestore
    await setDoc(roomRef, newRoom);
    
    // Update user's joinedRooms array
    const userRef = doc(usersCollection, userId);
    await updateDoc(userRef, {
      joinedRooms: arrayUnion(roomId)
    });
    
    return roomId;
  } catch (error) {
    console.error("Error creating room:", error);
    throw error;
  }
};

// Get a room by ID with populated host data
export const getRoomById = async (roomId: string): Promise<Room | null> => {
  try {
    // First try to get from activities collection
    const activityRef = doc(activitiesCollection, roomId);
    const activityDoc = await getDoc(activityRef);
    
    if (activityDoc.exists()) {
      const activityData = activityDoc.data();
      
      // Get host user data
      let host: User | undefined;
      if (activityData.hostId) {
        const hostRef = doc(usersCollection, activityData.hostId);
        const hostDoc = await getDoc(hostRef);
        
        if (hostDoc.exists()) {
          host = { id: hostDoc.id, ...hostDoc.data() } as User;
        }
      }
      
      // Create fallback host if not found
      const fallbackHost = host || {
        id: activityData.hostId,
        name: activityData.hostName || `User ${activityData.hostId}`,
        email: `${activityData.hostId}@example.com`,
        avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`
      };
      
      return {
        id: roomId,
        ...activityData,
        host: fallbackHost,
        hostName: activityData.hostName || fallbackHost.name
      } as Room;
    }
    
    // If not found in activities, try rooms collection (for backward compatibility)
    const roomRef = doc(roomsCollection, roomId);
    const roomDoc = await getDoc(roomRef);
    
    if (!roomDoc.exists()) {
      return null;
    }
    
    const roomData = roomDoc.data() as FirebaseRoom;
    
    // Get host user data
    let host: User | undefined;
    if (roomData.hostId) {
      const hostRef = doc(usersCollection, roomData.hostId);
      const hostDoc = await getDoc(hostRef);
      
      if (hostDoc.exists()) {
        host = { id: hostDoc.id, ...hostDoc.data() } as User;
      }
    }
    
    // Return room with ID and host data, ensuring new fields have default values
    return {
      id: roomId,
      ...roomData,
      approvedParticipants: roomData.approvedParticipants || [roomData.hostId], // Default to host if not set
      pendingRequests: roomData.pendingRequests || [], // Default to empty array if not set
      host
    };
  } catch (error) {
    console.error("Error getting room:", error);
    throw error;
  }
};

// Get all rooms with populated host data
export const getAllRooms = async (): Promise<Room[]> => {
  try {
    const querySnapshot = await getDocs(roomsCollection);
    const roomsData: DocumentData[] = [];
    const hostIds: string[] = [];
    
    // First, collect all room data and host IDs
    querySnapshot.forEach(doc => {
      const data = doc.data();
      roomsData.push({ 
        id: doc.id, 
        ...data,
        approvedParticipants: data.approvedParticipants || [data.hostId], // Default to host if not set
        pendingRequests: data.pendingRequests || [] // Default to empty array if not set
      });
      if (data.hostId) hostIds.push(data.hostId);
    });
    
    // Then batch fetch all hosts data
    const hostsMap = await fetchHostsData(hostIds);
    
    // Finally, combine room data with host data
    return roomsData.map(room => ({
      ...room,
      host: hostsMap[room.hostId]
    })) as Room[];
  } catch (error) {
    console.error("Error getting rooms:", error);
    throw error;
  }
};

// Get all activities from the activities_upl collection
export const getAllActivities = async (): Promise<Room[]> => {
  try {
    const querySnapshot = await getDocs(activitiesCollection);
    const activitiesData: DocumentData[] = [];
    const hostIds: string[] = [];
    
    // First, collect all activity data and host IDs
    querySnapshot.forEach(doc => {
      const data = doc.data();
      
      // Convert participants from User objects to user IDs if needed
      let participants = data.participants || [];
      if (participants.length > 0 && typeof participants[0] === 'object') {
        participants = participants.map((p: any) => p.id || p);
      }
      
      // Convert approvedParticipants from User objects to user IDs if needed
      let approvedParticipants = data.approvedParticipants || [data.hostId];
      if (approvedParticipants.length > 0 && typeof approvedParticipants[0] === 'object') {
        approvedParticipants = approvedParticipants.map((p: any) => p.id || p);
      }
      
      activitiesData.push({ 
        id: doc.id, 
        ...data,
        participants: participants,
        approvedParticipants: approvedParticipants,
        pendingRequests: data.pendingRequests || []
      });
      if (data.hostId) hostIds.push(data.hostId);
    });
    
    // Then batch fetch all hosts data
    const hostsMap = await fetchHostsData(hostIds);
    
    // Finally, combine activity data with host data
    return activitiesData.map(activity => {
      const host = hostsMap[activity.hostId];
      // If host is missing, create a fallback host object
      const fallbackHost = host || {
        id: activity.hostId,
        name: `User ${activity.hostId}`,
        email: `${activity.hostId}@example.com`,
        avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`
      };
      
      return {
        ...activity,
        host: fallbackHost,
        hostName: activity.hostName || fallbackHost.name
      };
    }) as Room[];
  } catch (error) {
    console.error("Error getting activities:", error);
    throw error;
  }
};

// Get activities by sport type from the activities_upl collection
export const getActivitiesBySport = async (sportType: string): Promise<Room[]> => {
  try {
    const q = query(activitiesCollection, where("sportType", "==", sportType));
    const querySnapshot = await getDocs(q);
    
    const activitiesData: DocumentData[] = [];
    const hostIds: string[] = [];
    
    // First, collect all activity data and host IDs
    querySnapshot.forEach(doc => {
      const data = doc.data();
      
      // Convert participants from User objects to user IDs if needed
      let participants = data.participants || [];
      if (participants.length > 0 && typeof participants[0] === 'object') {
        participants = participants.map((p: any) => p.id || p);
      }
      
      // Convert approvedParticipants from User objects to user IDs if needed
      let approvedParticipants = data.approvedParticipants || [data.hostId];
      if (approvedParticipants.length > 0 && typeof approvedParticipants[0] === 'object') {
        approvedParticipants = approvedParticipants.map((p: any) => p.id || p);
      }
      
      activitiesData.push({ 
        id: doc.id, 
        ...data,
        participants: participants,
        approvedParticipants: approvedParticipants,
        pendingRequests: data.pendingRequests || []
      });
      if (data.hostId) hostIds.push(data.hostId);
    });
    
    // Then batch fetch all hosts data
    const hostsMap = await fetchHostsData(hostIds);
    
    // Finally, combine activity data with host data
    return activitiesData.map(activity => {
      const host = hostsMap[activity.hostId];
      // If host is missing, create a fallback host object
      const fallbackHost = host || {
        id: activity.hostId,
        name: `User ${activity.hostId}`,
        email: `${activity.hostId}@example.com`,
        avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`
      };
      
      return {
        ...activity,
        host: fallbackHost,
        hostName: activity.hostName || fallbackHost.name
      };
    }) as Room[];
  } catch (error) {
    console.error("Error getting activities by sport:", error);
    throw error;
  }
};

// Join a room
export const joinRoom = async (roomId: string, userId: string): Promise<void> => {
  try {
    const userRef = doc(usersCollection, userId);
    
    // Try to update in activities collection first
    try {
      const activityRef = doc(activitiesCollection, roomId);
      await updateDoc(activityRef, {
        participants: arrayUnion(userId)
      });
    } catch (error) {
      // If not found in activities, try rooms collection
      const roomRef = doc(roomsCollection, roomId);
      await updateDoc(roomRef, {
        participants: arrayUnion(userId)
      });
    }
    
    // Add room to user's joined rooms
    await updateDoc(userRef, {
      joinedRooms: arrayUnion(roomId)
    });
  } catch (error) {
    console.error("Error joining room:", error);
    throw error;
  }
};

// Leave a room
export const leaveRoom = async (roomId: string, userId: string): Promise<void> => {
  try {
    const userRef = doc(usersCollection, userId);
    
    // Try to update in activities collection first
    try {
      const activityRef = doc(activitiesCollection, roomId);
      await updateDoc(activityRef, {
        participants: arrayRemove(userId)
      });
    } catch (error) {
      // If not found in activities, try rooms collection
      const roomRef = doc(roomsCollection, roomId);
      await updateDoc(roomRef, {
        participants: arrayRemove(userId)
      });
    }
    
    // Remove room from user's joined rooms
    await updateDoc(userRef, {
      joinedRooms: arrayRemove(roomId)
    });
  } catch (error) {
    console.error("Error leaving room:", error);
    throw error;
  }
};

// Get rooms by sport type with populated host data
export const getRoomsBySport = async (sportType: string): Promise<Room[]> => {
  try {
    const q = query(roomsCollection, where("sportType", "==", sportType));
    const querySnapshot = await getDocs(q);
    
    const roomsData: DocumentData[] = [];
    const hostIds: string[] = [];
    
    // First, collect all room data and host IDs
    querySnapshot.forEach(doc => {
      const data = doc.data();
      roomsData.push({ 
        id: doc.id, 
        ...data,
        approvedParticipants: data.approvedParticipants || [data.hostId], // Default to host if not set
        pendingRequests: data.pendingRequests || [] // Default to empty array if not set
      });
      if (data.hostId) hostIds.push(data.hostId);
    });
    
    // Then batch fetch all hosts data
    const hostsMap = await fetchHostsData(hostIds);
    
    // Finally, combine room data with host data
    return roomsData.map(room => ({
      ...room,
      host: hostsMap[room.hostId]
    })) as Room[];
  } catch (error) {
    console.error("Error getting rooms by sport:", error);
    throw error;
  }
};

// Get rooms joined by a user with populated host data
export const getJoinedRooms = async (userId: string): Promise<Room[]> => {
  try {
    const q = query(roomsCollection, where("participants", "array-contains", userId));
    const querySnapshot = await getDocs(q);
    
    const roomsData: DocumentData[] = [];
    const hostIds: string[] = [];
    
    // First, collect all room data and host IDs
    querySnapshot.forEach(doc => {
      const data = doc.data();
      roomsData.push({ 
        id: doc.id, 
        ...data,
        approvedParticipants: data.approvedParticipants || [data.hostId], // Default to host if not set
        pendingRequests: data.pendingRequests || [] // Default to empty array if not set
      });
      if (data.hostId) hostIds.push(data.hostId);
    });
    
    // Then batch fetch all hosts data
    const hostsMap = await fetchHostsData(hostIds);
    
    // Finally, combine room data with host data
    return roomsData.map(room => ({
      ...room,
      host: hostsMap[room.hostId]
    })) as Room[];
  } catch (error) {
    console.error("Error getting joined rooms:", error);
    throw error;
  }
};

// Get room participants with user details
export const getRoomParticipants = async (roomId: string): Promise<User[]> => {
  try {
    // First try to get from activities collection
    const activityRef = doc(activitiesCollection, roomId);
    const activityDoc = await getDoc(activityRef);
    
    let participantIds: string[] = [];
    
    if (activityDoc.exists()) {
      const activityData = activityDoc.data();
      participantIds = activityData.participants || [];
    } else {
      // If not found in activities, try rooms collection
      const roomRef = doc(roomsCollection, roomId);
      const roomDoc = await getDoc(roomRef);
      
      if (!roomDoc.exists()) {
        throw new Error("Room not found");
      }
      
      const roomData = roomDoc.data() as FirebaseRoom;
      participantIds = roomData.participants || [];
    }
    
    if (participantIds.length === 0) {
      return [];
    }
    
    // Batch fetch all participants
    const participantsMap = await fetchHostsData(participantIds);
    
    // Convert map to array
    return participantIds
      .map(id => participantsMap[id])
      .filter(Boolean); // Filter out any undefined values
  } catch (error) {
    console.error("Error getting room participants:", error);
    throw error;
  }
}; 

// Update user's sport type preference
export const updateUserSportType = async (userId: string, sportType: string): Promise<void> => {
  try {
    const userRef = doc(usersCollection, userId);
    await updateDoc(userRef, {
      sportType: sportType
    });
  } catch (error) {
    console.error("Error updating user sport type:", error);
    throw error;
  }
}; 

// Request to join a room
export const requestToJoinRoom = async (roomId: string, userId: string, message?: string): Promise<string> => {
  try {
    // Create request document
    const requestData = {
      roomId,
      userId,
      status: RequestStatus.Pending,
      requestedAt: serverTimestamp(), // Always set this
      message: message || ""
    };
    
    const requestRef = await addDoc(collection(db, "joinRequests"), requestData);
    const requestId = requestRef.id;
    
    // Update room with pending request
    const roomRef = doc(roomsCollection, roomId);
    await updateDoc(roomRef, {
      pendingRequests: arrayUnion(requestId)
    });
    
    // Update user with pending request
    const userRef = doc(usersCollection, userId);
    await updateDoc(userRef, {
      pendingRequests: arrayUnion(requestId)
    });
    
    return requestId;
  } catch (error) {
    console.error("Error requesting to join room:", error);
    throw error;
  }
};

// Get pending requests for a room
export const getPendingRequests = async (roomId: string): Promise<JoinRequest[]> => {
  try {
    let querySnapshot;
    try {
      // Try to query with orderBy requestedAt
      const q = query(
        collection(db, "joinRequests"),
        where("roomId", "==", roomId),
        where("status", "==", RequestStatus.Pending),
        orderBy("requestedAt", "desc")
      );
      querySnapshot = await getDocs(q);
    } catch (err) {
      // Fallback: query without orderBy if requestedAt is missing
      const q = query(
        collection(db, "joinRequests"),
        where("roomId", "==", roomId),
        where("status", "==", RequestStatus.Pending)
      );
      querySnapshot = await getDocs(q);
    }
    const requests: JoinRequest[] = [];
    const userIds: string[] = [];
    
    // Collect request data and user IDs
    querySnapshot.forEach(doc => {
      const data = doc.data();
      requests.push({ id: doc.id, ...data } as JoinRequest);
      userIds.push(data.userId);
    });
    
    // Batch fetch user data
    const usersMap = await fetchHostsData(userIds);
    
    // Combine request data with user data
    return requests.map(request => ({
      ...request,
      user: usersMap[request.userId]
    }));
  } catch (error) {
    console.error("Error getting pending requests:", error);
    throw error;
  }
};

// Approve or reject a join request
export const respondToJoinRequest = async (
  requestId: string, 
  roomId: string, 
  userId: string, 
  status: RequestStatus
): Promise<void> => {
  try {
    // Update request status
    const requestRef = doc(db, "joinRequests", requestId);
    await updateDoc(requestRef, {
      status,
      respondedAt: serverTimestamp()
    });
    
    const roomRef = doc(roomsCollection, roomId);
    const userRef = doc(usersCollection, userId);
    
    if (status === RequestStatus.Approved) {
      // Add user to approved participants
      await updateDoc(roomRef, {
        approvedParticipants: arrayUnion(userId),
        pendingRequests: arrayRemove(requestId)
      });
      
      // Add room to user's joined rooms
      await updateDoc(userRef, {
        joinedRooms: arrayUnion(roomId),
        pendingRequests: arrayRemove(requestId)
      });
    } else {
      // Remove from pending requests
      await updateDoc(roomRef, {
        pendingRequests: arrayRemove(requestId)
      });
      
      await updateDoc(userRef, {
        pendingRequests: arrayRemove(requestId)
      });
    }
  } catch (error) {
    console.error("Error responding to join request:", error);
    throw error;
  }
};

// Send chat message
export const sendChatMessage = async (roomId: string, userId: string, message: string): Promise<string> => {
  try {
    const messageData = {
      roomId,
      userId,
      message,
      timestamp: serverTimestamp()
    };
    
    const messageRef = await addDoc(collection(db, "chatMessages"), messageData);
    return messageRef.id;
  } catch (error) {
    console.error("Error sending chat message:", error);
    throw error;
  }
};

// Get chat messages for a room
export const getChatMessages = async (roomId: string): Promise<ChatMessage[]> => {
  try {
    const q = query(
      collection(db, "chatMessages"),
      where("roomId", "==", roomId),
      orderBy("timestamp", "asc"),
      limit(100)
    );
    
    const querySnapshot = await getDocs(q);
    const messages: ChatMessage[] = [];
    const userIds: string[] = [];
    
    // Collect message data and user IDs
    querySnapshot.forEach(doc => {
      const data = doc.data();
      messages.push({ id: doc.id, ...data } as ChatMessage);
      userIds.push(data.userId);
    });
    
    // Batch fetch user data
    const usersMap = await fetchHostsData(userIds);
    
    // Combine message data with user data
    return messages.map(message => ({
      ...message,
      user: usersMap[message.userId]
    }));
  } catch (error) {
    console.error("Error getting chat messages:", error);
    throw error;
  }
};

// Subscribe to chat messages in real-time
export const subscribeToChatMessages = (
  roomId: string, 
  callback: (messages: ChatMessage[]) => void
) => {
  const q = query(
    collection(db, "chatMessages"),
    where("roomId", "==", roomId),
    orderBy("timestamp", "asc")
  );
  
  return onSnapshot(q, async (snapshot) => {
    const messages: ChatMessage[] = [];
    const userIds: string[] = [];
    
    snapshot.forEach(doc => {
      const data = doc.data();
      messages.push({ id: doc.id, ...data } as ChatMessage);
      userIds.push(data.userId);
    });
    
    // Batch fetch user data
    const usersMap = await fetchHostsData(userIds);
    
    // Combine message data with user data
    const messagesWithUsers = messages.map(message => ({
      ...message,
      user: usersMap[message.userId]
    }));
    
    callback(messagesWithUsers);
  });
}; 

// Update existing rooms to include new fields (for backward compatibility)
export const updateExistingRoomsWithNewFields = async (): Promise<void> => {
  try {
    console.log("Starting to update existing rooms...");
    
    const querySnapshot = await getDocs(roomsCollection);
    let updatedCount = 0;
    
    for (const roomDoc of querySnapshot.docs) {
      const roomData = roomDoc.data();
      const roomId = roomDoc.id;
      
      // Check if room needs updating (missing new fields)
      if (!roomData.approvedParticipants || !roomData.pendingRequests) {
        console.log(`Updating room: ${roomId}`);
        
        const updates: any = {};
        
        // Add approvedParticipants if missing
        if (!roomData.approvedParticipants) {
          updates.approvedParticipants = [roomData.hostId]; // Host is automatically approved
        }
        
        // Add pendingRequests if missing
        if (!roomData.pendingRequests) {
          updates.pendingRequests = [];
        }
        
        // Update the room
        await updateDoc(doc(roomsCollection, roomId), updates);
        updatedCount++;
      }
    }
    
    console.log(`Updated ${updatedCount} rooms successfully!`);
  } catch (error) {
    console.error("Error updating existing rooms:", error);
    throw error;
  }
}; 