<script>
export default {
    name: 'MainButton',
}
</script>

<template>
    <button 
        class="transition p-2 h-[40px] rounded bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-montserrat"
    >
        <slot>Enviar</slot>
    </button>
</template>