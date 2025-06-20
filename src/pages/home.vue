<script setup>
// Main layout components
import Header from '@/components/Header.vue';       // Top navigation bar
import HeroBanner from '@/components/HeroBanner.vue'; // Full-width banner/slider
import Sidebar from '@/components/Sidebar.vue';    // Side navigation/content
import PostFeed from '@/components/PostFeed.vue';  // Main content feed
import Footer from '@/components/Footer.vue';      // Bottom footer section
import AuthModal from '@/components/AuthModal.vue'; // Login/Signup modal
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- 1. Top navigation bar -->
    <header class="shadow-md sticky top-0 bg-white z-50">
      <div class="container mx-auto px-4">
        <Header></Header>
      </div>
    </header>

    <!-- 2. Hero banner/slider (optional) -->
    <section class="w-full bg-gray-100">
      <HeroBanner />
    </section>

    <!-- 3. Main content area -->
    <main class="flex-1 container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
      <!-- 3.1 Sidebar (left) -->
      <aside class="w-full md:w-1/4 lg:w-1/5">
        <Sidebar />
      </aside>

      <!-- 3.2 Central content feed -->
      <div class="w-full md:w-2/4 lg:w-3/5">
        <PostFeed />
      </div>

      <!-- 3.3 Right sidebar/widgets (optional) -->
      <div class="w-full md:w-1/4 lg:w-1/5">
        <!-- Trending/Ads/User panel etc -->
      </div>
    </main>

    <!-- 4. Global footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <Footer />
      </div>
    </footer>

    <!-- 5. Global modal overlay (auth, etc) -->
    <AuthModal />
  </div>
</template>

<style scoped>
/* Container styling for consistent max-width */
.container {
  max-width: 1200px;
}
</style>