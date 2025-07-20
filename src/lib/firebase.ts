import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, User as FirebaseUser, connectAuthEmulator, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  arrayUnion, 
  arrayRemove, 
  query, 
  where, 
  getDocs, 
  Timestamp, 
  serverTimestamp,
  connectFirestoreEmulator,
  enableIndexedDbPersistence,
  enableMultiTabIndexedDbPersistence,
  CACHE_SIZE_UNLIMITED,
  addDoc,
  orderBy,
  limit,
  onSnapshot
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, connectStorageEmulator } from "firebase/storage";
import { firebaseConfig, firestoreRegion } from "./firebase.config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Connect to emulators in development mode
// Set USE_FIREBASE_EMULATOR to false to use the live Firebase services
const USE_FIREBASE_EMULATOR = false;
const isLocalhost = window.location.hostname === 'localhost';

if (isLocalhost && USE_FIREBASE_EMULATOR) {
  console.log("Using Firebase Emulators");
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectStorageEmulator(storage, 'localhost', 9199);
} else {
  console.log("Using live Firebase services");
  
  // Enable offline persistence
  enableIndexedDbPersistence(db)
    .then(() => {
      console.log("Firestore persistence enabled");
    })
    .catch((err) => {
      console.error("Error enabling persistence:", err);
      if (err.code === 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled in one tab at a time
        console.warn("Multiple tabs open, persistence enabled in first tab only");
      } else if (err.code === 'unimplemented') {
        // The current browser does not support all of the features required for persistence
        console.warn("This browser doesn't support persistence");
      }
    });
}

// Collections references
const roomsCollection = collection(db, "rooms");
const usersCollection = collection(db, "users");

export {
  app,
  auth,
  db,
  storage,
  roomsCollection,
  usersCollection,
  onAuthStateChanged,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,
  getDocs,
  Timestamp,
  serverTimestamp,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
  collection,
  addDoc,
  orderBy,
  limit,
  onSnapshot,
  GoogleAuthProvider,
  signInWithPopup
};

export type { FirebaseUser }; 