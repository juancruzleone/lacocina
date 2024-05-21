import { doc, setDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

/**
 * Obtiene el perfil del usuario por ID.
 *
 * @param {string} id - El ID del usuario.
 * @returns {Promise<{ ...userData }>} - Los datos del perfil del usuario.
 */
export async function getUserProfileById(id) {
  const userRef = doc(db, `users/${id}`);

  try {
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      throw new Error("Usuario no encontrado");
    }

    const userData = userDoc.data();

    return {
      id: userDoc.id,
      email: userData.email,
      bio: userData.bio || '',
      isChef: userData.isChef || false,
      isVip: userData.isVip || false,
      posts: userData.posts || [],
      comments: [], // Inicialmente vacío hasta que se recupere
      role: userData.role || 'user', // Rol predeterminado a 'user'
    };
  } catch (error) {
    console.error('[user-profile.js getUserProfileById] Error al traer el perfil del usuario. ', error);
    throw error; // Reenviar el error para su manejo en el componente
  }
}

/**
 * Obtiene todos los comentarios realizados por el usuario en todas las publicaciones.
 *
 * @param {string} userEmail - La dirección de correo electrónico del usuario.
 * @returns {Promise<Array<Object>>} - Una matriz de objetos de comentario.
 */
export async function getUserComments(userEmail) {
  try {
    const comments = [];

    // Obtener la referencia de la colección de todos los comentarios
    const commentsRef = collection(db, 'comments');

    // Crear una consulta para filtrar comentarios por correo electrónico del usuario
    const userCommentsQuery = query(commentsRef, where('email', '==', userEmail));

    // Buscar todos los comentarios que coincidan con la consulta
    const userCommentsSnapshot = await getDocs(userCommentsQuery);

    // Recorrer cada comentario y agregarlo a los resultados
    userCommentsSnapshot.forEach(commentDoc => {
      comments.push({
        id: commentDoc.id,
        ...commentDoc.data()
      });
    });

    return comments;
  } catch (error) {
    console.error('[user-profile.js getUserComments] Error al obtener los comentarios del usuario. ', error);
    throw error; // Reenviar el error para su manejo en el componente
  }
}

/**
 * Crea un nuevo perfil de usuario.
 *
 * @param {string} id - El ID del usuario.
 * @param {{}} data - Los datos del perfil del usuario.
 * @returns {Promise} - Una promesa que se resuelve cuando se crea el perfil.
 */
export async function createUserProfile(id, data) {
  const userRef = doc(db, `users/${id}`);

  return setDoc(userRef, { ...data });
}
