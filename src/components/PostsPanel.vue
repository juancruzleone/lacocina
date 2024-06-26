<script>
import MainH1 from '../components/MainH1.vue';
import MainH2 from '../components/MainH2.vue';
import MainButton from '../components/MainButton.vue';
import Loader from '../components/Loader.vue';
import { fetchPosts, deletePost, updatePost, createPost } from '../services/posts';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default {
  name: 'PostsPanel',
  components: {
    MainH1,
    MainH2,
    Loader
  },
  data() {
    return {
      posts: [],
      loading: true,
      isCreateModalOpen: false,
      isEditModalOpen: false,
      isDeleteModalOpen: false,
      selectedPostId: null,
      newPostData: {
        titulo_post: '',
        subtitulo1_post: '',
        texto1_post: '',
        subtitulo2_post: '',
        texto2_post: '',
        categoria_post: '',
        descripcion_post: '',
        img1_post: '',
        img2_post: '',
        autor_post: ''
      },
      editedPostData: {
        titulo_post: '',
        subtitulo1_post: '',
        texto1_post: '',
        subtitulo2_post: '',
        texto2_post: '',
        categoria_post: '',
        descripcion_post: '',
        img1_post: '',
        img2_post: '',
        autor_post: ''
      },
      user: null,
      createLoading: false,
      editLoading: false,
      deleteLoading: false
    };
  },
  async created() {
    await this.loadPosts();
    this.initAuth();
  },
  methods: {
    async loadPosts() {
      try {
        this.posts = await fetchPosts();
        this.loading = false;
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    },
    async deletePost(postId) {
      try {
        this.deleteLoading = true;
        await deletePost(postId);
        await this.loadPosts();
        this.closeDeleteModal();
        this.deleteLoading = false;
      } catch (error) {
        console.error("Error deleting post: ", error);
        this.deleteLoading = false;
      }
    },
    async createPost() {
      if (!this.isValidUrl(this.newPostData.img1_post) || !this.isValidUrl(this.newPostData.img2_post)) return;
      try {
        this.createLoading = true;
        this.newPostData.autor_post = this.user.email;
        await createPost(this.newPostData);
        await this.loadPosts();
        this.closeCreateModal();
        this.newPostData = {
          titulo_post: '',
          subtitulo1_post: '',
          texto1_post: '',
          subtitulo2_post: '',
          texto2_post: '',
          categoria_post: '',
          descripcion_post: '',
          img1_post: '',
          img2_post: '',
          autor_post: ''
        };
        this.createLoading = false;
      } catch (error) {
        console.error("Error creating post: ", error);
        this.createLoading = false;
      }
    },
    async editPost() {
      if (!this.isValidUrl(this.editedPostData.img1_post) || !this.isValidUrl(this.editedPostData.img2_post)) return;
      try {
        this.editLoading = true;
        await updatePost(this.selectedPostId, this.editedPostData);
        await this.loadPosts();
        this.closeEditModal();
        this.editedPostData = {
          titulo_post: '',
          subtitulo1_post: '',
          texto1_post: '',
          subtitulo2_post: '',
          texto2_post: '',
          categoria_post: '',
          descripcion_post: '',
          img1_post: '',
          img2_post: '',
          autor_post: ''
        };
        this.editLoading = false;
      } catch (error) {
        console.error("Error updating post: ", error);
        this.editLoading = false;
      }
    },
    openCreateModal() {
      this.isCreateModalOpen = true;
    },
    closeCreateModal() {
      this.isCreateModalOpen = false;
    },
    openEditModal(postId) {
      this.selectedPostId = postId;
      const selectedPost = this.posts.find(post => post.id === postId);
      if (selectedPost) {
        this.editedPostData = {
          titulo_post: selectedPost.titulo_post,
          subtitulo1_post: selectedPost.subtitulo1_post,
          texto1_post: selectedPost.texto1_post,
          subtitulo2_post: selectedPost.subtitulo2_post,
          texto2_post: selectedPost.texto2_post,
          categoria_post: selectedPost.categoria_post,
          descripcion_post: selectedPost.descripcion_post,
          img1_post: selectedPost.img1_post,
          img2_post: selectedPost.img2_post,
          autor_post: selectedPost.autor_post
        };
      }
      this.isEditModalOpen = true;
    },
    closeEditModal() {
      this.isEditModalOpen = false;
    },
    openDeleteModal(postId) {
      this.selectedPostId = postId;
      this.isDeleteModalOpen = true;
    },
    closeDeleteModal() {
      this.isDeleteModalOpen = false;
    },
    isValidUrl(url) {
      const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
      return urlPattern.test(url);
    },
    initAuth() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
        } else {
          this.user = null;
        }
      });
    }
  },
  computed: {
    isValidNewPost() {
      return (
        this.newPostData.titulo_post.trim() !== '' &&
        this.newPostData.subtitulo1_post.trim() !== '' &&
        this.newPostData.texto1_post.trim() !== '' &&
        this.newPostData.subtitulo2_post.trim() !== '' &&
        this.newPostData.texto2_post.trim() !== '' &&
        this.newPostData.categoria_post.trim() !== '' &&
        this.newPostData.descripcion_post.trim() !== '' &&
        this.isValidUrl(this.newPostData.img1_post) &&
        this.isValidUrl(this.newPostData.img2_post)
      );
    },
    isValidEditedPost() {
      return (
        this.editedPostData.titulo_post.trim() !== '' &&
        this.editedPostData.subtitulo1_post.trim() !== '' &&
        this.editedPostData.texto1_post.trim() !== '' &&
        this.editedPostData.subtitulo2_post.trim() !== '' &&
        this.editedPostData.texto2_post.trim() !== '' &&
        this.editedPostData.categoria_post.trim() !== '' &&
        this.editedPostData.descripcion_post.trim() !== '' &&
        this.isValidUrl(this.editedPostData.img1_post) &&
        this.isValidUrl(this.editedPostData.img2_post)
      );
    }
  },
  watch: {
    'newPostData.img1_post': function (newValue) {
      if (newValue.trim() === '') this.img1ErrorMessage = '';
    },
    'newPostData.img2_post': function (newValue) {
      if (newValue.trim() === '') this.img2ErrorMessage = '';
    },
    'editedPostData.img1_post': function (newValue) {
      if (newValue.trim() === '') this.img1ErrorMessageEdit = '';
    },
    'editedPostData.img2_post': function (newValue) {
      if (newValue.trim() === '') this.img2ErrorMessageEdit = '';
    }
  }
};
</script>


<template>
  <section class="pl-4 md:pl-12 mt-10 pb-20">
    <MainH2 class="text-2xl md:text-3xl">Posts publicados</MainH2>
    <div class="mt-5">
      <button @click="openCreateModal" class="bg-blue-500 text-white font-montserrat text-center p-2 rounded-lg">Crear Post</button>
    </div>
    <Loader v-if="loading" class="mt-6"/>
    <div class="pt-5" v-if="!loading">
      <div v-for="post in posts" :key="post.id" class="bg-contenedores h-auto md:h-auto radius-comunidad mt-6 p-5">
        <img :src="post.img1_post" alt="Portada del post {{ post.titulo_post }}" class="w-full rounded-lg mb-3 h-auto md:h-[70%] mt-10">
        <div>
          <h3 class="text-white font-montserrat text-lg md:text-xl font-semibold">{{ post.titulo_post }}</h3>
          <p class="bg-white w-full md:w-[200px] text-center font-montserrat rounded-lg mt-4 p-2">{{ post.categoria_post }}</p>
          <p class="font-montserrat text-white mt-5 mb-5">{{ post.descripcion_post }}</p>
          <p class="font-montserrat text-white mt-5 mb-5"><span class="font-bold mr-2">Autor:</span>{{ post.autor_post }}</p>
          <div class="flex flex-col md:flex-row">
            <router-link :to="'/post/' + post.id" class="text-white bg-gray-500 font-montserrat text-center font-montserrat p-1 radius-mensaje mr-2 mb-2 md:mb-0">Ver más</router-link>
            <button @click="openEditModal(post.id)" class="bg-yellow-500 text-white font-montserrat text-center p-1 rounded-lg mr-2 mb-2 md:mb-0">Editar</button>
            <button @click="openDeleteModal(post.id)" class="bg-red-500 text-white font-montserrat text-center p-1 rounded-lg mb-2 md:mb-0">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modales de Eliminar, Crear y Editar Post -->
    <div v-if="isDeleteModalOpen" class="modal">
      <div class="modal-content font-montserrat justify-between">
        <Loader v-if="deleteLoading"/>
        <h2 class="font-montserrat mt-5 mb-5 font-bold text-xl">Eliminar Post</h2>
        <p class="font-montserrat text-black mt-5 mb-5">¿Estás seguro de que deseas eliminar este post?</p>
        <button @click="deletePost(selectedPostId)" :disabled="deleteLoading" class="font-montserrat bg-red-500 rounded-lg text-white p-2">Eliminar</button>
        <button @click="closeDeleteModal" class="font-montserrat bg-gray-500 rounded-lg text-white p-2">Cancelar</button>
      </div>
    </div>
    <div v-if="isCreateModalOpen" class="modal">
      <div class="modal-content font-montserrat">
        <Loader v-if="createLoading"/>
        <h2 class="font-montserrat mt-5 mb-5 font-bold text-xl">Crear Nuevo Post</h2>
        <input type="text" v-model="newPostData.titulo_post" placeholder="Título">
        <input type="text" v-model="newPostData.subtitulo1_post" placeholder="Subtítulo 1">
        <textarea v-model="newPostData.texto1_post" placeholder="Texto 1"></textarea>
        <input type="text" v-model="newPostData.subtitulo2_post" placeholder="Subtítulo 2">
        <textarea v-model="newPostData.texto2_post" placeholder="Texto 2"></textarea>
        <select v-model="newPostData.categoria_post" class="mt-5 mb-5">
          <option value="">Selecciona una categoría</option>
          <option value="Airdrops">Airdrops</option>
          <option value="Análisis técnico">Análisis técnico</option>
          <option value="Análisis fundamental">Análisis fundamental</option>
          <option value="Trading">Trading</option>
          <option value="Onchain">Onchain</option>
        </select>
        <textarea v-model="newPostData.descripcion_post" placeholder="Descripción" class="font-montserrat"></textarea>
        <input type="text" v-model="newPostData.img1_post" placeholder="URL de la imagen 1">
        <p v-if="!isValidUrl(newPostData.img1_post)" class="text-red-500 font-montserrat">Por favor ingresa una URL válida para la imagen 1.</p>
        <input type="text" v-model="newPostData.img2_post" placeholder="URL de la imagen 2">
        <p v-if="!isValidUrl(newPostData.img2_post)" class="text-red-500 font-montserrat">Por favor ingresa una URL válida para la imagen 2.</p>
        <p v-if="!isValidNewPost" class="text-red-500 font-montserrat mt-6">Por favor completa todos los campos requeridos y asegúrate de que las URLs de las imágenes sean válidas.</p>
        <button @click="createPost" :disabled="!isValidNewPost || createLoading" class="font-montserrat bg-blue-400 rounded-lg mt-2">Crear</button>
        <button @click="closeCreateModal" class="font-montserrat bg-red-500 rounded-lg text-white">Cancelar</button>
      </div>
    </div>
    <div v-if="isEditModalOpen" class="modal">
      <div class="modal-content font-montserrat">
        <Loader v-if="editLoading"/>
        <h2 class="font-montserrat mt-5 mb-5 font-bold text-xl">Editar Post</h2>
        <input type="text" v-model="editedPostData.titulo_post" placeholder="Título">
        <input type="text" v-model="editedPostData.subtitulo1_post" placeholder="Subtítulo 1">
        <textarea v-model="editedPostData.texto1_post" placeholder="Texto 1"></textarea>
        <input type="text" v-model="editedPostData.subtitulo2_post" placeholder="Subtítulo 2">
        <textarea v-model="editedPostData.texto2_post" placeholder="Texto 2"></textarea>
        <select v-model="editedPostData.categoria_post" class="mt-5 mb-5">
          <option value="">Selecciona una categoría</option>
          <option value="Airdrops">Airdrops</option>
          <option value="Análisis técnico">Análisis técnico</option>
          <option value="Análisis fundamental">Análisis fundamental</option>
          <option value="Trading">Trading</option>
          <option value="Onchain">Onchain</option>
        </select>
        <textarea v-model="editedPostData.descripcion_post" placeholder="Descripción" class="font-montserrat"></textarea>
        <input type="text" v-model="editedPostData.img1_post" placeholder="URL de la imagen 1">
        <p v-if="!isValidUrl(editedPostData.img1_post)" class="text-red-500 font-montserrat">Por favor ingresa una URL válida para la imagen 1.</p>
        <input type="text" v-model="editedPostData.img2_post" placeholder="URL de la imagen 2">
        <p v-if="!isValidUrl(editedPostData.img2_post)" class="text-red-500 font-montserrat">Por favor ingresa una URL válida para la imagen 2.</p>
        <p v-if="!isValidEditedPost" class="text-red-500 font-montserrat mt-6">Por favor completa todos los campos requeridos y asegúrate de que las URLs de las imágenes sean válidas.</p>
        <button @click="editPost" :disabled="!isValidEditedPost || editLoading" class="font-montserrat bg-blue-400 rounded-lg mt-2">Guardar</button>
        <button @click="closeEditModal" class="font-montserrat bg-red-500 rounded-lg text-white">Cancelar</button>
      </div>
    </div>
  </section>
</template>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
}

.modal-content input[type="text"],
.modal-content textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.modal-content button {
  padding: 8px 16px;
  margin-right: 8px;
  cursor: pointer;
}

.modal-content button:last-child {
  margin-right: 0;
}

.radius-mensaje {
  border-radius: 25px;
}
</style>