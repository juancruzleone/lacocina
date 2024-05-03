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
 */
export function subscribeToChatMessages(callback) {
    const refChat = collection(db, 'chat');

    const q = query(refChat, orderBy('created_at'));

    onSnapshot(q, snapshot => {
        const messages = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                // data() permite acceder a los datos del documento.
                email: doc.data().email,
                content: doc.data().content,
                // Transformamos el Timestamp a un objeto Date.
                created_at: doc.data().created_at.toDate(),
            }
        });
        callback(messages);
    });
}