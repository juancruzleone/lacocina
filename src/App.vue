<script>
export default{
    name: 'App',
}
</script>

<template>
    <nav class="bg-contenedores flex items-center justify-between pt-2 pb-2 pl-7"> 
        <ul class="flex">
            <li><router-link to="/" class="font-montserrat text-white m-2 text-lg">Inicio</router-link></li>
            <li><router-link to="/comunidad" class="font-montserrat text-white m-2 text-lg">Comunidad</router-link></li>
            <li><router-link to="/cocinando" class="font-montserrat text-white m-2 text-lg">Cocinando</router-link></li>
            <li><router-link to="/vip" class="font-montserrat text-white m-2 text-lg">Vip</router-link></li>
            <li><router-link to="/panel" class="font-montserrat text-white m-2 text-lg">Panel</router-link></li>
            <li><router-link to="/contacto" class="font-montserrat text-white m-2 text-lg">Contacto</router-link></li>
        </ul>
        <router-link to="/login" class="font-montserrat text-white m-2 flex items-center bg-white rounded-full p-2"> 
            <img src="/usuario.webp" alt="icono login" class="w-10 h-10">
        </router-link>
    </nav>
    <main>
        <router-view></router-view>
    </main>
    <footer class="p-10 bg-contenedores mt-20">
        <h4 class="font-montserrat text-white text-3xl font-bold">La cocinaa</h4>
    </footer>
</template>
