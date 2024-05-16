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
                            <img src="/evento.svg" alt="Icono de evemtos">
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
        <div class="bg-contenedores w-[500px] h-[120px] radius-comunidad">

        </div>  
    </section>
    <section class="pb-20 pt-20">
        <MainH2 class="pl-10">Referencias</MainH2>
        <div class="bg-contenedores w-[1000px] h-[100px] ml-12 radius-comunidad">

        </div>
    </section>
</template>