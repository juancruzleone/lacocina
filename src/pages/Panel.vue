<script>
import MainH1 from '../components/MainH1.vue';
import MainH2 from '../components/MainH2.vue';


export default{
    name: 'Panel',
    components: { MainH1, MainH2 }
}
</script>

<template>
    <div class="bg-portada h-96">
        <MainH1>Panel admin</MainH1>
    </div>
    <section class="pl-12 mt-10">
        <MainH2>Posts publicados</MainH2>
        <div>
            <div>
                <div class="bg-contenedores w-[72%] h-[220px] radius-comunidad p-5">
                    <h3 class="text-white font-montserrat text-2xl font-semibold">Post</h3>
                    <p class="bg-white w-[140px] text-center font-montserrat rounded-lg mt-2 p-1">Análisis técnico</p>
                    <p class="font-montserrat text-white mt-5 mb-5">Sumérgete en un profundo análisis técnico para entender las     tendencias del mercado y tomar decisiones informadas en tus inversiones.</p>
                    <router-link to="#" class="bg-white font-montserrat text-center font-link p-1 radius-mensaje">Ver más</router-link>
                </div>
                <div class="bg-contenedores w-[72%] h-[220px] radius-comunidad mt-6 p-5">
                    <h3 class="text-white font-montserrat text-2xl font-semibold">Post</h3>
                    <p class="bg-white w-[140px] text-center font-montserrat rounded-lg mt-2 p-1">Trading</p>
                    <p class="font-montserrat text-white mt-5 mb-5">Aprende las estrategias de trading más efectivas para capitalizar   oportunidades en el mercado de valores y criptomonedas.</p>
                    <router-link to="#" class="bg-white font-montserrat text-center font-link p-1 radius-mensaje">Ver más</router-link>
                </div>
                <div class="bg-contenedores w-[72%] h-[220px] radius-comunidad mt-6 p-5">
                    <h3 class="text-white font-montserrat text-2xl font-semibold">Post</h3>
                    <p class="bg-white w-[140px] text-center font-montserrat rounded-lg mt-2 p-1">Onchain</p>
                    <p class="font-montserrat text-white mt-5 mb-5">Sumérgete en el mundo de la tecnología blockchain y descubre cómo   está transformando industrias enteras con su transparencia y seguridad.</p>
                    <router-link to="#" class="bg-white font-montserrat text-center font-link p-1 radius-mensaje">Ver más</router-link>
                </div>
                <div class="bg-contenedores w-[72%] h-[220px] radius-comunidad mt-6 p-5">
                    <h3 class="text-white font-montserrat text-2xl font-semibold">Post</h3>
                    <p class="bg-white w-[140px] text-center font-montserrat rounded-lg mt-2 p-1">Trading</p>
                    <p class="font-montserrat text-white mt-5 mb-5">Explora las diferentes técnicas de trading, desde el day trading    hasta el swing trading, y encuentra la que mejor se adapte a tu estilo y objetivos.</p>
                    <router-link to="#" class="bg-white font-montserrat text-center font-link p-1 radius-mensaje">Ver más</router-link>
                </div>
            </div>
        </div>
    </section>
</template>