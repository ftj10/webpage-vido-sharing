<script setup>
import Register from '@/components/Register.vue'; 
import {ref} from "vue";
//import {useModalStore} from "@/store/model.js"
import { Search } from '@element-plus/icons-vue';
import { useModal } from 'element-plus';

const input = ref("");
const modal = useModalStore();
</script>

<template>
    <div class="flex items-center gap-2">
        <img src="/ico.ico" class="h-10 w-10">
        <div class="flex flex-col items-start font-bold italic">
            <span class="text-xs text-indigo-600 transform -rotate-2 origin-left">Tommy's</span>
            <span class="text-1xs text-pink-500 transform rotate-1 origin-left ml-8">game</span>
            <span class="text-xs text-amber-500 transform -rotate-3 origin-left ml-12">sharing</span>
        </div>
        <div class="flex items-center gap-12">
            <a href="#">Home page</a>
            <div>
                <span>Website Cited</span>
                <el-icon>
                    <ArrowDownBold />
                </el-icon>
            </div>

            <a href="#">
                <el-input v-model="input" class="w-full" placeholder="Enter The Name Of Game">
                    <template #append>
                        <el-icon>
                            <Search />
                        </el-icon>
                    </template>
                </el-input>
            </a>
        </div>

        <div class="ml-auto">
            <el-button link-size="large">login</el-button>
            <el-button link-size="large">Register</el-button>
        </div>

        <!-- <Register /> -->
    </div>
</template>

<style scoped></style>
