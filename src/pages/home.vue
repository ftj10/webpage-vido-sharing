<script setup>
// Main layout components
import Header from '@/components/Header.vue';
import Classify from '@/components/Classify.vue';
import Swiper from '@/components/Swiper.vue';
import UserOrUnLogin from '@/components/UserOrUnLogin.vue';

import { ref } from 'vue';

const surprise = ref(false);

const su1 = () => {
  setTimeout(() => {
    surprise.value = true;
  }, 1000);
};

const closeSurprise = () => {
  surprise.value = false;
};
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- background image -->
    <div class="fixed inset-0 -z-10 opacity-50 bg-cover bg-center"
      style="background-image: url('https://ts1.tc.mm.bing.net/th/id/R-C.6ce5d9b2a058547268322b0b603ba7e3?rik=uVKp8bhP9QRnWw&pid=ImgRaw&r=0');">
    </div>

    <!-- 1. Top navigation bar -->
    <header class="shadow-md sticky top-0 bg-white z-50">
      <div class="container mx-auto px-4">
        <Header></Header>
      </div>
    </header>
    <!-- website body -->
    <main class="flex-grow">
      <div class="w-[1200px] mx-auto mt-4 mb-4">
        <div class="flex items-center gap-8">
          <Classify />
          <Swiper />
          <UserOrUnLogin />
        </div>
      </div>

      <!-- Centered "Do not Click" button -->
      <div class="flex justify-center my-8">
        <el-button class="w-32" type="danger" @click="su1" size="small" :disabled="surprise">
          {{ surprise ? 'Oops!' : 'Do not Click' }}
        </el-button>
      </div>
    </main>

    <!-- Surprise video modal -->
    <div v-if="surprise" class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div class="relative">
        <iframe src="//player.bilibili.com/player.html?bvid=BV1GJ411x7h7&high_quality=1"
          class="rounded-lg shadow-lg w-full h-[450px] max-w-[800px]" frameborder="0">
        </iframe>

        <button @click="closeSurprise" class="absolute -top-10 right-0 text-white hover:text-red-500 transition-colors">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Container styling for consistent max-width */
.container {
  max-width: 1200px;
}
</style>