<script setup>
import {useUserStore} from "../store/user.js"
const user = useUserStore();
</script>


<template>
    <div class="text-xs text-red-500">Tommy</div>
    <span>{{ user.token }}</span>
    <el-button type="primary">button</el-button>
    <el-icon><Search /></el-icon>
</template>