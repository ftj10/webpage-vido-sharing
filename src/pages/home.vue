<script setup>
// Main layout components
import Header from '@/components/Header.vue';  
import Classify from '@/components/Classify.vue';
import Swiper from '@/components/Swiper.vue';
import UserOrUnLogin from '@/components/UserOrUnLogin.vue';
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

    <div class="w-[1200px] mx-auto mt-4 mb-4">
      <div class="flex items-center gap-8">
        <Classify />

        <Swiper />

        <UserOrUnLogin />

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