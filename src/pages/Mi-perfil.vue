// Mi-perfil.vue
<template>
  <div>
    <div class="bg-portada h-96 flex bg-cover bg-center">
      <MainH1>Perfil de: {{ user.name }}</MainH1>
    </div>
    <div class="p-8 pl-14">
      <div v-if="user.id" class="mb-8 font-montserrat">
        <h2 class="text-2xl font-bold mb-4">Información General</h2>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Bio:</strong> {{ user.bio }}</p>
        <p><strong>Rol:</strong> {{ user.isChef ? 'Chef' : 'Miembro' }}</p>
        <p v-if="user.isVip" class="text-green-500 font-semibold">Miembro VIP</p>
      </div>
      <div v-if="user.id" class="mb-8 font-montserrat">
        <h2 class="text-2xl font-bold mb-4">Publicaciones</h2>
        <ul>
          <li v-for="(post, index) in user.posts" :key="index" class="mb-2">
            <p class="font-semibold">{{ post.title }}</p>
            <p class="text-gray-600 text-sm">{{ post.date }}</p>
          </li>
        </ul>
      </div>
      <div v-if="user.id" class="mb-8">
        <h2 class="text-2xl font-bold mb-4 font-montserrat">Comentarios</h2>
        <ul>
          <li v-for="(comment, index) in user.comments" :key="index" class="mb-2">
            <p>{{ comment.text }}</p>
            <p class="text-gray-600 text-sm">{{ comment.date }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MainH1 from '../components/MainH1.vue';
import { subscribeToAuth } from '../services/auth.js';

export default {
  name: 'MiPerfil',
  components: { MainH1 },
  data() {
    return {
      user: {
        id: null,
        email: null,
        name: '',
        bio: '',
        isChef: false,
        isVip: false,
        posts: [],
        comments: []
      }
    };
  },
  mounted() {
    subscribeToAuth((newUserData) => {
      this.user = {
        ...newUserData
      };
    });
  }
};
</script>

<style scoped>
.bg-portada {
  background-image: url('/path/to/your/image.jpg'); /* Ruta a tu imagen de portada */
}
</style>
