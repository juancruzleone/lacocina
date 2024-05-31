// Router.js
import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../pages/Home.vue'
import Community from '../pages/Community.vue'
import Vip from '../pages/Vip.vue'
import Kitchen from '../pages/Kitchen.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Panel from '../pages/Panel.vue'
import MyProfile from '../pages/My-profile.vue'
import Users from '../pages/Users.vue'
import DetailPost from '../pages/DetailPost.vue'
import Page404 from '../pages/404.vue' 
import { isAuthenticatedEmail } from '../services/auth';

const routes = [
    { path: '/',                    component: Home},
    { path: '/comunidad',           component: Community},
    { path: '/vip',                 component: Vip},
    { path: '/cocinando',           component: Kitchen},
    { path: '/post/:id',            component: DetailPost},
    { path: '/inicio-sesion',       component: Login},
    { path: '/registro',            component: Register},
    { 
        path: '/panel', 
        component: Panel, 
        beforeEnter: (to, from, next) => {
            if (isAuthenticatedEmail(['juan.leone@davinci.edu.ar', 'cromer@gmail.com', 'kichiro@gmail.com', 'chefao@gmail.com', 'nacherx@gmail.com', 'teos@gmail.com'])) {
                next();
            } else {
                next('/inicio-sesion');
            }
        }
    },
    { path: '/usuario/:id',         component: Users, props:true},
    { path: '/perfil/:id',          component: MyProfile, props:true},
    { path: '/:catchAll(.*)',       component: Page404 }, 
]

const Router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default Router;
