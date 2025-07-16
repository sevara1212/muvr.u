import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove, query, where, getDocs, Timestamp, serverTimestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseConfig } from "./firebase.config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

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
  getDownloadURL
};

export type { FirebaseUser }; 