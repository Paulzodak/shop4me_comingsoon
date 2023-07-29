// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDG6ptqGOfIMwO3Iu7WP8cCKOMQQ7zohCE",
  authDomain: "jobson-41ea8.firebaseapp.com",
  projectId: "jobson-41ea8",
  storageBucket: "jobson-41ea8.appspot.com",
  messagingSenderId: "278148678632",
  appId: "1:278148678632:web:192d93de97719f9dcc1a5d",
  measurementId: "G-YYF14M1VLH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();
// const analytics = getAnalytics(app);
