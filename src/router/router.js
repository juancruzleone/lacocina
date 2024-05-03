import Home from '../pages/Home.vue'
import Comunidad from '../pages/Comunidad.vue'
import ChatPrivado from '../pages/ChatPrivado.vue'
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
    { path: '/chat-privado',        component: ChatPrivado},
    { path: '/vip',                 component: Vip},
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