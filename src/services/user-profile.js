import { doc, getDoc, setDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

/**
 * 
 * @param {string} id 
 * @returns {Promise<{id: string, email: string, bio: string, isChef: boolean, isVip: boolean, posts: Array, comments: Array, role: string}>}
 */
export async function getUserProfileById(id) {
    const userRef = doc(db, `users/${id}`);

    try {
        const userDoc = await getDoc(userRef);

        if (!userDoc.exists()) {
            throw new Error("User not found");
        }

        const userData = userDoc.data();
        
        // Obtener los posts del usuario (suponiendo que los posts son una propiedad del perfil del usuario)
        const posts = userData.posts || [];

        // Array para almacenar los comentarios del usuario
        let userComments = [];

        // Obtener los comentarios de cada post
        for (const postId of posts) {
            const commentsRef = collection(db, `posts/${postId}/comments`);
            const q = query(commentsRef, where("email", "==", userData.email));
            const querySnapshot = await getDocs(q);
            
            querySnapshot.forEach((doc) => {
                userComments.push({
                    postId,
                    ...doc.data(),
                    id: doc.id,
                });
            });
        }

        return {
            id: userDoc.id,
            email: userData.email,
            isChef: userData.isChef || false,
            isVip: userData.isVip || false,
            posts: posts,
            comments: userComments,
            role: userData.role || 'user', // Default role to 'user'
        }
    } catch (error) {
        console.error('[user-profile.js getUserProfileById] Error al traer el perfil del usuario. ', error);
        throw error; // Rethrow the error for handling in the component
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
