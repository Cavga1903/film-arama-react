// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  push,
  remove,
  onValue
} from "firebase/database";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "f512bdf6",
  authDomain: "film-arama.firebaseapp.com",
  databaseURL: "https://film-arama-default-rtdb.firebaseio.com",
  projectId: "film-arama",
  storageBucket: "film-arama.appspot.com",
  messagingSenderId: "1234567890",
  appId: "senin-app-id"
};

// 👆 Yukarıdaki bilgileri kendi Firebase Console'undaki ayarlardan al

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {
  db,
  ref,
  push,
  remove,
  onValue,
  auth,
  provider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
};