import Home from '../pages/Home.vue'
import Comunidad from '../pages/Comunidad.vue'
import Chat from '../pages/Chat.vue'
import Vip from '../pages/Vip.vue'
import Contacto from '../pages/Contacto.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Panel from '../pages/Panel.vue'
import MiPerfil from '../pages/Mi-perfil.vue'
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: '/',                    component: Home},
    { path: '/comunidad',           component: Comunidad},
    { path: '/vip',                 component: Vip},
    { path: '/chat',                component: Chat},
    { path: '/contacto',            component: Contacto},
    { path: '/login',               component: Login},
    { path: '/register',            component: Register},
    { path: '/panel',               component: Panel},
    { path: '/mi-perfil',           component: MiPerfil},
]

const Router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default Router;