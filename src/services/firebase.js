// Este archivo va a servir como módulo de inicialización de
// Firebase en nuestro proyecto.
// Va a exportar los diferentes elementos de la plataforma,
// como Firestore o Auth, para que otros servicios lo consuman.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Reemplazar con la configuración de *su* proyecto :)
const firebaseConfig = {
    apiKey: "AIzaSyCmw1hNMAforGmePAICo1SoGXktVk3zHJk",
    authDomain: "dv-cwm-2024-1-m.firebaseapp.com",
    projectId: "dv-cwm-2024-1-m",
    storageBucket: "dv-cwm-2024-1-m.appspot.com",
    messagingSenderId: "722222498480",
    appId: "1:722222498480:web:fd412261859dbdc868b175"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);

export const auth = getAuth(app);