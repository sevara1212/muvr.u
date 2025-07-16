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
  serverTimestamp
} from "@/lib/firebase";
import { FirebaseRoom, Room, User } from "@/types";

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
    const hostRef = doc(usersCollection, roomData.hostId);
    const hostDoc = await getDoc(hostRef);
    
    let host: User | undefined;
    if (hostDoc.exists()) {
      host = { id: hostDoc.id, ...hostDoc.data() } as User;
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
    const rooms: Room[] = [];
    
    for (const roomDoc of querySnapshot.docs) {
      const roomData = roomDoc.data() as FirebaseRoom;
      
      // Get host user data
      let host: User | undefined;
      try {
        const hostRef = doc(usersCollection, roomData.hostId);
        const hostDoc = await getDoc(hostRef);
        
        if (hostDoc.exists()) {
          host = { id: hostDoc.id, ...hostDoc.data() } as User;
        }
      } catch (hostError) {
        console.error(`Error fetching host for room ${roomDoc.id}:`, hostError);
      }
      
      rooms.push({
        id: roomDoc.id,
        ...roomData,
        host
      });
    }
    
    return rooms;
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
    
    const rooms: Room[] = [];
    for (const roomDoc of querySnapshot.docs) {
      const roomData = roomDoc.data() as FirebaseRoom;
      
      // Get host user data
      let host: User | undefined;
      try {
        const hostRef = doc(usersCollection, roomData.hostId);
        const hostDoc = await getDoc(hostRef);
        
        if (hostDoc.exists()) {
          host = { id: hostDoc.id, ...hostDoc.data() } as User;
        }
      } catch (hostError) {
        console.error(`Error fetching host for room ${roomDoc.id}:`, hostError);
      }
      
      rooms.push({
        id: roomDoc.id,
        ...roomData,
        host
      });
    }
    
    return rooms;
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
    
    const rooms: Room[] = [];
    for (const roomDoc of querySnapshot.docs) {
      const roomData = roomDoc.data() as FirebaseRoom;
      
      // Get host user data
      let host: User | undefined;
      try {
        const hostRef = doc(usersCollection, roomData.hostId);
        const hostDoc = await getDoc(hostRef);
        
        if (hostDoc.exists()) {
          host = { id: hostDoc.id, ...hostDoc.data() } as User;
        }
      } catch (hostError) {
        console.error(`Error fetching host for room ${roomDoc.id}:`, hostError);
      }
      
      rooms.push({
        id: roomDoc.id,
        ...roomData,
        host
      });
    }
    
    return rooms;
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
    
    const participants: User[] = [];
    for (const userId of participantIds) {
      const userRef = doc(usersCollection, userId);
      const userDoc = await getDoc(userRef);
      
      if (userDoc.exists()) {
        participants.push({
          id: userDoc.id,
          ...userDoc.data() as Omit<User, 'id'>
        });
      }
    }
    
    return participants;
  } catch (error) {
    console.error("Error getting room participants:", error);
    throw error;
  }
}; 