<script setup>
import { ArrowDownBold } from '@element-plus/icons-vue';
</script>

<template>
  <el-dropdown>
    <span class="dropdown-link">
      Website Cited
      <el-icon class="ml-1">
        <ArrowDownBold />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu class="dropdown-menu">
        <div class="px-3 py-2 grid grid-cols-2 gap-4 w-64">
          <div>
            <h4 class="font-medium text-center text-gray-800 mb-2">Mode</h4>
            <ul class="space-y-1 text-sm">
              <li><a href="https://www.nexusmods.com/" class="dropdown-item">Mode Website</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium text-center text-gray-800 mb-2">Video</h4>
            <ul class="space-y-1 text-sm">
              <li><a href="https://www.bilibili.com/" class="dropdown-item">bilibili</a></li>
              <li><a href="https://www.douyin.com" class="dropdown-item">CN Tiktok</a></li>
            </ul>
          </div>
        </div>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
