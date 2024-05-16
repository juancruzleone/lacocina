<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<template>
  <div class="relative w-[88%] h-[250px] mt-5">
    <!-- Flecha izquierda -->
    <div class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 -ml-8">
      <div class="swiper-button-prev custom-button-prev"></div>
    </div>
    
    <!-- Contenedor del slider -->
    <div class="bg-contenedores h-full radius-comunidad overflow-hidden">
      <swiper
        :pagination="{ clickable: true }"
        :navigation="{ nextEl: '.custom-button-next', prevEl: '.custom-button-prev' }"
        :modules="modules"
        class="relative p-5"
      >
        <swiper-slide class="flex flex-col justify-center items-center text-white font-montserrat text-lg px-4 pt-10">
          <h3 class="text-xl font-bold">John Doe</h3>
          <blockquote class="italic mt-2">"El acceso VIP ha sido una experiencia increíble. El contenido exclusivo realmente vale la pena."</blockquote>
          <p class="mt-2">⭐⭐⭐⭐⭐</p>
        </swiper-slide>
        <swiper-slide class="flex flex-col justify-center items-center text-white font-montserrat text-lg px-4 pt-10">
          <h3 class="text-xl font-bold">Jane Smith</h3>
          <blockquote class="italic mt-2">"Las clases VIP me han ayudado a mejorar mis habilidades rápidamente. Altamente recomendado."</blockquote>
          <p class="mt-2">⭐⭐⭐⭐</p>
        </swiper-slide>
        <swiper-slide class="flex flex-col justify-center items-center text-white font-montserrat text-lg px-4 pt-10">
          <h3 class="text-xl font-bold">Carlos Mendoza</h3>
          <blockquote class="italic mt-2">"El soporte 24/7 es excelente, siempre están listos para ayudar."</blockquote>
          <p class="mt-2">⭐⭐⭐⭐⭐</p>
        </swiper-slide>
        <swiper-slide class="flex flex-col justify-center items-center text-white font-montserrat text-lg px-4 pt-10">
          <h3 class="text-xl font-bold">Laura Gómez</h3>
          <blockquote class="italic mt-2">"Me encanta el canal especial para VIPs, es genial estar en contacto con otros miembros."</blockquote>
          <p class="mt-2">⭐⭐⭐⭐⭐</p>
        </swiper-slide>
        <swiper-slide class="flex flex-col justify-center items-center text-white font-montserrat text-lg px-4 pt-10">
          <h3 class="text-xl font-bold">Sofia Martínez</h3>
          <blockquote class="italic mt-2">"El precio es justo por todo lo que recibes a cambio. Muy satisfecho con la membresía."</blockquote>
          <p class="mt-2">⭐⭐⭐⭐</p>
        </swiper-slide>
        <swiper-slide class="flex flex-col justify-center items-center text-white font-montserrat text-lg px-4 pt-10">
          <h3 class="text-xl font-bold">Miguel Ángel</h3>
          <blockquote class="italic mt-2">"Los eventos VIP son muy divertidos y bien organizados. Definitivamente vale la pena."</blockquote>
          <p class="mt-2">⭐⭐⭐⭐⭐</p>
        </swiper-slide>
      </swiper>
    </div>
    
    <!-- Flecha derecha -->
    <div class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 -mr-8">
      <div class="swiper-button-next custom-button-next"></div>
    </div>
  </div>
</template>

<style scoped>
.custom-button-prev,
.custom-button-next {
  background-color: rgb(241, 240, 240);
  color: black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.custom-button-prev::after,
.custom-button-next::after {
  font-size: 1.25rem;
}
</style>
