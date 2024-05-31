<script>
import MainH1 from '../components/MainH1.vue';
import { getUserProfileById, getUserComments, getAllPosts } from '../services/user-profile';

export default {
  name: 'MiPerfil',
  components: { MainH1 },
  props: ['id'],
  data() {
    return {
      loading: true,
      user: {
        id: null,
        email: null,
        name: '',
        bio: '',
        isChef: false,
        isVip: false,
        posts: [],
        comments: [],
        role: '',
      }
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      try {
        const userData = await getUserProfileById(this.id);
        const userComments = await getUserComments(userData.email); 
        const allPosts = await getAllPosts(); 
        const userPosts = allPosts.filter(post => post.autor_post === userData.email); 
        userData.comments = userComments;
        userData.posts = userPosts;
        this.user = userData;
      } catch (error) {
        console.error('Error al cargar el perfil:', error);
      } finally {
        this.loading = false;
      }
    },
    formatDate(timestamp) {
      const date = new Date(timestamp.seconds * 1000);
      return date.toLocaleString();
    }
  }
};
</script>

<template>
  <div>
    <div v-if="loading" class="bg-gray-200 h-96 flex items-center justify-center">
      <span class="text-xl font-bold text-gray-600 font-monserrat">Cargando perfil...</span>
    </div>
    <div v-else>
      <div class="h-64 sm:h-96 bg-cover bg-center bg-portada">
        <h1 class="text-3xl pt-20 sm:text-4xl font-bold pl-12">Perfil de:</h1>
        <p class="pl-12 font-montserrat text-xl mt-2">{{ user.email }}</p>
      </div>
      <div class="p-8 pl-14">
        <div v-if="user.id" class="mb-8 font-montserrat">
          <h2 class="text-2xl font-bold mb-1">Información General</h2>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Rol:</strong> {{ user.role }}</p>
          <p v-if="user.isVip" class="text-green-500 font-semibold">Miembro VIP</p>
        </div>
        <div v-if="user.id" class="mb-8 font-montserrat">
          <h2 class="text-2xl font-bold mb-4">Posts publicados</h2>
          <ul class="bg-contenedores p-3 rounded-lg w-[250px] h-auto flex">
            <li v-for="(post, index) in user.posts" :key="index" class="mb-2">
              <p class="font-semibold text-white font-monserrat mb-4">{{ post.titulo_post }}</p>
              <router-link :to="'/post/' + post.id" class="text-white bg-gray-500 font-montserrat text-center font-montserrat p-1 radius-mensaje mr-2">Ver más</router-link>
            </li>
            <li v-if="user.posts.length === 0" class="text-gray-600">No tiene posts.</li>
          </ul>
        </div>
        <div v-if="user.id" class="mb-8">
          <h2 class="text-2xl font-bold mb-4 font-montserrat">Comentarios realizados</h2>
          <ul class="bg-contenedores rounded-lg text-white p-3">
            <li v-for="(comment, index) in user.comments" :key="index" class="mb-2 font-montserrat">
              <p class="text-white text-sm mb-4">{{ formatDate(comment.created_at) }}</p>
              <p>{{ comment.content }}</p>
            </li>
            <li v-if="user.comments.length === 0" class="text-white font-montserrat">No tiene comentarios.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>