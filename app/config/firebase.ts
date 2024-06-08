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
// analytics.isSupported();

const errorMessages = {
  "auth/invalid-email": "The email address is not valid.",
  "auth/user-disabled": "The user account has been disabled.",
  "auth/user-not-found": "No user found with this email address.",
  "auth/email-already-in-use": "The email address is already in use.",
  "auth/weak-password": "Password should be at least 6 characters.",
  "auth/wrong-password": "The password is incorrect.",
  "auth/invalid-credential": "Incorrect Email",
  "auth/missing-password": "Fill in Password",
  "auth/network-request-failed": "Check your Internet connection",
  // Add other error messages as needed
};

// Function to categorize errors
export const categorizeFirebaseError = (error) => {
  let emailError = null;
  let passwordError = null;
  const plainMessage =
    errorMessages[error.code] || "An error occurred. Please try again.";

  switch (error.code) {
    case "auth/invalid-email":
    case "auth/user-disabled":
    case "auth/user-not-found":
    case "auth/email-already-in-use":
    case "auth/invalid-credential":
    case "auth/network-request-failed":
      emailError = plainMessage;
      break;
    case "auth/weak-password":
    case "auth/wrong-password":
    case "auth/missing-password":
      passwordError = plainMessage;
      break;
    default:
      // Handle other errors
      break;
  }

  return { emailError, passwordError };
};
