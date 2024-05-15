<script>
export default {
  name: 'App',
}
</script>

<template>
  <nav class="bg-contenedores flex items-center justify-between pt-2 pb-2 pl-7"> 
    <ul class="flex">
      <li><router-link to="/" class="font-montserrat text-white m-2 text-lg">Inicio</router-link></li>
      <li><router-link to="/comunidad" class="font-montserrat text-white m-2 text-lg">Comunidad</router-link></li>
      <li><router-link to="/cocinando" class="font-montserrat text-white m-2 text-lg">Cocinando</router-link></li>
      <li><router-link to="/vip" class="font-montserrat text-white m-2 text-lg">Vip</router-link></li>
      <li><router-link to="/panel" class="font-montserrat text-white m-2 text-lg">Panel</router-link></li>
      <li><router-link to="/contacto" class="font-montserrat text-white m-2 text-lg">Contacto</router-link></li>
    </ul>
    <router-link to="/login" class="font-montserrat text-white m-2 flex items-center bg-white rounded-full p-2"> 
      <img src="/usuario.webp" alt="icono login" class="w-10 h-10">
    </router-link>
  </nav>
  <main>
    <router-view></router-view>
  </main>
  <footer class="p-10 bg-contenedores mt-20 grid grid-cols-2">
    <div class="col-span-2 md:col-span-1">
      <h4 class="font-montserrat text-white text-3xl font-bold ml-5">La cocina</h4>
    </div>
    <div class="col-span-2 md:col-span-1 flex justify-center items-center mt-4 md:mt-0">
      <p class="font-montserrat text-white text-sm">&copy; 2024 La cocina. Todos los derechos reservados.</p>
    </div>
    <div class="col-span-2 flex mt-4 ml-5">
      <ul class="flex">
        <li><router-link to="/" class="font-montserrat text-white m-2 text-sm ml-0">Inicio</router-link></li>
        <li><router-link to="/comunidad" class="font-montserrat text-white m-2 text-sm">Comunidad</router-link></li>
        <li><router-link to="/cocinando" class="font-montserrat text-white m-2 text-sm">Cocinando</router-link></li>
        <li><router-link to="/vip" class="font-montserrat text-white m-2 text-sm">Vip</router-link></li>
        <li><router-link to="/panel" class="font-montserrat text-white m-2 text-sm">Panel</router-link></li>
        <li><router-link to="/contacto" class="font-montserrat text-white m-2 text-sm">Contacto</router-link></li>
      </ul>
    </div>
  </footer>
</template>
