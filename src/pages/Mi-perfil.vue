<script>
import MainH1 from '../components/MainH1.vue';

export default {
    name: 'MiPerfil',
    components: { MainH1 },
    data() {
        return {
            user: {
                name: 'John Doe',
                bio: 'Entusiasta de la crypto y miembro activo de La Cocina Crypto.',
                isChef: true,
                isVip: true,
                posts: [
                    { title: 'Introducción a Bitcoin', date: '2024-05-01' },
                    { title: 'Cómo funciona Ethereum', date: '2024-05-10' }
                ],
                comments: [
                    { text: 'Muy interesante artículo sobre DeFi.', date: '2024-05-15' },
                    { text: '¿Podrías explicar más sobre staking?', date: '2024-05-16' }
                ]
            }
        };
    }
}
</script>

<template>
    <div class="bg-portada h-96 flex  bg-cover bg-center">
        <MainH1>Perfil de: {{ user.name }}</MainH1>
    </div>
    <div class="p-8 pl-14">
        <div class="mb-8 font-montserrat">
            <h2 class="text-2xl font-bold mb-4">Información General</h2>
            <p><strong>Nombre:</strong> {{ user.name }}</p>
            <p><strong>Bio:</strong> {{ user.bio }}</p>
            <p><strong>Rol:</strong> {{ user.isChef ? 'Chef' : 'Miembro' }}</p>
            <p v-if="user.isVip" class="text-green-500 font-semibold">Miembro VIP</p>
        </div>
        <div class="mb-8 font-montserrat">
            <h2 class="text-2xl font-bold mb-4">Publicaciones</h2>
            <ul>
                <li v-for="(post, index) in user.posts" :key="index" class="mb-2">
                    <p class="font-semibold">{{ post.title }}</p>
                    <p class="text-gray-600 text-sm">{{ post.date }}</p>
                </li>
            </ul>
        </div>
        <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4 font-montserrat">Comentarios</h2>
            <ul>
                <li v-for="(comment, index) in user.comments" :key="index" class="mb-2">
                    <p>{{ comment.text }}</p>
                    <p class="text-gray-600 text-sm">{{ comment.date }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
