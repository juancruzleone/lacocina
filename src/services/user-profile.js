import { doc, setDoc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

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
      posts: [],
      comments: [],
      role: userData.role || 'user',
    };
  } catch (error) {
    console.error('[user-profile.js getUserProfileById] Error al traer el perfil del usuario. ', error);
    throw error;
  }
}

export async function getUserComments(userEmail) {
  try {
    const comments = [];
    const postsRef = collection(db, 'posts');
    const postsSnapshot = await getDocs(postsRef);

    for (const postDoc of postsSnapshot.docs) {
      const commentsRef = collection(db, `posts/${postDoc.id}/comments`);
      const userCommentsQuery = query(commentsRef, where('email', '==', userEmail));
      const userCommentsSnapshot = await getDocs(userCommentsQuery);

      userCommentsSnapshot.forEach(commentDoc => {
        comments.push({
          postId: postDoc.id,
          ...commentDoc.data()
        });
      });
    }

    return comments;
  } catch (error) {
    console.error('[user-profile.js getUserComments] Error al obtener los comentarios del usuario. ', error);
    throw error;
  }
}

export async function getAllPosts() {
  try {
    const posts = [];
    const postsRef = collection(db, 'posts');
    const postsSnapshot = await getDocs(postsRef);

    postsSnapshot.forEach(postDoc => {
      posts.push({
        id: postDoc.id,
        ...postDoc.data()
      });
    });

    return posts;
  } catch (error) {
    console.error('[user-profile.js getAllPosts] Error al obtener todas las publicaciones. ', error);
    throw error;
  }
}

export async function createUserProfile(id, data) {
  const userRef = doc(db, `users/${id}`);
  return setDoc(userRef, { ...data });
}
