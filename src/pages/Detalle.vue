<script>
import MainH1 from '../components/MainH1.vue';
import MainH2 from '../components/MainH2.vue';
import MainLabel from '../components/MainLabel.vue';
import MainInput from '../components/MainInput.vue';
import Loader from '../components/Loader.vue';
import { db } from "../services/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { saveComment, subscribeToComments } from '../services/comments';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "Detalle",
  components: { MainH1, MainH2, MainLabel, MainInput, Loader },
  data() {
    return {
      post: null,
      comments: [],
      newComment: {
        email: "",
        content: ""
      },
      user: null,
      loadingComments: true,
      error: null
    };
  },
  async mounted() {
    this.auth = getAuth();
    onAuthStateChanged(this.auth, user => {
      this.user = user;
      if (user) {
        this.newComment.email = user.email;
      }
    });

    await this.getPostData();
    this.subscribeToPostComments();
  },
  methods: {
    async getPostData() {
      const postId = this.$route.params.id;
      const postRef = doc(db, "posts", postId);
      const postDoc = await getDoc(postRef);
      if (postDoc.exists()) {
        this.post = postDoc.data();
      } else {
        console.error("El post no existe");
      }
    },
    async addComment() {
      if (!this.user) {
        this.error = "Tenes que iniciar sesión para comentar.";
        return;
      }

      try {
        const postId = this.$route.params.id;
        await saveComment(postId, {
          email: this.newComment.email,
          content: this.newComment.content,
        });
        this.newComment.content = "";
        this.error = null;
      } catch (err) {
        console.error("Error añadiendo comentario:", err);
        this.error = "Hubo un problema al añadir su comentario.";
      }
    },
    subscribeToPostComments() {
      const postId = this.$route.params.id;
      subscribeToComments(postId, comments => {
        this.comments = comments;
        this.loadingComments = false;
      });
    }
  }
};
</script>

<template>
  <div>
    <div class="bg-portada h-[400px] bg-cover bg-center">
      <MainH1>{{ post ? post.titulo_post : '' }}</MainH1>
      <div class="pl-14">
        <template v-if="post">
          <p class="font-montserrat text-center bg-black text-white w-[120px] p-2 rounded-lg mt-7">{{ post.categoria_post }}</p>
        </template>
      </div>
    </div>
    <Loader v-if="!post" class="pl-12"/>
    <section v-if="post" class="pl-14 pt-10 pb-10">
      <MainH2 class="border-b-8 border-black">Contenido</MainH2>
      <div>
        <img :src="post.img1_post" alt="Imagen del post" class="w-full h-[400px] rounded-md mt-4 mb-10">
        <div class="flex font-montserrat">
          <div class="w-full mr-10">
            <h3 class="font-bold text-xl mt-10">{{ post.subtitulo1_post }}</h3>
            <p class="mb-10">{{ post.texto1_post }}</p>
            <h3 class="font-bold text-xl mt-5">{{ post.subtitulo2_post }}</h3>
            <p>{{ post.texto2_post }}</p>
          </div>
          <div>
            <img :src="post.img2_post" alt="Imagen del post" class="w-full h-[400px] radius-comunidad mt-4 mb-10">
          </div>
        </div>
      </div>
    </section>
    <section v-if="post" class="pl-14 pb-20">
      <MainH2 class="border-b-8 border-black">Comentarios</MainH2>
      <div>
        <Loader v-if="loadingComments" />
        <div v-if="!loadingComments && comments.length === 0" class="font-montserrat font-semibold text-lg mt-2 text-red-500">
          <p>No hay comentarios.</p>
        </div>
        <div v-for="(comment, index) in comments" :key="index" class="bg-gray-100 p-4 mt-4 rounded-lg shadow-md">
          <MainLabel>{{ comment.email }}</MainLabel>
          <div class="text-gray-600 text-sm font-montserrat">{{ comment.created_at }}</div>
          <MainLabel>{{ comment.content }}</MainLabel>
        </div>
        <form @submit.prevent="addComment" class="mt-6">
          <div v-if="user" class="mb-3 font-montserrat">
            <span class="block mb-2 font-semibold">Email</span>
            <span>{{ user.email }}</span>
          </div>
          <div v-else class="mb-3 font-montserrat text-white bg-red-500 p-2 rounded-lg">
            <span class="block mb-2 font-semibold">Tenes que iniciar sesión para comentar</span>
          </div>
          <div v-if="user" class="mb-4">
            <MainLabel for="content" class="font-semibold">Comentario:</MainLabel>
            <textarea v-model="newComment.content" id="content" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
          </div>
          <div v-if="user" class="flex items-center justify-between font">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Agregar Comentario</button>
          </div>
          <div v-if="error" class="text-red-500 mb-4 font-montseerat mt-4 text-ls">{{ error }}</div>
        </form>
      </div>
    </section>
  </div>
</template>
