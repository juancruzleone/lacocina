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
      errorMessage: '', // Nuevo estado para mensajes de error
    };
  },
  methods: {
    async handleSubmit() {
      // Validación de los campos
      if (!this.user.email) {
        this.errorMessage = 'El campo de email es obligatorio.';
        return;
      }

      if (!this.user.password) {
        this.errorMessage = 'El campo de contraseña es obligatorio.';
        return;
      }

      this.loading = true;
      this.errorMessage = ''; // Resetear el mensaje de error

      try {
        const user = await login(this.user.email, this.user.password);
        
        // Redireccionar solo si no hay error
        if (user) {
          this.$router.push({ path: `/` });
        }
      } catch (error) {
        // Manejar otros errores y mostrar mensajes específicos
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          this.errorMessage = 'Correo electrónico o contraseña incorrectos.';
        } else {
          this.errorMessage = 'Error al iniciar sesión. Por favor, inténtalo de nuevo.';
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
            class="mb-[10px]"
          >Ingresar</MainButton>
        </form>
        <!-- Mostrar mensajes de error en la pantalla -->
        <div v-if="errorMessage" class="text-red-500 mt-3">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>