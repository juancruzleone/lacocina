<script>
import MainH1 from '../components/MainH1.vue';
import MainH2 from '../components/MainH2.vue';



export default{
    name: 'Cocinando',
    components: { MainH1, MainH2 }
}
</script>

<template>
    <div class="bg-portada h-96">
        <MainH1>Cocinando</MainH1>
    </div>
    <section>
        <MainH2 class="pl-12 pt-10 pb-5 text-center">Categorias</MainH2>
        <div class="flex ml-12 justify-center">
            <div class="bg-contenedores w-[200px] h-[200px] radius-categoria m-5">
                <h3 class="text-white font-montserrat text-center mt-2 cursor-pointer text-xl">Airdrop</h3>
            </div>
            <div class="bg-contenedores w-[200px] h-[200px] radius-categoria m-5">
                <h3 class="text-white font-montserrat text-center mt-2 cursor-pointer text-xl">Airdrop</h3>
            </div>
            <div class="bg-contenedores w-[200px] h-[200px] radius-categoria m-5">
                <h3 class="text-white font-montserrat text-center mt-2 cursor-pointer text-xl">Airdrop</h3>
            </div>
            <div class="bg-contenedores w-[200px] h-[200px] radius-categoria m-5">
                <h3 class="text-white font-montserrat text-center mt-2 cursor-pointer text-xl">Airdrop</h3>
            </div>
            <div class="bg-contenedores w-[200px] h-[200px] radius-categoria m-5">
                <h3 class="text-white font-montserrat text-center mt-2 cursor-pointer text-xl">Airdrops</h3>
            </div>
        </div>
    </section>
    <section class="pb-20">
        <MainH2 class="pl-12 pt-10 pb-5">Post recientes</MainH2>
        <div class="pl-12">
            <div class="bg-contenedores w-[700px] h-[120px] radius-comunidad"></div>
            <div class="bg-contenedores w-[700px] h-[120px] radius-comunidad mt-4"></div>
            <div class="bg-contenedores w-[700px] h-[120px] radius-comunidad mt-4"></div>
            <div class="bg-contenedores w-[700px] h-[120px] radius-comunidad mt-4"></div>
        </div>
    </section>
</template>