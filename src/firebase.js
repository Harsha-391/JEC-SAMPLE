import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // PASTE YOUR CONFIG HERE FROM FIREBASE CONSOLE
  apiKey: "AIzaSyC7-cNMK6ssZt5FmWhnA88LhF_kJRoj56A",
  authDomain: "jec-website-55397.firebaseapp.com",
  projectId: "jec-website-55397",
  storageBucket: "jec-website-55397.firebasestorage.app",
  messagingSenderId: "297805586522",
  appId: "1:297805586522:web:141f9b17b4bff8622ef863"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);