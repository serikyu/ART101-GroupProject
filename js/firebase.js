// Firebase App (the core Firebase SDK) must be listed first
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js";

// Add the Firebase services you want to use
import { 
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth-compat.js";

import { 
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-compat.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage-compat.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5v7tRVtB8f16TQmTPq5n2SDY-FzOH20k",
  authDomain: "slugs-near-you.firebaseapp.com",
  projectId: "slugs-near-you",
  storageBucket: "slugs-near-you.appspot.com",
  messagingSenderId: "993053159810",
  appId: "1:993053159810:web:a8e017e8cb3d7fe355df9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Auth state observer
const monitorAuthState = async () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });
};

// Export functionality
export {
  auth,
  db,
  storage,
  monitorAuthState,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  collection,
  addDoc,
  serverTimestamp,
  ref,
  uploadBytes,
  getDownloadURL
};