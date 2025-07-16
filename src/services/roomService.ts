import { 
  roomsCollection, 
  usersCollection,
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
  db
} from "@/lib/firebase";
import { FirebaseRoom, Room, User } from "@/types";
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
    
    // Return room with ID and host data
    return {
      id: roomId,
      ...roomData,
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
      roomsData.push({ id: doc.id, ...data });
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

// Join a room
export const joinRoom = async (roomId: string, userId: string): Promise<void> => {
  try {
    const roomRef = doc(roomsCollection, roomId);
    const userRef = doc(usersCollection, userId);
    
    // Add user to room participants
    await updateDoc(roomRef, {
      participants: arrayUnion(userId)
    });
    
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
    const roomRef = doc(roomsCollection, roomId);
    const userRef = doc(usersCollection, userId);
    
    // Remove user from room participants
    await updateDoc(roomRef, {
      participants: arrayRemove(userId)
    });
    
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
      roomsData.push({ id: doc.id, ...data });
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
      roomsData.push({ id: doc.id, ...data });
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
    const roomRef = doc(roomsCollection, roomId);
    const roomDoc = await getDoc(roomRef);
    
    if (!roomDoc.exists()) {
      throw new Error("Room not found");
    }
    
    const roomData = roomDoc.data() as FirebaseRoom;
    const participantIds = roomData.participants || [];
    
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