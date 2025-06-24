<script setup>
import ClassifyItem from './ClassifyItem.vue';

const list = ["Csgo",
    "Minecraft",
    "Stellat Blade",
    "Sekiro: Shadows Die Twice",
    "Elden Ring",
    "Genshin Impact"]

</script>

<template>
    <div class="rounded shadow-[0_0_10px_0_#d7d7d7]"
    :style="{height: '380px',width: '160px'}">
    <ul class="py-5">
        <ClassifyItem v-for="(item,index) in list" :key="index" :item="item" />
    </ul>
    </div>
</template>