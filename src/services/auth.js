// Servicio de autenticación con Firebase Authentication.

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { createUserProfile } from "./user-profile";

const AUTH_EMPTY_STATE = {
    id: null,
    email: null,
};

// Definimos una variable para contener los datos del usuario autenticado.
// Vamos a implementar nuestra propia versión del patrón Observer para que los componentes
// u otros elementos de nuestra app puedan enterarse de los cambios de esta variable.
let authUser = AUTH_EMPTY_STATE;

// Definimos una lista de "observers".
let observers = [];

onAuthStateChanged(auth, user => {
    if(user) {
        // Hay un usuario autenticado.
        authUser = {
            id: user.uid,
            email: user.email,
        };
    } else {
        // No hay un usuario autenticado.
        authUser = AUTH_EMPTY_STATE;
    }
    // Notificamos los cambios ocurridos en el estado de autenticación.
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
        // Registramos el usuario en Auth.
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        // Como es costumbre, interceptamos la promesa para remover el objeto de Firebase.

        // Creamos el perfil el usuario en Firestore.
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

/*----------------------------------------------------
| Observer para el estado de autenticación
+-----------------------------------------------------
| Observer es un patrón de diseño muy útil para muchos escenarios.
| De hecho, lo han estado usando sin, tal vez, saberlo.
|
| ¿Cómo funciona?
| Es bastante común encontrarnos con el siguiente escenario:
| Tenemos un elemento de nuestro sistema ("sujeto" o "subject") que puede cambiar. 
| Y tenemos muchos otros elementos ("observadores" u "observers") que quieren enterarse 
| de los cambios de ese "sujeto".
| Observer es un mecanismo para resolver esta situación.
|
| En nuestro caso, la variable "authUser" es el sujeto. Queremos permitir que cualquier
| elemento de nuestro sistema se entere de los cambios que esa variable reciba.
| Para esto, vamos a crear una función de "subscribeToAuth" (suscribirse a la autenticación)
| que va a recibir un "callback", que sería el observer.
|
| Nota: "Suscribirse" es el término habitual para asociar un observer a un sujeto. También
| pueden verlo como "escuchar" (listen), "observar" (watch) o "adjuntar" (attach).
|
| Es ESENCIAL que siempre nos aseguremos de que las suscripciones a un observer puedan
| cancelarse. Y por supuesto, que todo aquel que se suscriba cancele la suscripción
| cuando ya no la necesite.
+-----------------------------------------------------*/
/**
 * Agrega un observer para la autenticación, y lo ejecuta inmediatamente.
 * 
 * @param {(user) => void} callback 
 * @returns {() => void} - Función para cancelar la suscripción.
 */
export function subscribeToAuth(callback) {
    // Agregamos el callback al array de observers
    observers.push(callback);

    // console.log("Observer para auth agregado. El stack es: ", observers);

    // Ejecutamos el callback inmediatamente para indicarle los datos actuales.
    notify(callback);

    // Retornamos una función de cancelar la suscripción.
    // Esta función elimina del array de observers al que acabamos de agregar.
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