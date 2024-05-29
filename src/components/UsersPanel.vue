<script>
import MainH1 from '../components/MainH1.vue';
import MainH2 from '../components/MainH2.vue';
import Loader from '../components/Loader.vue';

import { db } from '../services/firebase.js';
import { collection, getDocs } from "firebase/firestore";

export default {
  name: 'UsersPanel',
  components: { MainH1, MainH2, Loader },
  data() {
    return {
      users: [],
      loading: true 
    };
  },
  async created() {
    try {
      const usersCollection = collection(db, 'users');
      const usersSnapshot = await getDocs(usersCollection);
      this.users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      this.loading = false; 
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  }
}
</script>


<template>
  <section class="pl-4 md:pl-12 mt-10 pb-20">
    <MainH2>Listado de usuarios</MainH2>
    <Loader v-if="loading" class="mt-6"/>
    <div class="pt-5" v-if="!loading">
      <div v-for="user in users" :key="user.id" class="bg-contenedores w-full md:w-[72%] h-[180px] md:h-[200px] radius-comunidad mt-6 p-5 flex flex-col md:flex-row items-center">
        <h3 class="text-white font-montserrat text-2xl font-semibold md:w-1/3">{{ user.email }}</h3>
        <p class="font-montserrat text-black mt-5 mb-8 bg-white w-[100px] text-center rounded-lg md:w-1/3">{{ user.role }}</p>
        <router-link :to="'/usuario/' + user.id" class="bg-gray-500 text-white font-montserrat text-center font-link p-2 rounded-lg md:w-1/3">Ver perfil</router-link>
      </div>
    </div>
  </section>
</template>

