import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4-AKUqHwX0AIuFYGP4j2fRAr-5sikJiA",
  authDomain: "chat-db2f4.firebaseapp.com",
  projectId: "chat-db2f4",
  storageBucket: "chat-db2f4.appspot.com",
  messagingSenderId: "917369723297",
  appId: "1:917369723297:web:8cbaf957c6bb48fa9f13e0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()