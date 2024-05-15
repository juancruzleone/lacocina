<script>
export default {
  name: 'Home',
  data() {
    return {
      preguntas: [
        {
          pregunta: '¿Qué es La Cocina?',
          respuesta: 'La Cocina es una comunidad hispana de criptomonedas dedicada a brindar contenido educativo, informativo y entretenido sobre el mundo de las criptomonedas. Nuestro objetivo es proporcionar un espacio donde los entusiastas de las criptomonedas puedan aprender, compartir conocimientos y participar en discusiones sobre diversos temas relacionados con este apasionante campo. En nuestra sección "Cocinando", nuestros expertos, también conocidos como chefs, publicarán contenido especializado sobre diferentes aspectos del mundo cripto. Cada chef tiene su especialidad y compartirá su experiencia y conocimientos únicos para enriquecer la experiencia de la comunidad. Además, en "Cocinando", los usuarios tendrán la oportunidad de interactuar, hacer preguntas y dejar comentarios para fomentar la colaboración y el aprendizaje colectivo.'
        },
        {
          pregunta: '¿Cuáles son los temas que se tratan en La Cocina?',
          respuesta: 'En La Cocina, cubrimos una amplia gama de temas relacionados con las criptomonedas, incluyendo introducción a blockchain, análisis de proyectos, tutoriales de trading, seguridad de criptoactivos, noticias del mercado, entre otros.'
        },
        {
          pregunta: '¿Qué es una criptomoneda?',
          respuesta: 'Una criptomoneda es una forma de dinero digital que utiliza criptografía para asegurar y verificar transacciones, así como para controlar la creación de nuevas unidades. A diferencia de las monedas tradicionales, las criptomonedas operan de forma descentralizada utilizando tecnología blockchain.'
        },
        {
          pregunta: '¿Cuál es la diferencia entre Bitcoin y Ethereum?',
          respuesta: 'Bitcoin y Ethereum son dos de las criptomonedas más populares, pero tienen diferencias fundamentales. Bitcoin se creó principalmente como un sistema de pago peer-to-peer, mientras que Ethereum es una plataforma que permite a los desarrolladores construir aplicaciones descentralizadas (DApps) utilizando contratos inteligentes.'
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <div class="bg-portada h-[600px] pl-10">
      <h1 class="font-montserrat font-bold text-7xl pt-[140px]">La cocina</h1>
      <p class="font-montserrat text-3xl">Comunidad crypto hispana</p>
    </div>
    <section class="flex mt-20 p-10">
      <div class="w-[50%] pr-[12%]">
        <h2 class="font-montserrat font-bold text-7xl justify-center text-center">Quiénes somos?</h2>
        <div class="flex justify-center m-auto mt-6">
          <div class="w-20 h-20 rounded-full m-3 border border-gray-900"> 
            <img src="/nacherx.jpg" alt="foto de usuario de nacherx" class="rounded-full">
          </div>
          <div class="w-20 h-20 rounded-full m-3 border border-gray-900"> 
            <img src="/cromer.jpg" alt="foto de usuario de cromer" class="rounded-full">
          </div>
          <div class="w-20 h-20 rounded-full m-3 border border-gray-900"> 
            <img src="/chefao.jpg" alt="foto de usuario de chefao" class="rounded-full">
          </div>
          <div class="w-20 h-20 rounded-full m-3 border border-gray-900"> 
            <img src="/teos.jpg" alt="foto de usuario de teos" class="rounded-full">
          </div>
          <div class="w-20 h-20 rounded-full m-3 border border-gray-900"> 
            <img src="/kichiro.jpg" alt="foto de usuario de kichiro" class="rounded-full">
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
      <h2 class="font-montserrat font-bold text-3xl">Forma parte de nuestra comunidad</h2>
      <div class="flex mt-5">
        <div>
          <img src="/olla.jpg" alt="foto de olla" class="w-[150px]">     
        </div>
        <div class="bg-contenedores w-[60%]  h-[160px] radius-comunidad">
        </div>
      </div>
    </section>
    <section class="p-10">
      <h2 class="font-montserrat font-bold text-3xl">Preguntas frecuentes</h2>
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
    <section class="p-10">
      <h2 class="font-montserrat font-bold text-3xl ml-3">Post destacado</h2>
    </section>
  </div>
</template>
