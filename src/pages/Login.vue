<script>
import MainButton from '../components/MainButton.vue';
import MainH1 from '../components/MainH1.vue';
import MainInput from '../components/MainInput.vue';
import MainLabel from '../components/MainLabel.vue';
import { login } from '../services/auth';

export default {
    name: "Login",
    components: { MainH1, MainLabel, MainInput, MainButton },
    data() {
        return {
            user: {
                email: '',
                password: '',
            },
            loading: false,
        }
    },
    methods: {
        async handleSubmit() {
            this.loading = true;

            await login(this.user.email, this.user.password);
            this.$router.push({
                path: '/perfil'
            });
            
            this.loading = false;
        }
    }
}
</script>

<template>
    <div class="flex">
        <div>
            <img src="/crypto-2.webp" alt="foto de bitcoins" class="w-[1400px] h-[1000px]">
        </div>
        <div>
            <MainH1 class="pt-32">Ingresa con tu Cuenta</MainH1>
            <div class="w-[400px] pl-12 mt-10">
                <form 
                    action="#"
                    @submit.prevent="handleSubmit"
                >
                <div class="mb-3">
                    <MainLabel for="email">Email</MainLabel>
                    <MainInput
                        type="email"
                        id="email"
                        v-model="user.email"
                    />
                </div>
                <div class="mb-3">
                    <MainLabel for="password">Contraseña</MainLabel>
                    <MainInput
                        type="password"
                        id="password"
                        v-model="user.password"
                    />
                </div>
                <MainButton
                    type="submit"
                    class="mb-[120px]"
                >Ingresar</MainButton>
            </form>
            <p></p>
            </div>
            </div>
    </div>
</template>