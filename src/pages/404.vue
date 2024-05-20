<script>
export default {
  name: '404',
};
</script>

<template>
    <section class="container mx-auto text-center mt-16 mb-20">
      <img src="/404.webp" alt="foto de error 404" class="error-404 mx-auto">
      <h1 class="text-6xl font-bold mb-4 font-montserrat">404 - Página no encontrada</h1>
      <p class="text-2xl font-montserrat mb-5">Lo sentimos, la página que estás buscando no existe.</p>
      <router-link to="/" class="text-blue-500 hover:underline bg-black text-white p-2 rounded-lg">Volver al inicio</router-link>
    </section>
  </template>
  

  
