import { db } from './firebase';
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const postsCollection = collection(db, 'posts');

export const fetchPosts = async () => {
  try {
    const postsSnapshot = await getDocs(postsCollection);
    return postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching posts: ", error);
    throw error;
  }
};

export const fetchPostById = async (id) => {
  try {
    const postDoc = await getDoc(doc(postsCollection, id));
    return { id: postDoc.id, ...postDoc.data() };
  } catch (error) {
    console.error("Error fetching post: ", error);
    throw error;
  }
};

export const createPost = async (post) => {
  try {
    const postDoc = await addDoc(postsCollection, post);
    return postDoc.id;
  } catch (error) {
    console.error("Error creating post: ", error);
    throw error;
  }
};

export const updatePost = async (id, updatedPost) => {
  try {
    await updateDoc(doc(postsCollection, id), updatedPost);
  } catch (error) {
    console.error("Error updating post: ", error);
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    await deleteDoc(doc(postsCollection, id));
  } catch (error) {
    console.error("Error deleting post: ", error);
    throw error;
  }
};
