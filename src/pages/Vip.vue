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
    <section>
        <MainH2 class="pl-10 p-10">¿Como acceder al VIP?</MainH2>
    </section>
</template>