import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9kORYd4yGQFZZXM3JIu2dOJN5Ffl6BRw",
  authDomain: "coder-react-b10ae.firebaseapp.com",
  projectId: "coder-react-b10ae",
  storageBucket: "coder-react-b10ae.appspot.com",
  messagingSenderId: "706257890811",
  appId: "1:706257890811:web:13596316dc2f97a09aef5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a Firestore instance
export const db = getFirestore(app);
