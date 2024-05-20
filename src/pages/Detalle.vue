<script>
  import { db } from "../services/firebase.js";
  import { doc, getDoc } from "firebase/firestore";
  import MainH1 from '../components/MainH1.vue'
  import MainH2 from '../components/MainH2.vue'
  import MainLabel from '../components/MainLabel.vue'
  import MainInput from '../components/MainInput.vue'
  
  export default {
    name: "Detalle",
    components: { MainH1, MainH2, MainLabel, MainInput },
    data() {
      return {
        post: null,
        comments: [
          {
            author: 'Juan Perez',
            date: '2024-05-15',
            text: 'Este es un comentario de ejemplo. Me gustó mucho el contenido de este post.'
          },
          {
            author: 'Maria Gomez',
            date: '2024-05-16',
            text: 'Muy interesante el artículo. Tengo algunas preguntas sobre el tema discutido.'
          },
          {
            author: 'Carlos Lopez',
            date: '2024-05-17',
            text: 'Gracias por compartir esta información. Fue muy útil para mi proyecto.'
          }
        ],
        newComment: {
          author: '',
          text: ''
        }
      };
    },
    async mounted() {
      await this.getPostData();
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
      addComment() {
        const date = new Date().toISOString().split('T')[0];
        this.comments.push({ ...this.newComment, date });
        this.newComment.author = '';
        this.newComment.text = '';
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
      <section class="pl-14 pb-20">
        <MainH2 class="border-b-8 border-black">Comentarios</MainH2>
        <div>
          <div v-for="(comment, index) in comments" :key="index" class="bg-gray-100 p-4 mt-4 rounded-lg shadow-md">
            <MainLabel>{{ comment.author }}</MainLabel>
            <div class="text-gray-600 text-sm font-montserrat">{{ comment.date }}</div>
            <MainLabel>{{ comment.text }}</MainLabel>
          </div>
          <form @submit.prevent="addComment" class="mt-6">
            <div class="mb-4">
              <MainLabel for="author">Nombre:</MainLabel>
              <MainInput v-model="newComment.author" type="text" id="author" required />
            </div>
            <div class="mb-4">
              <MainLabel for="text">Comentario:</MainLabel>
              <textarea v-model="newComment.text" id="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
            </div>
            <div class="flex items-center justify-between font">
              <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Agregar Comentario</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </template>
  
  