import { addDoc, collection, onSnapshot, serverTimestamp, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";

/**
 * 
 * @param {{email: string, content: string}} data 
 * @returns {Promise<{id: string}>}
 */
export async function saveChatMessage(data) {
    const refChat = collection(db, 'chat');

    const doc = await addDoc(refChat, {
        ...data,
        created_at: serverTimestamp(),
    });

    return {
        id: doc.id,
    }
}

/**
 * Retorna los mensajes de chat, y se reejecuta el callback cada vez que los mensajes en el 
 * backend cambien.
 * 
 * @param {() => {})} callback
 * @returns {Unsubscribe}
 */
export function subscribeToChatMessages(callback) {
    const refChat = collection(db, 'chat');

    const q = query(refChat, orderBy('created_at'));

    return onSnapshot(q, snapshot => {
        const messages = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                userId: doc.data().userId,
                email: doc.data().email,
                content: doc.data().content,
                created_at: doc.data().created_at.toDate(),
            }
        });

        callback(messages);
    });
}