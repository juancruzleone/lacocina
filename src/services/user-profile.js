import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

/**
 * 
 * @param {string} id 
 * @returns {Promise<{id: string, email: string}>}
 */
export async function getUserProfileById(id) {
    const userRef = doc(db, `users/${id}`);

    try {
        const userDoc = await getDoc(userRef);

        return {
            id: userDoc.id,
            email: userDoc.data().email,
        }
    } catch (error) {
        // TODO: Manejar el error.
        console.error('[user-profile.js getUserProfileById] Error al traer el perfil del usuario. ', error);
    }
}

/**
 * 
 * @param {string} id - El id del usuario.
 * @param {{}} data - La data que queremos asociar.
 * @returns {Promise}
 */
export async function createUserProfile(id, data) {
    const userRef = doc(db, `users/${id}`);

    return setDoc(userRef, {...data});
}