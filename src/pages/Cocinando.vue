<script>
import MainH1 from '../components/MainH1.vue';
import MainH2 from '../components/MainH2.vue';
import { db } from '../services/firebase.js';
import { collection, getDocs } from "firebase/firestore";

export default {
  name: 'Cocinando',
  components: { MainH1, MainH2 },
  data() {
    return {
      posts: []
    };
  },
  async created() {
    try {
      const postsCollection = collection(db, 'posts');
      const postsSnapshot = await getDocs(postsCollection);
      this.posts = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  },
  methods: {
    editarCurso(curso) {
      // Implementa la lógica para editar el curso aquí
    },
    eliminarCurso(id) {
      // Implementa la lógica para eliminar el curso aquí
    }
  }
}
</script>

<template>
  <div>
    <div class="bg-portada h-96">
      <MainH1>Cocinando</MainH1>
    </div>
    <section>
      <MainH2 class="pl-12 pt-10 pb-5 text-center">Categorias</MainH2>
      <div class="flex ml-12 justify-center flex-wrap">
        <div class="bg-contenedores w-52 h-44 radius-categoria m-5 flex flex-col items-center justify-center">
          <h3 class="text-white font-montserrat text-center mt-3 cursor-pointer text-xl">Análisis técnico</h3>
          <div class="bg-white rounded-full w-24 h-24 flex items-center justify-center mt-8">
            <img src="/grafico.svg" alt="Icono de gráfico" class="w-16">
          </div>
        </div>
        <div class="bg-contenedores w-52 h-44 radius-categoria m-5 flex flex-col items-center justify-center">
          <h3 class="text-white font-montserrat text-center mt-3 cursor-pointer text-xl">Análisis fundamental</h3>
          <div class="bg-white rounded-full w-24 h-24 flex items-center justify-center mt-8">
            <img src="/analisis.svg" alt="Icono de análisis fundamental" class="w-16">
          </div>
        </div>
        <div class="bg-contenedores w-52 h-44 radius-categoria m-5 flex flex-col items-center justify-center">
          <h3 class="text-white font-montserrat text-center mt-3 cursor-pointer text-xl">Trading</h3>
          <div class="bg-white rounded-full w-24 h-24 flex items-center justify-center mt-8">
            <img src="/trading.svg" alt="Icono de trading" class="w-16">
          </div>
        </div>
        <div class="bg-contenedores w-52 h-44 radius-categoria m-5 flex flex-col items-center justify-center">
          <h3 class="text-white font-montserrat text-center mt-3 cursor-pointer text-xl">Onchain</h3>
          <div class="bg-white rounded-full w-24 h-24 flex items-center justify-center mt-8">
            <img src="/onchain.svg" alt="Icono de onchain" class="w-16">
          </div>
        </div>
        <div class="bg-contenedores w-52 h-44 radius-categoria m-5 flex flex-col items-center justify-center">
          <h3 class="text-white font-montserrat text-center mt-3 cursor-pointer text-xl">Airdrops</h3>
          <div class="bg-white rounded-full w-24 h-24 flex items-center justify-center mt-8">
            <img src="/airdrop.svg" alt="Icono de airdrop" class="w-16">
          </div>
        </div>
      </div>
    </section>
    <section class="pb-20">
      <MainH2 class="pl-12 pt-10 pb-5 font-montserrat">Posts recientes</MainH2>
      <div class="pl-12">
        <div v-for="post in posts" :key="post.id" class="bg-contenedores w-[98%] radius-comunidad p-5 mb-8">
          <h3 class="text-white font-montserrat mt-3 cursor-pointer text-2xl font-semibold">{{ post.titulo_post }}</h3>
          <p class="font-montserrat bg-white w-[200px] text-center p-1 rounded-lg mt-3 mb-5">{{ post.categoria_post }}</p>
          <p class="text-white mt-2 font-montserrat">{{ post.descripcion_post }}</p>
          <div class="flex mt-4">
            <router-link :to="'/post/' + post.id">
              <button class="bg-black text-white rounded-xl  p-2 mr-2">Ver más</button>
            </router-link>
            <button @click="editarCurso(post)" class="bg-black text-white rounded-xl p-2 mr-2">Editar</button>
            <button @click="eliminarCurso(post.id)" class="bg-black text-white rounded-xl py-2 px-2">Eliminar</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
