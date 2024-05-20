import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { createUserProfile } from "./user-profile";

const AUTH_EMPTY_STATE = {
    id: null,
    email: null,
};

let authUser = AUTH_EMPTY_STATE;
let observers = [];

onAuthStateChanged(auth, user => {
    if(user) {
        authUser = {
            id: user.uid,
            email: user.email,
        };
    } else {
        authUser = AUTH_EMPTY_STATE;
    }
    notifyAll();
});

/**
 * Crea un usuario y lo autentica automáticamente.
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<{id: string, email: string}>}
 */
export async function register(email, password) {
    try {    
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        await createUserProfile(userCredentials.user.uid, {email});

        console.log('Usuario creado: ', userCredentials);
        return {
            id: userCredentials.user.uid,
            email: userCredentials.user.email,
        };
    } catch (error) {
        // TODO: Manejar el error.
        console.error('[auth.js register] Error al crear el usuario: ', error);
    }
}

/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<{id: string, email: string}>}
 */
export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
        .then(user => {
            console.log("Usuario autenticado: ", user);
            return {
                id: user.uid,
                email: user.email,
            }
        });
}

/**
 * @returns {Promise<void>}
 */
export function logout() {
    return signOut(auth);
}

/**
 * Agrega un observer para la autenticación, y lo ejecuta inmediatamente.
 * 
 * @param {(user) => void} callback 
 * @returns {() => void} - Función para cancelar la suscripción.
 */
export function subscribeToAuth(callback) {
    observers.push(callback);
    notify(callback);

    return () => observers = observers.filter(obs => obs !== callback);
}

/**
 * Ejecuta el observer y le pasa los datos del usuario.
 * 
 * @param {(user) => void} observer 
 */
function notify(observer) {
    observer({...authUser});
}

/**
 * Notifica a todos los observers.
 * Esta función debe invocarse cada vez que los datos del estado de autenticación cambien.
 */
function notifyAll() {
    observers.forEach(obs => notify(obs));
}

/**
 * Verifica si el usuario autenticado tiene el correo especificado.
 * @param {string} email - El correo electrónico a verificar.
 * @returns {boolean} - true si el correo coincide, false en caso contrario.
 */
export function isAuthenticatedEmail(email) {
    return authUser.email === email;
}
