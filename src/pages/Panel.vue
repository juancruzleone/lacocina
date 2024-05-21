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
      <div class="bg-portada h-96">
        <MainH1>Panel admin</MainH1>
      </div>
      <section class="flex">
        <nav class="bg-contenedores w-[250px] h-[500px]">
          <ul class="pt-4 pl-12">
            <li class="bg-gray-500 w-[90%] rounded-lg p-2 mt-10" @click="showPostsPanel">
              <span class="text-white font-montserrat cursor-pointer">Posts</span>
            </li>
            <li class="bg-gray-500 w-[90%] rounded-lg p-2 mt-4" @click="showUsersPanel">
              <span class="text-white font-montserrat cursor-pointer">Usuarios</span>
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

  