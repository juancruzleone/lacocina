<script>
import { subscribeToAuth, logout } from './services/auth';

export default {
  name: 'App',
  data() {
    return {
      showNavMenu: false,
      user: {
        id: null,
        email: null,
        isAdmin: false,
      },
    };
  },
  mounted() {
    subscribeToAuth((newUserData) => {
      this.user = { ...newUserData, isAdmin: this.checkAdminStatus(newUserData.email) };
    });
  },
  methods: {
    handleLogout() {
      logout().then(() => {
        this.user = {
          id: null,
          email: null,
          isAdmin: false,
        };
        this.$router.push({ path: '/login' });
      });
    },
    checkAdminStatus(email) {
      const allowedEmails = ['juan.leone@davinci.edu.ar', 'cromer@gmail.com', 'kichiro@gmail.com', 'chefao@gmail.com', 'nacherx@gmail.com', 'teos@gmail.com'];
      return allowedEmails.includes(email);
    },
    toggleNavMenu() {
      this.showNavMenu = !this.showNavMenu;
    },
  },
};
</script>


<template>
  <div>
    <!-- Nav -->
    <nav class="bg-contenedores flex items-center justify-between pt-2 pb-2 pl-10">
      <div class="flex items-center">
        <!-- Botón para mostrar/ocultar menú de navegación en dispositivos móviles -->
        <button @click="toggleNavMenu" class="md:hidden text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <!-- Logo o título del sitio -->
        <h1 class="text-white font-montserrat text-lg ml-2">La Cocina</h1>
      </div>
      <!-- Menú de navegación en dispositivos de escritorio -->
      <ul class="hidden md:flex">
        <li><router-link to="/" class="font-montserrat text-white m-2 text-lg">Inicio</router-link></li>
        <li><router-link to="/comunidad" class="font-montserrat text-white m-2 text-lg">Comunidad</router-link></li>
        <li><router-link to="/cocinando" class="font-montserrat text-white m-2 text-lg">Cocinando</router-link></li>
        <li><router-link to="/vip" class="font-montserrat text-white m-2 text-lg">Vip</router-link></li>
        <li v-if="user.isAdmin || user.email === 'juan.leone@davinci.edu.ar'">
          <router-link to="/panel" class="font-montserrat text-white m-2 text-lg">Panel</router-link>
        </li>
      </ul>
      <!-- Icono de perfil y botón de cierre de sesión -->
      <div class="flex items-center">
        <router-link
          v-if="user.id"
          :to="'/perfil/' + user.id"
          class="font-montserrat text-white m-2 flex items-center bg-white rounded-full p-2 mr-4"
        >
          <img src="/usuario.webp" alt="icono login" class="w-10 h-10 p-1">
        </router-link>
        <router-link v-else to="/register" class="font-montserrat text-white m-2 flex items-center bg-white rounded-full p-2 mr-4">
          <img src="/usuario.webp" alt="icono login" class="w-10 h-10 p-1">
        </router-link>
        <button
          v-if="user.id"
          @click="handleLogout"
          class="font-montserrat text-white m-2 flex items-center bg-white rounded-full p-2 mr-4"
        >
          <img src="/cerrar-sesion.webp" alt="icono cerrar sesión" class="w-10 h-10 p-1">
        </button>
      </div>
    </nav>
    <!-- Menú de navegación en dispositivos móviles -->
    <div
      v-show="showNavMenu"
      class="fixed top-0 left-0 w-full h-full bg-white z-10 transform transition-transform duration-300 ease-in-out"
      :class="showNavMenu ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex justify-end p-4">
        <button @click="toggleNavMenu" class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <nav class="flex flex-col items-center justify-center h-full">
        <ul class="text-center">
          <li>
            <router-link to="/" class="font-montserrat text-black block mb-6 text-2xl" @click.native="toggleNavMenu">
              Inicio
            </router-link>
          </li>
          <li>
            <router-link to="/comunidad" class="font-montserrat text-black block mb-6 text-2xl" @click.native="toggleNavMenu">
              Comunidad
            </router-link>
          </li>
          <li>
            <router-link to="/cocinando" class="font-montserrat text-black block mb-6 text-2xl" @click.native="toggleNavMenu">
              Cocinando
            </router-link>
          </li>
          <li>
            <router-link to="/vip" class="font-montserrat text-black block mb-6 text-2xl" @click.native="toggleNavMenu">
              Vip
            </router-link>
          </li>
          <li v-if="user.isAdmin || user.email === 'juan.leone@davinci.edu.ar'">
            <router-link to="/panel" class="font-montserrat text-black block mb-6 text-2xl" @click.native="toggleNavMenu">
              Panel
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <!-- Contenido principal -->
    <main>
      <router-view></router-view>
    </main>
    <!-- Footer -->
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
          <li v-if="user.isAdmin">
            <router-link to="/panel" class="font-montserrat text-white m-2 text-sm">Panel</router-link>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>


