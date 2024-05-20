import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

/**
 * 
 * @param {string} id 
 * @returns {Promise<{id: string, email: string, bio: string, isChef: boolean, isVip: boolean, posts: Array, comments: Array}>}
 */
export async function getUserProfileById(id) {
    const userRef = doc(db, `users/${id}`);

    try {
        const userDoc = await getDoc(userRef);

        if (!userDoc.exists()) {
            throw new Error("User not found");
        }

        const userData = userDoc.data();
        
        return {
            id: userDoc.id,
            email: userData.email,
            bio: userData.bio || '',
            isChef: userData.isChef || false,
            isVip: userData.isVip || false,
            posts: userData.posts || [],
            comments: userData.comments || [],
        }
    } catch (error) {
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

    return setDoc(userRef, { ...data });
}
