<script>
import { subscribeToAuth, logout } from './services/auth';

export default {
  name: 'App',
  data() {
    return {
      authUser: null,
    };
  },
  mounted() {
    subscribeToAuth((newUserData) => {
      this.authUser = newUserData;
    });
  },
  methods: {
    handleLogout() {
      logout().then(() => {
        this.authUser = null; // Reset user data after logout
      });
    }
  }
};
</script>

<template>
  <nav class="bg-contenedores flex items-center justify-between pt-2 pb-2 pl-10"> 
    <ul class="flex">
      <li><router-link to="/" class="font-montserrat text-white m-2 text-lg">Inicio</router-link></li>
      <li><router-link to="/comunidad" class="font-montserrat text-white m-2 text-lg">Comunidad</router-link></li>
      <li><router-link to="/cocinando" class="font-montserrat text-white m-2 text-lg">Cocinando</router-link></li>
      <li><router-link to="/vip" class="font-montserrat text-white m-2 text-lg">Vip</router-link></li>
      <li><router-link to="/panel" class="font-montserrat text-white m-2 text-lg">Panel</router-link></li>
      <li><router-link to="/contacto" class="font-montserrat text-white m-2 text-lg">Contacto</router-link></li>
    </ul>
    <div class="flex items-center">
      <router-link
        v-if="authUser"
        :to="'/perfil/' + authUser.id"
        class="font-montserrat text-white m-2 flex items-center bg-white rounded-full p-2 mr-4"
      >
        <img src="/usuario.webp" alt="icono login" class="w-10 h-10 p-1">
      </router-link>
      <router-link v-else to="/register" class="font-montserrat text-white m-2 flex items-center bg-white rounded-full p-2 mr-4">
        <img src="/usuario.webp" alt="icono login" class="w-10 h-10 p-1">
      </router-link>
      <button
        v-if="authUser"
        @click="handleLogout"
        class="font-montserrat text-white m-2 text-lg bg-red-500 px-4 py-2 rounded"
      >
        Deslogear
      </button>
    </div>
  </nav>
  <main>
    <router-view></router-view>
  </main>
  <footer class="p-10 bg-contenedores grid grid-cols-2">
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
