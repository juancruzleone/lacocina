<script>
export default {
  name: '404',
};
</script>

<template>
  <section class="container mx-auto text-center py-16 sm:py-20 md:py-24">
    <img src="/404.webp" alt="foto de error 404" class="error-404 mx-auto w-64 sm:w-80 md:w-96 mb-6 sm:mb-8 md:mb-10">
    <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-montserrat">404 - Página no encontrada</h1>
    <p class="text-xl sm:text-2xl font-montserrat mb-8 sm:mb-10 md:mb-12">Lo sentimos, la página que estás buscando no existe.</p>
    <router-link to="/" class="text-blue-500 hover:underline bg-black text-white px-4 py-2 rounded-lg text-lg sm:text-xl">Volver al inicio</router-link>
  </section>
</template>