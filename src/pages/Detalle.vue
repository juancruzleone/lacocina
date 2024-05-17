<script>
import MainH1 from '../components/MainH1.vue'
import MainH2 from '../components/MainH2.vue'
import MainLabel from '../components/MainLabel.vue'
import MainInput from '../components/MainInput.vue'

export default {
    name: 'Detalle',
    components: { MainH1, MainH2, MainLabel, MainInput },
    data() {
        return {
            newComment: {
                author: '',
                text: ''
            },
            comments: [
                {
                    author: 'Juan Perez',
                    date: '2024-05-15',
                    text: 'Este es un comentario de ejemplo. Me gustó mucho el contenido de este post.'
                },
                {
                    author: 'Maria Gomez',
                    date: '2024-05-16',
                    text: 'Muy interesante el artículo. Tengo algunas preguntas sobre el tema discutido.'
                },
                {
                    author: 'Carlos Lopez',
                    date: '2024-05-17',
                    text: 'Gracias por compartir esta información. Fue muy útil para mi proyecto.'
                }
            ]
        }
    },
    methods: {
        addComment() {
            const date = new Date().toISOString().split('T')[0];
            this.comments.push({ ...this.newComment, date });
            this.newComment.author = '';
            this.newComment.text = '';
        }
    }
}
</script>

<template>
    <div class="bg-portada h-[400px] bg-cover bg-center">
        <MainH1>Nombre del post</MainH1>
        <div class="pl-14">
            <p class="bg-black text-white font-montserrat w-[150px] text-center p-1 rounded-lg mt-8 text-xl">Categoria</p>
            <div class="bg-contenedores rounded-full w-14 h-14 mt-20"></div>
        </div>
    </div>
    <section class="pl-14 pt-20 pb-10">
        <MainH2 class="border-b-8 border-black">Contenido</MainH2>
        <div>
            <img src="/tea-protocol.webp" alt="Imagen del post" class="w-full h-[400px] rounded-md mt-4 mb-10">
            <div class="flex">
                <div class="w-full">
                    <h3 class="font-montserrat font-semibold text-2xl">Titulo 1</h3>
                    <p class="font-montserrat text-xl mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus risus tellus, ac finibus sem faucibus ac. In pretium interdum commodo. Sed bibendum bibendum neque ac semper. Proin facilisis viverra odio, sed consectetur libero lacinia vel. Sed blandit lacinia ex nec vehicula. Donec odio lorem, viverra egestas justo nec, rutrum maximus tellus. Donec a magna sed sapien tempus elementum. Phasellus interdum venenatis neque, vitae viverra lacus iaculis ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et purus eu neque consequat gravida. Sed facilisis commodo ligula quis placerat.</p>
                    <h3 class="font-montserrat font-semibold text-2xl">Titulo 2</h3>
                    <p class="font-montserrat text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus risus tellus, ac finibus sem faucibus ac. In pretium interdum commodo. Sed bibendum bibendum neque ac semper. Proin facilisis viverra odio, sed consectetur libero lacinia vel. Sed blandit lacinia ex nec vehicula. Donec odio lorem, viverra egestas justo nec, rutrum maximus tellus. Donec a magna sed sapien tempus elementum. Phasellus interdum venenatis neque, vitae viverra lacus iaculis ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et purus eu neque consequat gravida. Sed facilisis commodo ligula quis placerat.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="pl-14 pb-20">
        <MainH2 class="border-b-8 border-black">Comentarios</MainH2>
        <div>
            <div v-for="(comment, index) in comments" :key="index" class="bg-gray-100 p-4 mt-4 rounded-lg shadow-md">
                <div class="font-bold font-montserrat">{{ comment.author }}</div>
                <div class="text-gray-600 text-sm font-montserrat">{{ comment.date }}</div>
                <div class="mt-2 font-montserrat">{{ comment.text }}</div>
            </div>
            <form @submit.prevent="addComment" class="mt-6">
                <div class="mb-4">
                    <label for="author" class="block text-gray-700 font-bold mb-2 font-montserrat">Nombre:</label>
                    <input v-model="newComment.author" type="text" id="author" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                </div>
                <div class="mb-4">
                    <label for="text" class="block text-gray-700 font-bold mb-2">Comentario:</label>
                    <textarea v-model="newComment.text" id="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
                </div>
                <div class="flex items-center justify-between font">
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Agregar Comentario</button>
                </div>
            </form>
        </div>
    </section>
</template>
