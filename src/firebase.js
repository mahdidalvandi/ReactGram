// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig= {
  apiKey: "AIzaSyBYxW1L0RJiJ2GOB07ghd-TLFOI_BOMH6g",
  authDomain: "reactgram-e8491.firebaseapp.com",
  projectId: "reactgram-e8491",
  storageBucket: "reactgram-e8491.appspot.com",
  messagingSenderId: "614214374562",
  appId: "1:614214374562:web:5b26f0130c5589569db3fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
