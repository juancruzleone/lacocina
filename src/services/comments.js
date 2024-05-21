import { addDoc, collection, onSnapshot, serverTimestamp, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";

/**
 * 
 * @param {string} postId 
 * @param {{email: string, content: string}} data 
 * @returns {Promise<{id: string}>}
 */
export async function saveComment(postId, data) {
    const refComments = collection(db, 'posts', postId, 'comments');

    const doc = await addDoc(refComments, {
        ...data,
        created_at: serverTimestamp(),
    });

    return {
        id: doc.id,
    }
}

/**
 * Retorna los comentarios del post, y se reejecuta el callback cada vez que los comentarios en el 
 * backend cambien.
 * 
 * @param {string} postId
 * @param {(comments: Array<Object>) => void} callback
 * @returns {Unsubscribe}
 */
export function subscribeToComments(postId, callback) {
    const refComments = collection(db, 'posts', postId, 'comments');

    const q = query(refComments, orderBy('created_at'));

    return onSnapshot(q, snapshot => {
        const comments = snapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                email: data.email,
                content: data.content,
                created_at: data.created_at ? data.created_at.toDate() : null,
            }
        });

        callback(comments);
    });
}
