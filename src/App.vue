<script>
export default{
    name: 'App',
}
</script>

<template>
    <nav class="bg-contenedores p-6">
        <ul class="flex">
            <li><router-link to="/" class="font-montserrat text-white">Inicio</router-link></li>
            <li><router-link to="/" class="font-montserrat text-white">Comunidad</router-link></li>
            <li><router-link to="/" class="font-montserrat text-white">Vip</router-link></li>
            <li><router-link to="/login" class="font-montserrat text-white">Login</router-link></li>
        </ul>
    </nav>
    <main>
        <router-view></router-view>
    </main>
    <footer class="p-10 bg-contenedores">
        <h4 class="font-montserrat text-white text-3xl font-bold">La cocinaa</h4>
    </footer>

</template>