<script>
import MainH1 from '../components/MainH1.vue';
import MainH2 from '../components/MainH2.vue';
import Loader from '../components/Loader.vue';
import { fetchPosts, deletePost } from '../services/posts';

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
    this.loadPosts();
  },
  methods: {
    async loadPosts() {
      try {
        this.posts = await fetchPosts();
        this.loading = false; // Una vez que los posts se carguen correctamente, establece loading en false
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    },
    async deletePost(postId) {
      try {
        await deletePost(postId);
        this.loadPosts(); // Refresh posts list after deletion
      } catch (error) {
        console.error("Error deleting post: ", error);
      }
    }
  }
}
</script>

<template>
  <section class="pl-12 mt-10 pb-20">
    <MainH2>Posts publicados</MainH2>
    <div class="mt-5">
      <router-link to="/create-post" class="bg-blue-500 text-white font-montserrat text-center p-2 rounded-lg">Crear Post</router-link>
    </div>
    <Loader v-if="loading"/>
    <div class="pt-5" v-if="!loading">
      <div v-for="post in posts" :key="post.id" class="bg-contenedores w-[72%] h-[280px] radius-comunidad mt-6 p-5">
        <h3 class="text-white font-montserrat text-2xl font-semibold">{{ post.titulo_post }}</h3>
        <p class="bg-white w-[140px] text-center font-montserrat rounded-lg mt-2 p-1">{{ post.categoria_post }}</p>
        <p class="font-montserrat text-white mt-5 mb-5">{{ post.descripcion_post }}</p>
        <div class="flex">
          <router-link :to="'/post/' + post.id" class="text-white bg-gray-500 font-montserrat text-center font-link p-1 radius-mensaje mr-2">Ver más</router-link>
          <router-link :to="'/edit-post/' + post.id" class="bg-yellow-500 text-white font-montserrat text-center p-1 rounded-lg mr-2">Editar</router-link>
          <button @click="deletePost(post.id)" class="bg-red-500 text-white font-montserrat text-center p-1 rounded-lg">Eliminar</button>
        </div>
      </div>
    </div>
  </section>
</template>
