<script>
import Reviews from '../components/Reviews.vue';
import MainH1 from '../components/MainH1.vue';
import MainH2 from '../components/MainH2.vue';

export default {
  name: 'Vip',
  components: { MainH1, MainH2, Reviews },
};
</script>

<template>
  <div>
    <div class="bg-portada h-96">
      <MainH1>VIP</MainH1>
    </div>
    <section class="pl-12 pb-20">
      <MainH2 class="pt-20">Beneficios</MainH2>
      <div class="flex flex-wrap">
        <div class="w-[50%] mt-4">
          <div class="flex">
            <div class="bg-contenedores w-[500px] h-[200px] radius-comunidad mr-10">
              <h3 class="text-white font-montserrat p-5 text-xl">Acceso a contenido exclusivo</h3>
              <div class="bg-white rounded-full ml-24 mt-5 w-[120px] p-5">
                <img src="/contenido.svg" alt="Icono de contenido">
              </div>
            </div>
            <div class="bg-contenedores w-[300px] h-[200px] radius-comunidad">
              <h3 class="text-white font-montserrat p-5 text-xl">Clases Vip</h3>
              <div class="bg-white rounded-full ml-36 mt-5 w-[120px] p-5">
                <img src="/clases.svg" alt="Icono de clases">
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="bg-contenedores w-[400px] h-[200px] mt-4 radius-comunidad">
              <h3 class="text-white font-montserrat p-5 text-xl">Canal especial para VIPS</h3>
              <div class="bg-white rounded-full ml-6 w-[120px] p-5">
                <img src="/discord.svg" alt="Icono de contenido">
              </div>
            </div>
            <div class="bg-contenedores w-[700px] h-[170px] mt-4 ml-10 radius-comunidad">
              <h3 class="text-white font-montserrat p-5 text-xl">Eventos VIP</h3>
              <div class="bg-white rounded-full ml-44 w-[120px] p-5">
                <img src="/evento.svg" alt="Icono de eventos">
              </div>
            </div>
          </div>
        </div>
        <div class="w-[50%] pl-12 mt-4">
          <div class="bg-contenedores w-[600px] h-[360px] radius-comunidad">
            <h3 class="text-white font-montserrat p-5 text-xl">Soporte 24/7</h3>
            <div class="bg-white w-[300px] rounded-full ml-20 mt-3">
              <img src="/soporte.svg" alt="Icono de soporte" class="pb-10">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pl-14">
      <MainH2>¿Cómo acceder al VIP?</MainH2>
      <div class="bg-contenedores w-[87.5%] h-[200px] radius-comunidad flex flex-col p-5 shadow-2xl mt-5">
        <h3 class="text-2xl font-bold mb-2 text-white font-montserrat">Acceso VIP Exclusivo</h3>
        <p class="text-lg mb-4 text-white font-montserrat">Únete a nuestra membresía VIP y obtén acceso exclusivo a contenido premium, eventos VIP y mucho más.</p>
        <div class="flex font-montserrat text-white items-center">
          <a href="#" class="p-3 text-black font-montserrat font-semibold bg-white rounded-lg text-center mt-10 w-96">¡Compra tu membresía VIP!</a>
          <p class="font-bold ml-4 mt-10 text-3xl">15$</p>
        </div>
        <p class="mt-4 font-montserrat text-xl font-bold">Hazte VIP hoy y disfruta de todos los beneficios exclusivos que tenemos reservados para ti.</p>
      </div>
    </section>
    <section class="pb-20 pt-20 pl-14 mb-20">
      <MainH2>Referencias</MainH2>
      <Reviews />
    </section>
  </div>
</template>