<script setup>
const props = defineProps(["item"]);
</script>

<template>
    <li class="flex items-center justify-between w-full cursor-pointer text-base pl-5 pr-3 hover:text-red-500"
        :style="{ height: '60px' }">
        <span>{{ props.item }}</span>
        <el-icon class="text-black text-sm">
            <CaretRight />
        </el-icon>
    </li>
</template>