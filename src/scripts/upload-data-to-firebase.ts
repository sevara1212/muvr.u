import { db, usersCollection, roomsCollection } from '../lib/firebase';
import { doc, setDoc, Timestamp, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { mockUsers, mockRooms } from '../data/Data';
import { ActivityLevel, SportType } from '../types';

// Clear existing data in Firestore
async function clearCollection(collectionPath: string) {
  console.log(`Clearing collection: ${collectionPath}...`);
  const querySnapshot = await getDocs(collection(db, collectionPath));
  
  const deletePromises = querySnapshot.docs.map(doc => 
    deleteDoc(doc.ref)
  );
  
  await Promise.all(deletePromises);
  console.log(`Cleared ${querySnapshot.size} documents from ${collectionPath}`);
}

// Upload data to Firebase
async function uploadDataToFirebase() {
  try {
    console.log('Starting data upload to Firebase...');
    
    // Clear existing data (optional - comment out if you want to keep existing data)
    console.log('Clearing existing data...');
    await clearCollection('users');
    await clearCollection('rooms');
    
    // Upload users
    console.log('Uploading users...');
    for (const user of mockUsers) {
      const { id, ...userData } = user;
      
      // Convert joinedDate string to proper format
      const userDataForFirebase = {
        ...userData,
        joinedDate: new Date(userData.joinedDate).toISOString(),
        joinedRooms: userData.joinedRooms || [],
        pendingRequests: userData.pendingRequests || []
      };
      
      await setDoc(doc(usersCollection, id), userDataForFirebase);
      console.log(`✅ Uploaded user: ${user.name} (${id})`);
    }
    
    // Upload rooms/activities
    console.log('Uploading rooms/activities...');
    for (const room of mockRooms) {
      const { id, host, participants, approvedParticipants, ...roomData } = room;
      
      // Helper function to extract user ID from various formats
      const extractUserId = (item: any): string => {
        if (typeof item === 'string') {
          const match = item.match(/mockUsers\[(\d+)\]/);
          if (match) {
            const index = parseInt(match[1]);
            return mockUsers[index]?.id || item;
          }
          return item;
        }
        return item?.id || item;
      };

      // Convert participants from strings like "mockUsers[40]" to actual user IDs
      const participantIds = participants.map(extractUserId);
      
      const approvedParticipantIds = approvedParticipants?.map(extractUserId) || participantIds;
      
      // Extract hostId from host field
      const hostId = extractUserId(host);

      // Prepare room data for Firebase
      const roomDataForFirebase = {
        ...roomData,
        hostId,
        participants: participantIds,
        approvedParticipants: approvedParticipantIds,
        pendingRequests: roomData.pendingRequests || [],
        createdAt: Timestamp.now()
      };
      
      await setDoc(doc(roomsCollection, id), roomDataForFirebase);
      console.log(`✅ Uploaded room: ${room.title} (${id})`);
    }
    
    console.log('🎉 Data upload complete!');
    console.log(`📊 Uploaded ${mockUsers.length} users and ${mockRooms.length} activities`);
    console.log('Your Firebase database now contains:');
    console.log('- Users collection with user profiles');
    console.log('- Rooms collection with activity data');
    
  } catch (error) {
    console.error('❌ Error uploading data:', error);
  }
}

// Run the upload
uploadDataToFirebase(); 