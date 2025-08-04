import { collection, getDocs, query, where, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Room, User } from "@/types";

const roomsCollection = collection(db, "rooms");
const activitiesCollection = collection(db, "activities_upl");
const usersCollection = collection(db, "users");
const usersUplCollection = collection(db, "users_upl");

// Helper function to get user by ID from both collections
const getUserById = async (userId: string): Promise<User | null> => {
  try {
    // Try users_upl collection first
    const userUplDoc = await getDoc(doc(usersUplCollection, userId));
    if (userUplDoc.exists()) {
      return userUplDoc.data() as User;
    }
    
    // Try users collection as fallback
    const userDoc = await getDoc(doc(usersCollection, userId));
    if (userDoc.exists()) {
      return userDoc.data() as User;
    }
    
    return null;
  } catch (error) {
    console.error("Error getting user:", error);
    return null;
  }
};

export const getAllRooms = async (): Promise<Room[]> => {
  try {
    // Get rooms from both collections
    const roomsQuerySnapshot = await getDocs(roomsCollection);
    const activitiesQuerySnapshot = await getDocs(activitiesCollection);
    
    const rooms: Room[] = [];
    
    // Process rooms from rooms collection
    for (const doc of roomsQuerySnapshot.docs) {
      const roomData = doc.data() as Room;
      rooms.push(roomData);
    }
    
    // Process activities from activities_upl collection
    for (const doc of activitiesQuerySnapshot.docs) {
      const activityData = doc.data() as Room;
      
      // Ensure host is a proper user object if it's a string or missing
      if (activityData.hostId && (!activityData.host || typeof activityData.host === 'string')) {
        const host = await getUserById(activityData.hostId);
        if (host) {
          activityData.host = host;
        }
      }
      
      // Ensure participants and approvedParticipants are string arrays
      if (!activityData.participants) {
        activityData.participants = [];
      }
      if (!activityData.approvedParticipants) {
        activityData.approvedParticipants = [];
      }
      if (!activityData.pendingRequests) {
        activityData.pendingRequests = [];
      }
      
      rooms.push(activityData);
    }
    
    return rooms;
  } catch (error) {
    console.error("Error getting all rooms:", error);
    return [];
  }
};

export const getRoomsBySport = async (sportType: string): Promise<Room[]> => {
  try {
    // Query both collections for the sport type
    const roomsQuery = query(roomsCollection, where("sportType", "==", sportType));
    const roomsQuerySnapshot = await getDocs(roomsQuery);
    
    const activitiesQuery = query(activitiesCollection, where("sportType", "==", sportType));
    const activitiesQuerySnapshot = await getDocs(activitiesQuery);
    
    const rooms: Room[] = [];
    
    // Process rooms from rooms collection
    for (const doc of roomsQuerySnapshot.docs) {
      const roomData = doc.data() as Room;
      rooms.push(roomData);
    }
    
    // Process activities from activities_upl collection
    for (const doc of activitiesQuerySnapshot.docs) {
      const activityData = doc.data() as Room;
      
      // Ensure host is a proper user object if it's a string or missing
      if (activityData.hostId && (!activityData.host || typeof activityData.host === 'string')) {
        const host = await getUserById(activityData.hostId);
        if (host) {
          activityData.host = host;
        }
      }
      
      // Ensure participants and approvedParticipants are string arrays
      if (!activityData.participants) {
        activityData.participants = [];
      }
      if (!activityData.approvedParticipants) {
        activityData.approvedParticipants = [];
      }
      if (!activityData.pendingRequests) {
        activityData.pendingRequests = [];
      }
      
      rooms.push(activityData);
    }
    
    return rooms;
  } catch (error) {
    console.error("Error getting rooms by sport:", error);
    return [];
  }
};

export const getRoomById = async (roomId: string): Promise<Room | null> => {
  try {
    // Try rooms collection first
    const roomDoc = await getDoc(doc(roomsCollection, roomId));
    if (roomDoc.exists()) {
      return roomDoc.data() as Room;
    }
    
    // Try activities_upl collection
    const activityDoc = await getDoc(doc(activitiesCollection, roomId));
    if (activityDoc.exists()) {
      const activityData = activityDoc.data() as Room;
      
      // Ensure host is a proper user object if it's a string or missing
      if (activityData.hostId && (!activityData.host || typeof activityData.host === 'string')) {
        const host = await getUserById(activityData.hostId);
        if (host) {
          activityData.host = host;
        }
      }
      
      // Ensure participants and approvedParticipants are string arrays
      if (!activityData.participants) {
        activityData.participants = [];
      }
      if (!activityData.approvedParticipants) {
        activityData.approvedParticipants = [];
      }
      if (!activityData.pendingRequests) {
        activityData.pendingRequests = [];
      }
      
      return activityData;
    }
    
    return null;
  } catch (error) {
    console.error("Error getting room by ID:", error);
    return null;
  }
};

export const createRoom = async (room: Omit<Room, "id">): Promise<string> => {
  try {
    const docRef = await addDoc(roomsCollection, room);
    return docRef.id;
  } catch (error) {
    console.error("Error creating room:", error);
    throw error;
  }
};

export const updateRoom = async (roomId: string, updates: Partial<Room>): Promise<void> => {
  try {
    await updateDoc(doc(roomsCollection, roomId), updates);
  } catch (error) {
    console.error("Error updating room:", error);
    throw error;
  }
};

export const deleteRoom = async (roomId: string): Promise<void> => {
  try {
    await deleteDoc(doc(roomsCollection, roomId));
  } catch (error) {
    console.error("Error deleting room:", error);
    throw error;
  }
}; 