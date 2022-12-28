// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMCfVq_t0_JI1e-Tl8dk897PR2ez7plqs",
  authDomain: "chat-app-1d258.firebaseapp.com",
  projectId: "chat-app-1d258",
  storageBucket: "chat-app-1d258.appspot.com",
  messagingSenderId: "818657678542",
  appId: "1:818657678542:web:3cf96b2eac128f98982c9f",
  measurementId: "G-1753JVBSVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)