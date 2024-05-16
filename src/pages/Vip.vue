<script>
import MainH1 from '../components/MainH1.vue';
import MainH2 from '../components/MainH2.vue';


export default{
    name: 'Vip',
    components: { MainH1, MainH2 }
}
</script>

<template>
    <div class="bg-portada h-96">
        <MainH1>VIP</MainH1>
    </div>
    <section class="pl-12 pb-20">
        <MainH2 class="pt-10 ">Beneficios</MainH2>
        <div class="bg-contenedores w-[200px] h-[100px]">

        </div>
    </section>
    <section class="pb-20">
        <MainH2 class="pl-10 p-10">¿Como acceder al VIP?</MainH2>
        <div class="bg-contenedores w-[1000px] h-[100px] ml-12 radius-comunidad">

        </div>
    </section>
</template>