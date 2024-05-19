// Firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWRLg1V4IJIaZU1L0Uo897L9eIGFCbL8o",
  authDomain: "cwm-2023-2-t.firebaseapp.com",
  projectId: "cwm-2023-2-t",
  storageBucket: "cwm-2023-2-t.appspot.com",
  messagingSenderId: "121815330234",
  appId: "1:121815330234:web:3a21f5e1760e8d10114183"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };