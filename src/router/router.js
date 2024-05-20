import Home from '../pages/Home.vue'
import Comunidad from '../pages/Comunidad.vue'
import Vip from '../pages/Vip.vue'
import Cocinando from '../pages/Cocinando.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Panel from '../pages/Panel.vue'
import MiPerfil from '../pages/Mi-perfil.vue'
import PostDetalle from '../pages/Detalle.vue'
import Page404 from '../pages/404.vue' // Importa la página de 404
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
    { path: '/perfil/:id',          component: MiPerfil, props:true},

    // Ruta para la página 404
    { path: '/:catchAll(.*)',       component: Page404 }, // Coincide con cualquier ruta no definida previamente
]

const Router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default Router;
