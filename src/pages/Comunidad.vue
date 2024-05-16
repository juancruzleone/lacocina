<script>
import Loader from '../components/Loader.vue';
import MainButton from '../components/MainButton.vue';
import MainH1 from '../components/MainH1.vue';
import MainH2 from '../components/MainH2.vue';
import MainInput from '../components/MainInput.vue';
import MainLabel from '../components/MainLabel.vue';
import { subscribeToAuth } from '../services/auth';
import { saveChatMessage, subscribeToChatMessages } from '../services/chat';


export default {
    name: "Chat",
    components: { MainH1, MainH2, Loader, MainLabel, MainButton, MainInput },
    data: () => {
        return {
            messages: [],
            loadingMessages: true,
            unsubscribeFromChat: () => {},

            newMessage: {
                content: '',
            },

            authUser: {
                id: null,
                email: null,
            },
            unsubscribeFromAuth: () => {},
        }
    },
    methods: {
        sendMessage() {
            saveChatMessage({
                userId: this.authUser.id,
                email: this.authUser.email,
                content: this.newMessage.content,
            });
            this.newMessage.content = '';
        },

        /**
         * Transforma un objeto Date a un string con formato "DD/MM/AAAA HH:mm".
         * 
         * @param {Date} date 
         * @returns {string}
         */
        formatDate(date) {
            return Intl.DateTimeFormat('es-AR', {
                year: 'numeric', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit',
            }).format(date).replace(',', '');
        },

        userRoute(id) {
            return id !== this.authUser.id ?
                `/usuario/${id}` :
                '/perfil';
        }
    },
    mounted() {
        this.unsubscribeFromChat = subscribeToChatMessages(newMessages => {
            this.messages = newMessages;
            this.loadingMessages = false;
        });

        this.unsubscribeFromAuth = subscribeToAuth(newUserData => this.authUser = newUserData);
    },
    unmounted() {
        this.unsubscribeFromAuth();
        this.unsubscribeFromChat();
    }
}
</script>

<template>
    <div class="bg-portada h-96">
        <MainH1>Comunidad</MainH1>
    </div>
    <div class="flex justify-between">
        <div class="flex flex-col gap-4 w-full">
            <section class=" mr-20 mb-10">
                <MainH2 class="pl-12 p-10 pb-3">Chat general</MainH2>
                <div class="min-h-[400px] p-4 bg-gray-200 radius-comunidad ml-12">
                    <ul v-if="!loadingMessages">
                        <li 
                            v-for="message in messages"
                            class="mb-2"
                        >
                            <p class="font-montserrat">
                                <router-link 
                                    class="text-blue-600 underline font-montserrat"
                                    :to="userRoute(message.userId)"
                                >
                                    <b>{{ message.email }}</b>
                                </router-link> 
                                dijo:
                            </p>
                            <p class="font-montserrat">{{ message.content }}</p>
                            <p class="font-montserrat">{{ formatDate(message.created_at) }}</p>
                        </li>
                    </ul>
                    <Loader v-else />
                </div>
                <form 
                    action="#"
                    @submit.prevent="sendMessage"
                    class="mt-4 ml-12"
                >
                    <div class="mb-3">
                        <span class="block mb-2 font-montserrat">Email</span>
                        <span>{{ authUser.email }}</span>
                    </div>
                    <div class="mb-3 w-full">
                        <MainLabel for="message">Mensaje</MainLabel>
                        <div class="flex items-center">
                            <textarea
                                id="message"
                                class="w-full p-2 border border-gray-500 rounded radius-mensaje mr-4 h-[120px]"
                                v-model="newMessage.content"
                                placeholder="Escribe tu mensaje"
                            ></textarea>
                            <MainButton 
                                type="submit"
                                class="text-center radius-mensaje"
                            />
                        </div>
                    </div>      
                </form>
            </section> 
        </div>
        <div class="bg-black w-[120px] h-[800px] ml-auto">
            <ul class="block">
                <li class="bg-gray-100 w-20 h-20 rounded-full m-auto mt-14">
                    <router-link></router-link>
                </li>
                <li class="bg-gray-100 w-20 h-20 rounded-full m-auto mt-7">
                    <router-link></router-link>
                </li>
                <li class="bg-gray-100 w-20 h-20 rounded-full m-auto mt-7">
                    <router-link></router-link>
                </li>
                <li class="bg-gray-100 w-20 h-20 rounded-full m-auto mt-7">
                    <router-link></router-link>
                </li>
                <li class="bg-gray-100 w-20 h-20 rounded-full m-auto mt-7">
                    <router-link></router-link>
                </li>
                <li class="bg-gray-100 w-20 h-20 rounded-full m-auto mt-7">
                    <router-link></router-link>
                </li>
            </ul>
        </div>     
    </div>
</template>
