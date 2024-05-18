<script>
import MainButton from '../components/MainButton.vue';
import MainH1 from '../components/MainH1.vue';
import MainInput from '../components/MainInput.vue';
import MainLabel from '../components/MainLabel.vue';
import { register } from '../services/auth';

export default {
    name: "Register",
    components: { MainH1, MainLabel, MainInput, MainButton },
    data() {
        return {
            user: {
                email: '',
                password: '',
            },
            loading: false,
            errorMessage: '', // Nuevo estado para mensajes de error
        };
    },
    methods: {
        async handleSubmit() {
            // Validación de la contraseña
            if (this.user.password.length < 6) {
                this.errorMessage = 'La contraseña debe tener al menos 6 caracteres.';
                return; // Detener el proceso si hay un error de validación
            }

            this.loading = true;
            this.errorMessage = ''; // Resetear el mensaje de error

            try {
                const user = await register(this.user.email, this.user.password);
                
                // Redireccionar solo si no hay error y el usuario está verificado
                if (user.emailVerified) {
                    this.$router.push({ path: '/perfil' });
                } else {
                    // Mostrar un mensaje para que el usuario verifique su email
                    this.errorMessage = 'Por favor, verifica tu dirección de correo electrónico.';
                }
            } catch (error) {
                // Manejar otros errores y mostrar mensajes específicos
                if (error.code === 'auth/email-already-in-use') {
                    this.errorMessage = 'La dirección de correo electrónico ya está en uso.';
                } else if (error.code === 'auth/weak-password') {
                    this.errorMessage = 'La contraseña debe tener al menos 6 caracteres.';
                } else {
                    this.errorMessage = 'Error al registrar. Por favor, inténtalo de nuevo.';
                }
            } finally {
                this.loading = false;
            }
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
            <div class="flex pt-20 pl-10">
                <p class="font-montserrat text-xl p-2 mr-2">¿Tienes una cuenta?</p>
                <router-link to="/login" class="bg-contenedores p-2 rounded-lg text-white font-montserrat">Inicia sesión</router-link>
            </div>
            <MainH1 class="pt-5">Crea una Cuenta</MainH1>
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
                    >
                        Crear Cuenta
                    </MainButton>
                </form>
                <!-- Mostrar mensajes de error en la pantalla -->
                <div v-if="errorMessage" class="text-red-500 mt-3">
                    {{ errorMessage }}
                </div>
            </div>
        </div>
    </div>
</template>

