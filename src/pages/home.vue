<script setup>
import {useUserStore} from "../store/user.js"
const user = useUserStore();
</script>


<template>
    <div>TOmmy</div>
    <span>{{ user.token }}</span>
</template>