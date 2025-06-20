<script setup>
import {useUserStore} from "../store/user.js"
const user = useUserStore();
</script>


<template>
    <div>Tommy</div>
    <span>{{ user.token }}</span>
</template>