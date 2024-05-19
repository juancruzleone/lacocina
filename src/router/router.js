import Home from '../pages/Home.vue'
import Comunidad from '../pages/Comunidad.vue'
import Vip from '../pages/Vip.vue'
import Cocinando from '../pages/Cocinando.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Panel from '../pages/Panel.vue'
import MiPerfil from '../pages/Mi-perfil.vue'
import PostDetalle from '../pages/Detalle.vue'
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: '/',                    component: Home},
    { path: '/comunidad',           component: Comunidad},
    { path: '/vip',                 component: Vip},
    { path: '/cocinando',           component: Cocinando},
    { path: '/post/:id',            component: PostDetalle},
    { path: '/login',               component: Login},
    { path: '/register',            component: Register},
    { path: '/panel',               component: Panel},
    { path: '/perfil/:id',          component: MiPerfil},
]

const Router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default Router;