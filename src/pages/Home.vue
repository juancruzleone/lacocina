<script>
import MainH2 from '../components/MainH2.vue';
import Loader from '../components/Loader.vue';
import { db } from '../services/firebase.js';
import { collection, getDocs, query, limit } from "firebase/firestore";

export default {
  name: 'Home',
  components: { MainH2, Loader },
  data() {
    return {
      postDestacado: null,
      loading: true,
      preguntas: [
        {
          pregunta: "¿Qué es La Cocina?",
          respuesta: "La Cocina es una comunidad de criptomonedas hispana dedicada a brindar contenido educativo, informativo y entretenido sobre el mundo de las criptomonedas."
        },
        {
          pregunta: "¿Cómo puedo unirme a La Cocina?",
          respuesta: "Puedes unirte a nuestro servidor de Discord y seguirnos en nuestras redes sociales. En nuestra página principal encontrarás los enlaces para unirte."
        },
        {
          pregunta: "¿Qué tipo de contenido publican?",
          respuesta: "Publicamos artículos, análisis, tutoriales y noticias sobre diversas criptomonedas y tecnologías relacionadas. También organizamos eventos y discusiones en nuestro servidor de Discord."
        },
        {
          pregunta: "¿Quiénes son los 'chefs'?",
          respuesta: "Los 'chefs' son los expertos en criptomonedas de nuestra comunidad que publican contenido especializado y lideran las discusiones sobre diversos temas del mundo cripto."
        },
        {
          pregunta: "¿La Cocina es gratuita?",
          respuesta: "Sí, unirte a nuestra comunidad y acceder a la mayoría de nuestro contenido es completamente gratuito. Sin embargo, también ofrecemos contenido exclusivo para nuestros miembros VIP."
        }
      ]
    };
  },
  async created() {
    try {
      const postsCollection = collection(db, 'posts');
      const postQuery = query(postsCollection, limit(1));
      const postsSnapshot = await getDocs(postQuery);
      const posts = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      if (posts.length > 0) {
        this.postDestacado = posts[0];
      }
    } catch (error) {
      console.error("Error fetching posts: ", error);
    } finally {
      this.loading = false;
    }
  },
}
</script>




<template>
  <div>
    <div class="bg-portada h-[600px] pl-10">
      <h1 class="font-montserrat font-bold text-7xl pt-[140px]">La cocina</h1>
      <p class="font-montserrat text-3xl mt-2 pl-1">Comunidad crypto hispana</p>
    </div>
    <section class="flex mt-20 p-10">
      <div class="w-[50%] pr-[12%]">
        <h2 class="font-montserrat font-bold text-7xl justify-center text-center">Quiénes somos?</h2>
        <div class="flex justify-center m-auto mt-6">
          <div class="w-20 h-20 rounded-full m-3 border border-gray-900">
            <img src="/nacherx.webp" alt="foto de usuario de nacherx" class="rounded-full">
          </div>
          <div class="w-20 h-20 rounded-full m-3 border border-gray-900">
            <img src="/cromer.webp" alt="foto de usuario de cromer" class="rounded-full">
          </div>
          <div class="w-20 h-20 rounded-full m-3 border border-gray-900">
            <img src="/chefao.webp" alt="foto de usuario de chefao" class="rounded-full">
          </div>
          <div class="w-20 h-20 rounded-full m-3 border border-gray-900">
            <img src="/teos.webp" alt="foto de usuario de teos" class="rounded-full">
          </div>
          <div class="w-20 h-20 rounded-full m-3 border border-gray-900">
            <img src="/kichiro.webp" alt="foto de usuario de kichiro" class="rounded-full">
          </div>
        </div>
      </div>
      <div class="w-[50%]">
        <div>
          <p class="font-montserrat text-xl w-82">
            Somos una comunidad de criptomonedas hispana que se dedica a brindar contenido educativo, informativo y entretenido sobre el mundo de las criptomonedas.
          </p>
          <p class="font-montserrat text-xl w-82 mt-2">
            Nuestro objetivo es proporcionar un espacio donde los entusiastas de las criptomonedas puedan aprender, compartir conocimientos y participar en discusiones sobre diversos temas relacionados con las criptomonedas.</p>
          <p class="font-montserrat text-xl w-82 mt-2">
            Contamos con 5 expertos, también conocidos como chefs, que publicarán contenido especializado sobre diferentes temas del mundo cripto.
          </p>
        </div>
      </div>
    </section>
    <section class="pl-10 pt-20 mb-20">
      <MainH2>Forma parte de nuestra comunidad</MainH2>
      <div class="flex mt-5 items-center">
        <div>
          <img src="/olla.webp" alt="foto de olla" class="w-[150px] h-[150px] mt-5 rounded-full shadow-2xl">
        </div>
        <div class="bg-contenedores w-[87.5%] h-[200px] rounded-lg flex flex-col p-5 shadow-2xl ml-5">
          <h3 class="text-2xl font-bold mb-2 text-white font-montserrat">Únete a nuestro servidor de Discord</h3>
          <p class="text-lg mb-4 text-white">Sé parte de una comunidad vibrante y activa donde puedes compartir, aprender y crecer junto a otros entusiastas.</p>
          <a href="https://discord.gg/Unahg8Vxur" target="_blank" rel="noopener noreferrer" class="p-3 text-black font-montserrat font-semibold bg-white rounded-lg text-center mt-10 w-96">¡Únete Ahora!</a>
        </div>
      </div>
    </section>
    <section class="p-10 pb-20">
      <MainH2>Preguntas frecuentes</MainH2>
      <div class="mt-5">
        <div v-for="(pregunta, index) in preguntas" :key="index" class="mb-3">
          <input type="checkbox" :id="'pregunta' + (index + 1)" class="ocultar hidden">
          <label :for="'pregunta' + (index + 1)" class="boton-acordeon bg-contenedores rounded-lg py-3 px-5 inline-block cursor-pointer w-full">
            <span class="inline-block text-white font-montserrat">{{ pregunta.pregunta }}</span>
            <img src="/flecha-abajo.webp" alt="Flecha Abajo" class="float-right ml-auto transform transition-transform duration-300 w-5 h-5">
          </label>
          <div class="respuesta bg-gray-800 rounded-lg p-5 mb-3 hidden text-white font-montserrat">
            <p v-html="pregunta.respuesta"></p>
          </div>
        </div>
      </div>
    </section>
    <section class="p-10 pb-20">
      <MainH2>Post destacado</MainH2>
      <div class="pt-5">
        <Loader v-if="loading"/>
        <div v-else class="flex bg-contenedores radius-comunidad p-5 mb-8 overflow-hidden shadow-2xl">
          <img :src="postDestacado.img1_post" :alt="postDestacado.titulo_post" class="w-60 rounded-lg mb-3 mr-5">
          <div>
              <h3 class="text-white font-montserrat mt-3 cursor-pointer text-2xl font-semibold">{{ postDestacado.titulo_post }}</h3>
              <p class="font-montserrat bg-white w-[200px] text-center p-1 rounded-lg mt-3 mb-5">{{ postDestacado.categoria_post }}</p>
              <p class="text-white mt-2 font-montserrat">{{ postDestacado.descripcion_post }}</p>
              <div class="flex mt-4">
              <router-link :to="'/post/' + postDestacado.id">
                <button class="bg-black text-white rounded-xl p-2 mr-2 font-montserrat">Ver más</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

