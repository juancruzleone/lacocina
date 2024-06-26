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
        },
        {
          pregunta: "¿Qué es una criptomoneda?",
          respuesta: "Una criptomoneda es una moneda digital o virtual que utiliza criptografía para asegurar y verificar las transacciones. A diferencia de las monedas tradicionales, las criptomonedas son descentralizadas y funcionan en tecnología blockchain."
        },
        {
          pregunta: "¿Cómo puedo comprar criptomonedas?",
          respuesta: "Puedes comprar criptomonedas en diversos exchanges de criptomonedas. Necesitarás crear una cuenta, verificar tu identidad y transferir fondos para realizar compras."
        },
        {
          pregunta: "¿Es seguro invertir en criptomonedas?",
          respuesta: "Invertir en criptomonedas conlleva riesgos, al igual que cualquier otra inversión. Es importante investigar, entender los riesgos y considerar solo invertir lo que estás dispuesto a perder."
        },
        {
          pregunta: "¿Qué es la blockchain?",
          respuesta: "El blockchain es una tecnología que permite la existencia de las criptomonedas. Es un libro de contabilidad digital distribuido y descentralizado que registra todas las transacciones a través de una red de computadoras."
        },
        {
          pregunta: "¿Qué beneficios ofrece unirse a La Cocina?",
          respuesta: "Al unirte a La Cocina, tendrás acceso a una comunidad activa de entusiastas de criptomonedas, contenido educativo, análisis de mercado, tutoriales, y la posibilidad de participar en eventos y discusiones exclusivas."
        },
        {
          pregunta: "¿Qué son los NFTs?",
          respuesta: "Los NFTs (tokens no fungibles) son activos digitales únicos que representan la propiedad de un artículo o contenido específico, como arte, música, videos, y más. Utilizan tecnología blockchain para verificar su autenticidad y propiedad."
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
    <div class="bg-portada h-[300px] md:h-[400px] lg:h-[600px] pl-5 md:pl-10">
      <h1 class="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl pt-[80px] md:pt-[100px] lg:pt-[140px]">La cocina</h1>
      <p class="font-montserrat text-xl md:text-2xl lg:text-3xl mt-2 pl-1">Comunidad crypto hispana</p>
    </div>
    <section class="flex flex-col lg:flex-row mt-10 md:mt-20 p-5 md:p-10">
      <div class="lg:w-[50%] lg:pr-[12%] mb-10 lg:mb-0">
        <h2 class="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-center">Quiénes somos?</h2>
        <div class="flex justify-center mt-6">
          <div class="w-16 h-16 md:w-20 md:h-20 rounded-full m-2 md:m-3 border border-gray-900">
            <img src="/nacherx.webp" alt="foto de usuario de nacherx" class="rounded-full">
          </div>
          <div class="w-16 h-16 md:w-20 md:h-20 rounded-full m-2 md:m-3 border border-gray-900">
            <img src="/cromer.webp" alt="foto de usuario de cromer" class="rounded-full">
          </div>
          <div class="w-16 h-16 md:w-20 md:h-20 rounded-full m-2 md:m-3 border border-gray-900">
            <img src="/chefao.webp" alt="foto de usuario de chefao" class="rounded-full">
          </div>
          <div class="w-16 h-16 md:w-20 md:h-20 rounded-full m-2 md:m-3 border border-gray-900">
            <img src="/teos.webp" alt="foto de usuario de teos" class="rounded-full">
          </div>
          <div class="w-16 h-16 md:w-20 md:h-20 rounded-full m-2 md:m-3 border border-gray-900">
            <img src="/kichiro.webp" alt="foto de usuario de kichiro" class="rounded-full">
          </div>
        </div>
      </div>
      <div class="lg:w-[50%]">
        <div>
          <p class="font-montserrat text-base md:text-lg lg:text-xl">
            Somos una comunidad de criptomonedas hispana que se dedica a brindar contenido educativo, informativo y entretenido sobre el mundo de las criptomonedas.
          </p>
          <p class="font-montserrat text-base md:text-lg lg:text-xl mt-2">
            Nuestro objetivo es proporcionar un espacio donde los entusiastas de las criptomonedas puedan aprender, compartir conocimientos y participar en discusiones sobre diversos temas relacionados con las criptomonedas.
          </p>
          <p class="font-montserrat text-base md:text-lg lg:text-xl mt-2">
            Contamos con 5 expertos, también conocidos como chefs, que publicarán contenido especializado sobre diferentes temas del mundo cripto.
          </p>
        </div>
      </div>
    </section>
    <section class="pl-5 md:pl-10 pt-10 md:pt-20 mb-10 md:mb-20">
      <MainH2>Forma parte de nuestra comunidad</MainH2>
      <div class="flex flex-col md:flex-row mt-5 items-center">
        <div class="flex justify-center md:block">
          <img src="/olla.webp" alt="foto de olla" class="w-[100px] h-[100px] md:w-[150px] md:h-[150px] mt-5 rounded-full shadow-2xl">
        </div>
        <div class="bg-contenedores w-full md:w-[87.5%] h-auto md:h-[200px] rounded-lg flex flex-col p-5 shadow-2xl mt-5 md:mt-0 md:ml-5">
          <h3 class="text-lg md:text-2xl font-bold mb-2 text-white font-montserrat">Únete a nuestro servidor de Discord</h3>
          <p class="text-base md:text-lg mb-4 text-white">Sé parte de una comunidad vibrante y activa donde puedes compartir, aprender y crecer junto a otros entusiastas.</p>
          <a href="https://discord.gg/Unahg8Vxur" target="_blank" rel="noopener noreferrer" class="p-3 text-black font-montserrat font-semibold bg-white rounded-lg text-center mt-10 w-full md:w-96">¡Únete Ahora!</a>
        </div>
      </div>
    </section>
    <section class="p-5 md:p-10 pb-10 md:pb-20">
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
    <section class="p-5 md:p-10 pb-10 md:pb-20">
      <MainH2>Post destacado</MainH2>
      <div class="pt-5">
        <Loader v-if="loading"/>
        <div v-else class="flex flex-col md:flex-row bg-contenedores radius-comunidad p-5 mb-8 overflow-hidden shadow-2xl">
          <img :src="postDestacado.img1_post" :alt="postDestacado.titulo_post" class="w-full md:w-60 rounded-lg mb-3 md:mb-0 md:mr-5">
          <div>
              <h3 class="text-white font-montserrat mt-3 cursor-pointer text-xl md:text-2xl font-semibold">{{ postDestacado.titulo_post }}</h3>
              <p class="font-montserrat bg-white w-[100px] md:w-[200px] text-center p-1 rounded-lg mt-3 mb-5">{{ postDestacado.categoria_post }}</p>
              <p class="text-white mt-2 font-montserrat">{{ postDestacado.descripcion_post }}</p>
              <div class="flex mt-4">
              <router-link :to="'/post/' + postDestacado.id">
                <button class="bg-gray-500 text-white rounded-xl p-2 mr-2 font-montserrat">Ver más</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



