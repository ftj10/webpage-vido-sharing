<script setup>
import { useUserStore } from '@/store/user';
import { useModalStore } from '@/store/modal';

const user = useUserStore();
const modal = useModalStore();
</script>

<template>
    <div class="shadow-[0_0_10px_0_#d7d7d7]" :style="{ height: '380px', width: '160px' }">
        <div class="w-100 h-80">
            <div v-if="user.isLogin" class="flex flex-col items-center justify-center h-full">
                Welcome:
                <span class="text-orange font-bold">{{ user.currentUser }}</span>
                <img class=" mb-10 mt-10"
                    src="../../public/IMG_6905.GIF">
                <el-button class="text-center bg-#ff602a cursor-pointer rounded leading-2" @click="user.logout">
                    Logout
                </el-button>
            </div>

            <div v-else class="flex flex-col items-center justify-center h-full">
                <img class=" mb-10 mt-10"
                    src="../../public/IMG_6904.GIF">
                <el-button @click="modal.switchLoginVisible" class="text-center cursor-pointer">
                    Login
                </el-button>
            </div>
        </div>

    </div>

</template>