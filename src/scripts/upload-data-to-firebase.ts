import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, getDocs, deleteDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ2QGDCAO_QU-J1bC41KoSrHkro4iigVQ",
  authDomain: "fit-tribe-mobile-hub.firebaseapp.com",
  projectId: "fit-tribe-mobile-hub",
  storageBucket: "fit-tribe-mobile-hub.firebasestorage.app",
  messagingSenderId: "784141035396",
  appId: "1:784141035396:web:8b0b5c01cdbc67d8721fd1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Clear all collections
const clearAllCollections = async () => {
  try {
    console.log('🗑️  Clearing all collections...');
    
    // Clear rooms collection
    const roomsSnapshot = await getDocs(collection(db, "rooms"));
    const roomsDeletePromises = roomsSnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(roomsDeletePromises);
    console.log(`✅ Cleared ${roomsSnapshot.size} documents from rooms collection`);
    
    // Clear activities_upl collection
    const activitiesSnapshot = await getDocs(collection(db, "activities_upl"));
    const activitiesDeletePromises = activitiesSnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(activitiesDeletePromises);
    console.log(`✅ Cleared ${activitiesSnapshot.size} documents from activities_upl collection`);
    
    // Clear users_upl collection
    const usersUplSnapshot = await getDocs(collection(db, "users_upl"));
    const usersUplDeletePromises = usersUplSnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(usersUplDeletePromises);
    console.log(`✅ Cleared ${usersUplSnapshot.size} documents from users_upl collection`);
    
    // Clear users collection
    const usersSnapshot = await getDocs(collection(db, "users"));
    const usersDeletePromises = usersSnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(usersDeletePromises);
    console.log(`✅ Cleared ${usersSnapshot.size} documents from users collection`);
    
    console.log('🎉 All collections cleared successfully!');
  } catch (error) {
    console.error('❌ Error clearing collections:', error);
  }
};

// Create users data directly
const createUsers = () => {
  const users = [];
  
  // Create 201 users with real names from the Data.ts file
  const names = [
    "Xonazimxon A'zamova", "Hojiakbar Abdug'offorov", "Hojiakbar Abdugafforov", "Humoyun Abduhalilov",
    "Abdurahmon Abduhamidov", "Fazliddin Abduholiqov", "Abdusalim Abdukarimov", "Maftuna Abdukhakimova",
    "Shukrullo Abdulkhakimov", "Ismoil Abdullayev", "Muhammadamin Abdullayev", "Rustambek Abdullayev",
    "Sirojiddin Abdullayev", "Abdujalil Abdumajidov", "Aziz Abduqodirov", "Muhabbatxon Abdurahimova",
    "Mubina Abdurahmanova", "Muhammadrizo Abduraimov", "Abror Abdurashidov", "Abubakr Abduraximov",
    "Abdulloh Abdurazzoqov", "Muxammadjon Abduvohidov", "Dilnoza Abduvohidova", "AHMADXO'JA Abrorhajaev",
    "Asilbek Adilov", "Dilnoza Ahmadova", "Abdulaziz Ahmedov", "Nursaid Akbarov", "Mubina Akbarova",
    "Oysha Akbarova", "Saidolimxon Akmalxonov", "Muhammadaziz Akramov", "Humoyun Alijonov", "Ozodbek Amirov",
    "Muhammaddiyor Anvarov", "Xadicha Artikbaeva", "Rasulbek Artikboyev", "Muhhamedov Asilbek",
    "Abbos Athamjonov", "Gavharoy Avbakirova", "Ismoil Axrorjonov", "Odina Axrorova", "Abubakir Azambekov",
    "Hasanjon Azamjonov", "Husanjon Azamjonov", "Firdavs Bahodirov", "Ozodbek Bahromov", "Xumoyun Bahtiyorov",
    "Bilol Bakhrillaev", "Begzod Baxodirov", "Firdavs Baxodirov", "Iskandar Baxtiyorjonov", "Mardon Baxtiyorov",
    "Mustafo Baxtiyorov", "Nurbekjon Bobonqulov", "Lola Bunyadova", "Nozimxo'ja Burxonxo'jayev",
    "Muslima Chanoyeva", "Akbar Daminov", "Nozima Doniyorova", "Abror Egamberdiyev", "Behruzbek Ergashev",
    "Robiya Erkinova", "Muhammadaziz Faxriddinov", "Abbos G'ofurov", "Azizjon G'opporov", "Kamron Gulomov",
    "Dilnavoz Gulomqodirova", "Abdurashid Habibulaev", "Abdullox Hosiyatov", "Xojarxon Ibaydullayeva",
    "Abdurauf Isakov", "Jahongir Iskandarov", "Samandar Ismailov", "Kozimjon Isomov", "Ulug`bek Istamov",
    "Yasmina Jahongirova", "Shohjahon Jumanazarov", "Abdurahim Juramurodov", "Asal Khojiyeva",
    "Visola Kholmukhamedova", "Husniddin Kironov", "Abdulloh Komiljonov", "Abdulloh Komilov", "Elyor Komilov",
    "Shoxruz Kukanboyev", "Doniyor Kuziyev", "Omadjon Latibjonov", "Shirin Mahmudjanova", "Dinora Maksudova",
    "Mohinabonu Maksudova", "Abrorbek Mammadiyev", "Amirxon Matyakobov", "Abdulaziz Maxamadjonov",
    "Mirziyod Mirg'iyozov", "Ulug`bek Mirhosilov", "Rayya Mirsoatova", "Mohira Mirzaahmadova",
    "Amirbek Mirzajanov", "Suhrob Mirzakulov", "Abdurahmon Muhamedov", "Munisbek Muhammadov",
    "Shaxriyor Muhammadov", "Turg`unov Muhammadzohid", "Nizomiddin Mukhitdinov", "Abdulboriy Muradjonov",
    "Xasanboy Murodilov", "Safiya Murodilova", "Ibrohim Murodjonov", "Hasanboy Murodov",
    "Akbarjon Murodqosimov", "Kamronbek Mustofokulov", "Najmitdin Muxitdinov", "Abdulloh Nabiyev",
    "Asma Nabiyeva", "Abrorjon Namozov", "Madinabonu Nasriddinova", "Madinabonu Nasritdinova",
    "Aziz Nazarov", "Iymona Nazarova", "Mohichehra Ne'matillayeva", "Mohir Niyozov", "Ezoza Nizomova",
    "Asilbek Nomozov", "Diyorbek Nomozov", "Asilbek Normatov", "Jamshid Normuhammedov",
    "Ayubhon Nurmuhammadov", "Bobur Omonov", "Mehrangiz Pirmatova", "Mohinur Po'latboyeva",
    "Ibroxim Po'latov", "Ibrohim Pulatov", "Ruqiya Pulatova", "Husniddin Qironov", "Shodmon Qodirov",
    "Shuhrat Qodirov", "Shaxriyor Qudratullayev", "Asliddin Rahmatov", "Maryamjon Raimova",
    "Diyorbek Rashidov", "Ibroxim Raupov", "Rustam Rayimberdiyev", "Abdullox Rustamov",
    "Umarjon Rustamov", "Muhammadsulton Ruziboyev", "Qahramon Sa'dullayev", "Umar Sadriddinov",
    "Abdujabbor Sahiyev", "Maftuna Saidazimova", "Navruza Shamsiddinova", "Shamshod Shavkatov",
    "Yahyo Shavkatov", "Nurmuxammatova Shaxzoda", "Abubakr Shermamatov", "Usmon Shomirzayev",
    "Omina Shorahimova", "Hadicha Shoyusufova", "Firdavs Shuhratillayev", "Soliha Shuxratova",
    "Xondamir Siddiqov", "Behruz Sodiqov", "Javlonbek Sulaymonkulov", "Asliddin Sulaymonqulov",
    "Muslima Suleymanova", "Madina Sultonkhodjayeva", "Temur Tashniyozov", "Abdulloh Tohirjonov",
    "Muhiddin Tohirov", "Sultonmurod Tojiboyev", "Ibrohim Tolibboyev", "Shohruh Tolibjonov",
    "Akobirxon Tolibxonov", "Gulsevar Toshtemirova", "Begzod Toxirov", "Saidxon Toxirxo'jayev",
    "Muxammadamin Tulkinov", "Begzod Turdiyev", "Samir Turdiyev", "Ravshan Ubaydullayev",
    "Asadbek Ulug'bekov", "Diyorbek Urozboev", "Elyorbek Urozboev", "Aziza Usmanova",
    "Shohruz Vladimirov", "Mamlakat Xakimova", "Sevinch Xakimova", "Xusanboy Xo'jamnazarov",
    "Muxammadsaid Xolmirzayev", "Xasanboy Xujamnazarov", "Sardor Yarilkabov", "Nurmahammedov Yaxyoxon",
    "Ayaulim Yergasheva", "Abdujabbor Yo'ldoshev", "Hosilbek Yo'ldoshev", "Muhammadnur Yusupov",
    "Gulsevar Yusupova", "Ulug'bek Zamirov", "Abduraxmonova Zinnura", "Asadbek Zohidov", "Adham Zokirov"
  ];

  for (let i = 0; i < 201; i++) {
    const user = {
      id: (i + 1).toString(),
      name: names[i] || `User ${i + 1}`,
      avatar: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${(i % 100) + 1}.jpg`,
      interests: ["Running", "Football", "Tennis", "Yoga", "Cycling", "Basketball", "Gym", "Swimming"],
      activityLevel: ["Beginner", "Intermediate", "Advanced"][i % 3],
      joinedDate: "2025-06-24",
      bio: `Fitness enthusiast with interest in sports.`,
      gender: i % 2 === 0 ? "Male" : "Female"
    };
    users.push(user);
  }

  return users;
};

// Create activities data directly
const createActivities = (users: any[]) => {
  const activities = [];
  
  // Activity templates
  const activityTemplates = [
    {
      title: "Tennis Court Tennis Session",
      sportType: "Tennis",
      location: {
        address: "Oqqurghon Street, 16",
        city: "Tashkent",
        lat: 41.32,
        lng: 69.285
      },
      description: "A fun and social tennis event open to all skill levels!"
    },
    {
      title: "Anhor Park Rink Other Session",
      sportType: "Other",
      location: {
        address: "Labzak Street, Shaykhantaur",
        city: "Tashkent",
        lat: 41.31,
        lng: 69.24
      },
      description: "A fun and social other event open to all skill levels!"
    },
    {
      title: "Yoga Space Yoga Session",
      sportType: "Yoga",
      location: {
        address: "Kichik Beshyogoch street, 56",
        city: "Tashkent",
        lat: 41.311,
        lng: 69.27
      },
      description: "A fun and social yoga event open to all skill levels!"
    },
    {
      title: "Chamanzar Field Football Session",
      sportType: "Football",
      location: {
        address: "Uchtepa District, Chamanzar Mahallah",
        city: "Tashkent",
        lat: 41.295,
        lng: 69.211
      },
      description: "A fun and social football event open to all skill levels!"
    },
    {
      title: "River Park Running Session",
      sportType: "Running",
      location: {
        address: "Tashkent",
        city: "Tashkent",
        lat: 41.33,
        lng: 69.31
      },
      description: "A fun and social running event open to all skill levels!"
    },
    {
      title: "Fitness First Gym Session",
      sportType: "Gym",
      location: {
        address: "Afrosiyob Street, 41",
        city: "Tashkent",
        lat: 41.31,
        lng: 69.28
      },
      description: "A fun and social gym event open to all skill levels!"
    },
    {
      title: "Aqualand Swimming Session",
      sportType: "Swimming",
      location: {
        address: "Chinabad Street, 61A",
        city: "Tashkent",
        lat: 41.36,
        lng: 69.29
      },
      description: "A fun and social swimming event open to all skill levels!"
    },
    {
      title: "Yunusabad Stadium Football Session",
      sportType: "Football",
      location: {
        address: "Yunusabad District, 3-mavze",
        city: "Tashkent",
        lat: 41.364559,
        lng: 69.294178
      },
      description: "A fun and social football event open to all skill levels!"
    },
    {
      title: "TTClub Tennis Session",
      sportType: "Tennis",
      location: {
        address: "Mahtumquli Street, 105Г",
        city: "Tashkent",
        lat: 41.35,
        lng: 69.3
      },
      description: "A fun and social tennis event open to all skill levels!"
    }
  ];

  // Generate 201 activities with real users
  for (let i = 0; i < 201; i++) {
    const template = activityTemplates[i % activityTemplates.length];
    const hostIndex = Math.floor(Math.random() * users.length);
    const host = users[hostIndex];
    const maxParticipants = Math.floor(Math.random() * 8) + 4; // 4-11 participants
    const duration = [60, 90, 120][Math.floor(Math.random() * 3)];
    
    // Generate random participants (including host)
    const participants = [host];
    const numAdditionalParticipants = Math.floor(Math.random() * (maxParticipants - 1)) + 1;
    
    for (let j = 0; j < numAdditionalParticipants; j++) {
      const randomUserIndex = Math.floor(Math.random() * users.length);
      const randomUser = users[randomUserIndex];
      if (!participants.find(p => p.id === randomUser.id)) {
        participants.push(randomUser);
      }
    }

    // Generate future date
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + Math.floor(Math.random() * 30) + 1);
    const dateTime = futureDate.toISOString();

    const activity = {
      id: (1000 + i).toString(),
      title: template.title,
      sportType: template.sportType,
      hostId: host.id,
      host: host, // This will show the real host name
      location: template.location,
      dateTime: dateTime,
      duration: duration,
      maxParticipants: maxParticipants,
      participants: participants,
      approvedParticipants: participants,
      pendingRequests: [],
      description: template.description,
      price: 0
    };

    activities.push(activity);
  }

  return activities;
};

// Upload users to users_upl collection
const uploadUsers = async (users: any[]) => {
  try {
    console.log('👥 Uploading users to users_upl collection...');
    
    for (const user of users) {
      // Clean up the user data
      const cleanUser = {
        ...user,
        interests: user.interests || [],
        joinedRooms: [],
        pendingRequests: []
      };
      
      await setDoc(doc(collection(db, "users_upl"), user.id), cleanUser);
    }
    
    console.log(`✅ Successfully uploaded ${users.length} users to users_upl collection!`);
    return users;
    
  } catch (error) {
    console.error('❌ Error uploading users:', error);
    return [];
  }
};

// Upload activities to activities_upl collection
const uploadActivities = async (activities: any[]) => {
  try {
    console.log('🏃‍♂️ Uploading activities to activities_upl collection...');
    
    let uploadedCount = 0;
    
    for (const activity of activities) {
      // Clean up the activity data
      const cleanActivity = {
        ...activity,
        participants: activity.participants || [],
        approvedParticipants: activity.approvedParticipants || [],
        pendingRequests: activity.pendingRequests || []
      };
      
      await setDoc(doc(collection(db, "activities_upl"), activity.id), cleanActivity);
      uploadedCount++;
      
      if (uploadedCount % 20 === 0) {
        console.log(`✅ Uploaded ${uploadedCount}/${activities.length} activities...`);
      }
    }
    
    console.log(`🎉 Successfully uploaded ${uploadedCount} activities to activities_upl collection!`);
    
  } catch (error) {
    console.error('❌ Error uploading activities:', error);
  }
};

// Main execution function
const main = async () => {
  try {
    console.log('🚀 Starting complete Firebase data reset and upload...');
    
    // Step 1: Clear all collections
    await clearAllCollections();
    
    // Step 2: Create and upload users
    const users = createUsers();
    if (users.length === 0) {
      console.error('❌ No users created');
      return;
    }
    
    await uploadUsers(users);
    
    // Step 3: Create and upload activities
    const activities = createActivities(users);
    if (activities.length === 0) {
      console.error('❌ No activities created');
      return;
    }
    
    await uploadActivities(activities);
    
    // Step 4: Verify upload
    const usersSnapshot = await getDocs(collection(db, "users_upl"));
    const activitiesSnapshot = await getDocs(collection(db, "activities_upl"));
    
    console.log('\n📊 Upload Summary:');
    console.log(`✅ Users uploaded to users_upl: ${usersSnapshot.size}`);
    console.log(`✅ Activities uploaded to activities_upl: ${activitiesSnapshot.size}`);
    console.log('🎯 All data uploaded successfully with real names!');
    
  } catch (error) {
    console.error('❌ Error in main execution:', error);
  }
};

// Run the script
main(); 