<script>
export default{
    name: 'App',
}
</script>

<template>
    <nav class="bg-contenedores p-10">
        <ul class="flex">
            <li><router-link to="/" class="font-montserrat text-white m-2">Inicio</router-link></li>
            <li><router-link to="/comunidad" class="font-montserrat text-white m-2">Comunidad</router-link></li>
            <li><router-link to="/vip" class="font-montserrat text-white m-2">Vip</router-link></li>
            <li><router-link to="/panel" class="font-montserrat text-white m-2">Panel</router-link></li>
            <li><router-link to="/contacto" class="font-montserrat text-white m-2">Contacto</router-link></li>
            <li><router-link to="/login" class="font-montserrat text-white m-2">Login</router-link></li>
        </ul>
    </nav>
    <main>
        <router-view></router-view>
    </main>
    <footer class="p-10 bg-contenedores mt-20">
        <h4 class="font-montserrat text-white text-3xl font-bold">La cocinaa</h4>
    </footer>

</template>