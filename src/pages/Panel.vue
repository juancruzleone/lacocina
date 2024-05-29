<script>
import MainH1 from '../components/MainH1.vue';
import MainH2 from '../components/MainH2.vue';
import PostsPanel from '../components/PostsPanel.vue';
import UsersPanel from '../components/UsersPanel.vue';

export default {
  name: 'Panel',
  components: { MainH1, MainH2, PostsPanel, UsersPanel },
  data() {
    return {
      activePanel: 'posts' // Estado inicial para mostrar el panel de posts
    };
  },
  methods: {
    showPostsPanel() {
      this.activePanel = 'posts';
    },
    showUsersPanel() {
      this.activePanel = 'users';
    }
  }
}
</script>

<template>
  <div>
    <div class="bg-portada h-96 md:h-[400px] lg:h-[500px]">
      <MainH1 class="text-2xl md:text-3xl lg:text-4xl">Panel admin</MainH1>
    </div>
    <section class="flex flex-col md:flex-row">
      <nav class="bg-contenedores w-full md:w-[250px] h-auto md:h-full">
        <ul class="pt-4 pl-12">
          <li @click="showPostsPanel" class="bg-gray-500 w-[90%] rounded-lg p-2 mt-4 md:mt-10 cursor-pointer">
            <span class="text-white font-montserrat text-sm md:text-base">Posts</span>
          </li>
          <li @click="showUsersPanel" class="bg-gray-500 w-[90%] rounded-lg p-2 mt-4 cursor-pointer">
            <span class="text-white font-montserrat text-sm md:text-base">Usuarios</span>
          </li>
        </ul>
      </nav>
      <div class="flex-1 p-4">
        <PostsPanel v-if="activePanel === 'posts'" />
        <UsersPanel v-if="activePanel === 'users'" />
      </div>
    </section>
  </div>
</template>

