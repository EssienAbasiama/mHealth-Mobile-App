// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth/";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvwDWXMPj9MxBoZveIhzwMA73W2pvvbQ8",
  authDomain: "mhealth-affdd.firebaseapp.com",
  projectId: "mhealth-affdd",
  storageBucket: "mhealth-affdd.appspot.com",
  messagingSenderId: "395704163167",
  appId: "1:395704163167:web:b24d733282a8a0c5a5f4ea",
  measurementId: "G-VPLBD2NNKB",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);
