// Router.js
import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../pages/Home.vue'
import Comunidad from '../pages/Comunidad.vue'
import Vip from '../pages/Vip.vue'
import Cocinando from '../pages/Cocinando.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Panel from '../pages/Panel.vue'
import MiPerfil from '../pages/Mi-perfil.vue'
import Usuario from '../pages/Usuario.vue'
import PostDetalle from '../pages/Detalle.vue'
import Page404 from '../pages/404.vue' 
import { isAuthenticatedEmail } from '../services/auth';

const routes = [
    { path: '/',                    component: Home},
    { path: '/comunidad',           component: Comunidad},
    { path: '/vip',                 component: Vip},
    { path: '/cocinando',           component: Cocinando},
    { path: '/post/:id',            component: PostDetalle},
    { path: '/login',               component: Login},
    { path: '/register',            component: Register},
    { 
        path: '/panel', 
        component: Panel, 
        beforeEnter: (to, from, next) => {
            if (isAuthenticatedEmail(['juan.leone@davinci.edu.ar', 'cromer@gmail.com', 'kichiro@gmail.com', 'chefao@gmail.com', 'nacherx@gmail.com', 'teos@gmail.com'])) {
                next();
            } else {
                next('/login');
            }
        }
    },
    { path: '/usuario/:id',          component: Usuario, props:true},
    { path: '/perfil/:id',          component: MiPerfil, props:true},
    { path: '/:catchAll(.*)',       component: Page404 }, 
]

const Router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default Router;
