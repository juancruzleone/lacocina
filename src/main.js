import { createApp } from "vue";
import App from './App.vue';
import Router from "./router/router.js"
import './style.css';

const app = createApp(App);

app.use(Router);
app.mount('#app');