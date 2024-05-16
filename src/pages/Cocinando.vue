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
            <div class="bg-contenedores w-[200px] h-[180px] radius-categoria m-5">
                <h3 class="text-white font-montserrat text-center mt-3 cursor-pointer text-xl">Análisis técnico</h3>
                <div class="bg-white rounded-full w-[90px] m-auto mt-14 p-5">
                    <img src="/grafico.svg" alt="Icono de gráfico">
                </div>
            </div>
            <div class="bg-contenedores w-[200px] h-[180px] radius-categoria m-5">
                <h3 class="text-white font-montserrat text-center mt-3 cursor-pointer text-xl">Análisis fundamental</h3>
                <div class="bg-white rounded-full w-[90px] m-auto mt-7 p-5">
                    <img src="/analisis.svg" alt="Icono de análisis fundamental">
                </div>
            </div>
            <div class="bg-contenedores w-[200px] h-[180px] radius-categoria m-5">
                <h3 class="text-white font-montserrat text-center mt-3 cursor-pointer text-xl">Trading</h3>
                <div class="bg-white rounded-full w-[90px] m-auto mt-14 p-5">
                    <img src="/trading.svg" alt="Icono de trading">
                </div>
            </div>
            <div class="bg-contenedores w-[200px] h-[180px] radius-categoria m-5">
                <h3 class="text-white font-montserrat text-center mt-3 cursor-pointer text-xl">Onchain</h3>
                <div class="bg-white rounded-full w-[90px] m-auto mt-14 p-5">
                    <img src="/onchain.svg" alt="Icono de onchain">
                </div>
            </div>
            <div class="bg-contenedores w-[200px] h-[180px] radius-categoria m-5">
                <h3 class="text-white font-montserrat text-center mt-3 cursor-pointer text-xl">Airdrops</h3>
                <div class="bg-white rounded-full w-[90px] m-auto mt-14 p-5">
                    <img src="/airdrop.svg" alt="Icono de airdrop">
                </div>
            </div>
        </div>
    </section>
    <section class="pb-20">
        <MainH2 class="pl-12 pt-10 pb-5">Post recientes</MainH2>
        <div class="pl-12">
            <div class="bg-contenedores w-[72%] h-[230px] radius-comunidad p-5">
                <h3 class="text-white font-montserrat text-2xl font-semibold">Post</h3>
                <p class="bg-white w-[140px] text-center font-montserrat rounded-lg mt-2 p-1">Análisis técnico</p>
                <p class="font-montserrat text-white mt-5 mb-5">Sumérgete en un profundo análisis técnico para entender las     tendencias del mercado y tomar decisiones informadas en tus inversiones.</p>
                <router-link to="#" class="bg-white font-montserrat text-center font-link p-1 radius-mensaje">Ver más</router-link>
            </div>
            <div class="bg-contenedores w-[72%] h-[230px] radius-comunidad mt-6 p-5">
                <h3 class="text-white font-montserrat text-2xl font-semibold">Post</h3>
                <p class="bg-white w-[140px] text-center font-montserrat rounded-lg mt-2 p-1">Trading</p>
                <p class="font-montserrat text-white mt-5 mb-5">Aprende las estrategias de trading más efectivas para capitalizar   oportunidades en el mercado de valores y criptomonedas.</p>
                <router-link to="#" class="bg-white font-montserrat text-center font-link p-1 radius-mensaje">Ver más</router-link>
            </div>
            <div class="bg-contenedores w-[72%] h-[230px] radius-comunidad mt-6 p-5">
                <h3 class="text-white font-montserrat text-2xl font-semibold">Post</h3>
                <p class="bg-white w-[140px] text-center font-montserrat rounded-lg mt-2 p-1">Onchain</p>
                <p class="font-montserrat text-white mt-5 mb-5">Sumérgete en el mundo de la tecnología blockchain y descubre cómo   está transformando industrias enteras con su transparencia y seguridad.</p>
                <router-link to="#" class="bg-white font-montserrat text-center font-link p-1 radius-mensaje">Ver más</router-link>
            </div>
            <div class="bg-contenedores w-[72%] h-[230px] radius-comunidad mt-6 p-5">
                <h3 class="text-white font-montserrat text-2xl font-semibold">Post</h3>
                <p class="bg-white w-[140px] text-center font-montserrat rounded-lg mt-2 p-1">Trading</p>
                <p class="font-montserrat text-white mt-5 mb-5">Explora las diferentes técnicas de trading, desde el day trading    hasta el swing trading, y encuentra la que mejor se adapte a tu estilo y objetivos.</p>
                <router-link to="#" class="bg-white font-montserrat text-center font-link p-1 radius-mensaje">Ver más</router-link>
            </div>
        </div>
    </section>

</template>