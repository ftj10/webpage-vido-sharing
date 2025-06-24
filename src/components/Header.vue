<script setup>
import Register from '@/components/Register.vue';
import { ref } from "vue";
import { useModalStore } from "@/store/modal.js"
import { Search } from '@element-plus/icons-vue';
import { useUserStore } from '@/store/user';
import Login from './Login.vue';
import DropdownMenu from './DropdownMenu.vue';
import JsonSearchTest from './JsonSearchTest.vue';

const input = ref("");
const data = ref(['minecraft', 'csgo', 'stellar blade']); //data from backend
const searchResults = ref([])

const modal = useModalStore();
const user = useUserStore();

const performSearch = () => {
    if (!input.value.trim()) {
        searchResults.value = []
        return
    }
    searchResults.value = data.value.filter(game =>
        game.toLowerCase().includes(input.value.toLowerCase())
    )
}
</script>

<template>
    <div class="flex items-center gap-2">
        <img src="/ico.ico" class="h-10 w-10">
        <div class="flex flex-col items-start font-bold italic">
            <span class="text-xs text-indigo-600 transform -rotate-2 origin-left">Tommy's</span>
            <span class="text-1xs text-pink-500 transform rotate-1 origin-left ml-8">game</span>
            <span class="text-xs text-amber-500 transform -rotate-3 origin-left ml-12">sharing</span>
        </div>

        <div class="flex items-center gap-12 flex-grow">
            <a href="#" class="font-100">Home page</a>

            <DropdownMenu />

            <!-- search -->
            <div class="relative">
                <!-- <el-input v-model="input" class="w-full" placeholder="Enter The Name Of Game"
                    @keyup.enter="performSearch">
                    <template #append>
                        <el-button @click="performSearch">
                            <el-icon>
                                <Search />
                            </el-icon>
                        </el-button>
                    </template>
</el-input> -->
                <JsonSearchTest />
                <!-- Search results dropdown -->
                <div v-if="searchResults.length > 0"
                    class="absolute z-50 mt-1 w-full bg-white shadow-lg rounded-md max-h-60 overflow-auto">
                    <div v-for="(result, index) in searchResults" :key="index"
                        class="px-4 py-2 hover:bg-gray-100 cursor-pointer" @click="selectGame(result)">
                        {{ result }}
                    </div>
                </div>
            </div>


            <!-- Login and Register -->
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
    </div>
</template>

<style scoped></style>
