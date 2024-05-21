<script>
import MainH1 from '../components/MainH1.vue';
import MainH2 from '../components/MainH2.vue';
import Loader from '../components/Loader.vue';

import { db } from '../services/firebase.js';
import { collection, getDocs } from "firebase/firestore";

export default {
  name: 'PostsPanel',
  components: { MainH1, MainH2, Loader },
  data() {
    return {
      posts: [],
      loading: true // Para controlar el estado de carga
    };
  },
  async created() {
    try {
      const postsCollection = collection(db, 'posts');
      const postsSnapshot = await getDocs(postsCollection);
      this.posts = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      this.loading = false; // Una vez que los posts se carguen correctamente, establece loading en false
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  }
}
</script>

<template>
    <section class="pl-12 mt-10 pb-20">
      <MainH2>Posts publicados</MainH2>
      <Loader v-if="loading"/>
      <div class="pt-5" v-if="!loading">
        <div v-for="post in posts" :key="post.id" class="bg-contenedores w-[72%] h-[270px] radius-comunidad mt-6 p-5">
          <h3 class="text-white font-montserrat text-2xl font-semibold">{{ post.titulo_post }}</h3>
          <p class="bg-white w-[140px] text-center font-montserrat rounded-lg mt-2 p-1">{{ post.categoria_post }}</p>
          <p class="font-montserrat text-white mt-5 mb-5">{{ post.descripcion_post }}</p>
          <router-link :to="'/post/' + post.id" class="bg-white font-montserrat text-center font-link p-1 radius-mensaje">Ver más</router-link>
        </div>
      </div>
    </section>
  </template>
  