import Home from '../pages/Home.vue'
import Comunidad from '../pages/Comunidad.vue'
import Vip from '../pages/Vip.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import MiPerfil from '../pages/Mi-perfil.vue'
import Chat from '../pages/Chat.vue'
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: '/',                    component: Home},
    { path: '/comunidad',           component: Comunidad},
    { path: '/vip',                 component: Vip},
    { path: '/login',               component: Login},
    { path: '/register',            component: Register},
    { path: '/mi-perfil',           component: MiPerfil},
    { path: '/chat',                component: Chat},
]

const Router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default Router;