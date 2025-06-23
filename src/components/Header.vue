<script setup>
import Register from '@/components/Register.vue';
import { ref } from "vue";
import { useModalStore } from "@/store/modal.js"
import { Search } from '@element-plus/icons-vue';
import { useUserStore } from '@/store/user';
import Login from './Login.vue';
import DropdownMenu from './DropdownMenu.vue';

const input = ref("");
const modal = useModalStore();
const user = useUserStore();
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

            <DropdownMenu />

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

        <div class="ml-auto" v-if="!(user.isLogin)">
            <el-button size="large" @click="modal.showLogin">Login</el-button>
            <el-button size="large" type="primary" @click="modal.showRegister">Register</el-button>
        </div>
        <div class="ml-auto" v-else>
            <el-popconfirm title="want to log out?" @confirm="user.logout">
                <template #reference>
                    <el-button>{{ user.users.account }}</el-button>
                </template>
            </el-popconfirm>
        </div>
        <Register />
        <Login />
    </div>
</template>

<style scoped></style>
