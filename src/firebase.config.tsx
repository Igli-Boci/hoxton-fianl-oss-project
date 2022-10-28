import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCebObChOZu_yHCNzWoO9Lge8-IFAFrZk4",
  authDomain: "onestop-store-11c0f.firebaseapp.com",
  projectId: "onestop-store-11c0f",
  storageBucket: "onestop-store-11c0f.appspot.com",
  messagingSenderId: "29330439906",
  appId: "1:29330439906:web:9c7b37c6e69d12af59a8bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
