<template>
  <div>
    <div v-if="loading" class="bg-gray-200 h-96 flex items-center justify-center">
      <span class="text-xl font-bold text-gray-600 font-monserrat">Cargando perfil...</span>
    </div>
    <div v-else>
      <div class="bg-portada h-96 flex bg-cover bg-center">
        <MainH1>Perfil de: {{ user.email }}</MainH1>
      </div>
      <div class="p-8 pl-14">
        <div v-if="user.id" class="mb-8 font-montserrat">
          <h2 class="text-2xl font-bold mb-1">Información General</h2>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Rol:</strong> {{ user.role }}</p>
          <p v-if="user.isVip" class="text-green-500 font-semibold">Miembro VIP</p>
        </div>
        <div v-if="user.id" class="mb-8 font-montserrat">
          <h2 class="text-2xl font-bold mb-4">Publicaciones</h2>
          <ul>
            <li v-for="(post, index) in user.posts" :key="index" class="mb-2">
              <p class="font-semibold">{{ post.titulo_post }}</p>
              <p class="text-gray-600 text-sm">{{ post.created_at }}</p>
            </li>
            <li v-if="user.posts.length === 0" class="text-gray-600">No tiene publicaciones.</li>
          </ul>
        </div>
        <div v-if="user.id" class="mb-8">
            <h2 class="text-2xl font-bold mb-4 font-montserrat">Comentarios</h2>
            <ul>
                <li v-for="(comment, index) in user.comments" :key="index" class="mb-2">
                    <p>{{ comment.content }}</p>
                    <p class="text-gray-600 text-sm">{{ comment.created_at }}</p>
                    <p class="text-gray-600 text-sm"><strong>Email:</strong> {{ comment.email }}</p>
                </li>
                <li v-if="user.comments.length === 0" class="text-gray-600 font-montserrat">No tiene comentarios.</li> 
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

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
    }
  }
};
</script>
