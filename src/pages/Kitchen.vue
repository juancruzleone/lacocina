<script>
import MainH1 from '../components/MainH1.vue';
import MainH2 from '../components/MainH2.vue';
import Loader from '../components/Loader.vue'; 

import { db } from '../services/firebase.js';
import { collection, getDocs } from "firebase/firestore";

export default {
  name: 'Kitchen',
  components: { MainH1, MainH2, Loader }, 
  data() {
    return {
      posts: [],
      categorias: [
        { nombre: 'Análisis técnico', icono: '/grafico.svg' },
        { nombre: 'Análisis fundamental', icono: '/analisis.svg' },
        { nombre: 'Trading', icono: '/trading.svg' },
        { nombre: 'Onchain', icono: '/onchain.svg' },
        { nombre: 'Airdrops', icono: '/airdrop.svg' }
      ],
      categoriaSeleccionada: '',
      loading: true 
    };
  },
  async created() {
    try {
      const postsCollection = collection(db, 'posts');
      const postsSnapshot = await getDocs(postsCollection);
      this.posts = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      this.loading = false; 
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  },
  computed: {
    postsFiltrados() {
      if (this.categoriaSeleccionada === '') {
        return this.posts;
      } else {
        return this.posts.filter(post => post.categoria_post === this.categoriaSeleccionada);
      }
    }
  },
  methods: {
    filtrarPostsPorCategoria(categoria) {
      this.categoriaSeleccionada = categoria;
    }
  }
}
</script>

<template>
  <div>
    <div class="bg-portada h-64 sm:h-96">
      <MainH1>Cocinando</MainH1>
    </div>
    <section class="py-10 sm:py-12 md:py-16">
      <MainH2 class="px-6 sm:px-12 pb-5 text-center">Categorias</MainH2>
      <div class="flex flex-wrap justify-center px-6 sm:px-12">
        <div v-for="categoria in categorias" :key="categoria.nombre" class="bg-contenedores w-52 h-44 radius-categoria m-3 sm:m-5 flex flex-col items-center justify-center cursor-pointer" @click="filtrarPostsPorCategoria(categoria.nombre)">
          <h3 class="text-white font-montserrat text-center mt-3 text-xl">{{ categoria.nombre }}</h3>
          <div :class="{ 'bg-analisis-fundamental': categoria.nombre === 'Análisis fundamental' }" class="bg-white rounded-full w-24 h-24 flex items-center justify-center mt-10">
            <img :src="categoria.icono" :alt="categoria.nombre" class="w-16">
          </div>
        </div>
      </div>
    </section>
    <section class="pb-20 sm:pb-24 md:pb-28">
      <MainH2 class="px-6 sm:px-12 pt-10 pb-5 font-montserrat">Posts recientes</MainH2>
      <Loader v-if="loading" class="px-6 sm:px-12"/>
      <div class="px-6 sm:px-12" v-if="!loading"> 
        <div v-for="post in postsFiltrados" :key="post.id" class="bg-contenedores w-full sm:w-[98%] radius-comunidad p-5 mb-8 flex flex-col sm:flex-row">
          <img :src="post.img1_post" :alt="post.titulo_post" class="w-full sm:w-60 rounded-lg mb-3 sm:mr-5">
          <div>
            <h3 class="text-white font-montserrat mt-3 cursor-pointer text-2xl font-semibold">{{ post.titulo_post }}</h3>
            <p class="font-montserrat bg-white w-[200px] text-center p-1 rounded-lg mt-3 mb-5">{{ post.categoria_post }}</p>
            <p class="text-white mt-2 font-montserrat">{{ post.descripcion_post }}</p>
            <div class="flex mt-4">
              <router-link :to="'/post/' + post.id">
                <button class="bg-gray-500 text-white rounded-xl p-2 mr-2">Ver más</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>