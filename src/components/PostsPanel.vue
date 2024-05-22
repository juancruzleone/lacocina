<script>
import MainH1 from '../components/MainH1.vue';
import MainH2 from '../components/MainH2.vue';
import MainButton from '../components/MainButton.vue'
import Loader from '../components/Loader.vue';
import { fetchPosts, deletePost, updatePost, createPost } from '../services/posts';

export default {
  name: 'PostsPanel',
  components: { MainH1, MainH2, Loader },
  data() {
    return {
      posts: [],
      loading: true, // Para controlar el estado de carga
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
        img2_post: ''
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
        img2_post: ''
      }
    };
  },
  async created() {
    await this.loadPosts();
  },
  methods: {
    async loadPosts() {
      try {
        this.posts = await fetchPosts();
        this.loading = false; // Una vez que los posts se carguen correctamente, establece loading en false
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    },
    async deletePost(postId) {
      try {
        await deletePost(postId);
        this.loadPosts(); // Refresca la lista de posts después de la eliminación
        this.closeDeleteModal();
      } catch (error) {
        console.error("Error deleting post: ", error);
      }
    },
    async createPost() {
      try {
        await createPost(this.newPostData);
        this.loadPosts(); // Refresca la lista de posts después de la creación
        this.closeCreateModal();
        // Reinicia los datos del nuevo post
        this.newPostData = {
          titulo_post: '',
          subtitulo1_post: '',
          texto1_post: '',
          subtitulo2_post: '',
          texto2_post: '',
          categoria_post: '',
          descripcion_post: '',
          img1_post: '',
          img2_post: ''
        };
      } catch (error) {
        console.error("Error creating post: ", error);
      }
    },
    async editPost() {
      try {
        await updatePost(this.selectedPostId, this.editedPostData);
        this.loadPosts(); // Refresca la lista de posts después de la edición
        this.closeEditModal();
        // Reinicia los datos del post editado
        this.editedPostData = {
          titulo_post: '',
          subtitulo1_post: '',
          texto1_post: '',
          subtitulo2_post: '',
          texto2_post: '',
          categoria_post: '',
          descripcion_post: '',
          img1_post: '',
          img2_post: ''
        };
      } catch (error) {
        console.error("Error updating post: ", error);
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
      // Obtener los datos del post seleccionado
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
          img2_post: selectedPost.img2_post
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
    }
  },
  computed: {
    // Validación para el modal de crear post
    isValidNewPost() {
      return (
        this.newPostData.titulo_post.trim() !== '' &&
        this.newPostData.subtitulo1_post.trim() !== '' &&
        this.newPostData.texto1_post.trim() !== '' &&
        this.newPostData.categoria_post.trim() !== ''
        // Agrega validaciones para otros campos obligatorios si es necesario
      );
    },
    // Validación para el modal de editar post
    isValidEditedPost() {
      return (
        this.editedPostData.titulo_post.trim() !== '' &&
        this.editedPostData.subtitulo1_post.trim() !== '' &&
        this.editedPostData.texto1_post.trim() !== '' &&
        this.editedPostData.categoria_post.trim() !== ''
        // Agrega validaciones para otros campos obligatorios si es necesario
      );
    }
  }
}
</script>


<template>
  <section class="pl-12 mt-10 pb-20">
    <MainH2>Posts publicados</MainH2>
    <div class="mt-5">
      <button @click="openCreateModal" class="bg-blue-500 text-white font-montserrat text-center p-2 rounded-lg">Crear Post</button>
    </div>
    <Loader v-if="loading"/>
    <div class="pt-5" v-if="!loading">
      <div v-for="post in posts" :key="post.id" class="flex bg-contenedores w-[72%] h-[310px] radius-comunidad mt-6 p-5">
        <img :src="post.img1_post" alt="Portada del post {{ post.titulo_post }}"  class="w-60 rounded-lg mb-3 mr-5 h-[70%] mt-10">
        <div>
            <h3 class="text-white font-montserrat text-2xl font-semibold">{{ post.titulo_post }}</h3>
            <p class="bg-white w-[140px] text-center font-montserrat rounded-lg mt-2 p-1">{{ post.categoria_post }}</p>
            <p class="font-montserrat text-white mt-5 mb-5">{{ post.descripcion_post }}</p>
            <div class="flex">
              <router-link :to="'/post/' + post.id" class="text-white bg-gray-500 font-montserrat text-center font-montserrat p-1 radius-mensaje mr-2">Ver más</router-link>
              <button @click="openEditModal(post.id)" class="bg-yellow-500 text-white font-montserrat text-center p-1 rounded-lg mr-2">Editar</button>
              <button @click="openDeleteModal(post.id)" class="bg-red-500 text-white font-montserrat text-center p-1 rounded-lg">Eliminar</button>
            </div>
        </div>
      </div>
    </div>

    <!-- Modales -->
    <div v-if="isCreateModalOpen" class="modal">
      <div class="modal-content font-monstserrat">
        <Loader v-if="loading"/>
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
        <input type="text" v-model="newPostData.img2_post" placeholder="URL de la imagen 2">
        <!-- Mensajes de validación -->
        <p v-if="!isValidNewPost" class="text-red-500 font-montserrat">Por favor completa todos los campos obligatorios.</p>
        <button @click="createPost" :disabled="!isValidNewPost" class="font-montserrat bg-blue-400 rounded-lg mt-2">Crear</button>
        <button @click="closeCreateModal" class="font-montserrat bg-red-500 rounded-lg text-white">Cancelar</button>
      </div>
    </div>
    <div v-if="isEditModalOpen" class="modal">
      <div class="modal-content font-montserrat">
        <Loader v-if="loading"/>
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
        <textarea v-model="editedPostData.descripcion_post" placeholder="Descripción"></textarea>
        <input type="text" v-model="editedPostData.img1_post" placeholder="URL de la imagen 1">
        <input type="text" v-model="editedPostData.img2_post" placeholder="URL de la imagen 2">
        <!-- Mensajes de validación -->
        <p v-if="!isValidEditedPost" class="text-red-500 font-montserrat">Por favor completa todos los campos obligatorios.</p>
        <button @click="editPost" :disabled="!isValidEditedPost" class="font-montserrat bg-blue-400 rounded-lg mt-2">Guardar Cambios</button>
        <button @click="closeEditModal" class="font-montserrat bg-red-500 text-white rounded-lg">Cancelar</button>
      </div>
    </div>
    <div v-if="isDeleteModalOpen" class="modal">
      <div class="modal-content">
        <Loader v-if="loading"/>
        <p class="font-montserrat">¿Estás seguro de que deseas eliminar este post?</p>
        <div class="mt-4">
          <button @click="deletePost(selectedPostId)" class="font-montserrat text-white bg-red-500 rounded-lg">Eliminar</button>
          <button @click="closeDeleteModal" class="font-montserrat bg-blue-400 rounded-lg">Cancelar</button>
        </div>
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
