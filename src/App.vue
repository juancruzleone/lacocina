<script>
export default{
    name: 'App',
}
</script>

<template>
    <nav>
        <ul class="flex">
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/"></router-link></li>
            <li><router-link to="/"></router-link></li>
            <li><router-link to="/login">Login</router-link></li>
        </ul>
    </nav>
    <main>
        <router-view></router-view>
    </main>

</template>