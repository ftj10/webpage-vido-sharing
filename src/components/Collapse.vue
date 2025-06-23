<template>
  <el-collapse-item name="website-cited">
    <template #title>
      <div class="flex items-center">
        <span>Website Cited</span>
        <el-icon class="ml-1">
          <ArrowDownBold />
        </el-icon>
      </div>
    </template>
    
    <div class="px-4 py-2 grid grid-cols-2 gap-4">
      <div>
        <h4 class="font-medium text-gray-800 mb-2">Mode</h4>
        <ul class="space-y-1 text-sm">
          <li><a href="#" class="hover:text-blue-500">Design Mode</a></li>
          <li><a href="#" class="hover:text-blue-500">Development Mode</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-medium text-gray-800 mb-2">Video</h4>
        <ul class="space-y-1 text-sm">
          <li><a href="#" class="hover:text-blue-500">Tutorial</a></li>
          <li><a href="#" class="hover:text-blue-500">Demo</a></li>
        </ul>
      </div>
    </div>
  </el-collapse-item>
</template>

<script setup>
import { ArrowDownBold } from '@element-plus/icons-vue'
</script>