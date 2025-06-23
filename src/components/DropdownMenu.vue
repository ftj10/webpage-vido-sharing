<script setup>
import { ArrowDownBold } from '@element-plus/icons-vue'
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
            <h4 class="font-medium text-gray-800 mb-2">Mode</h4>
            <ul class="space-y-1 text-sm">
              <li><a href="#" class="dropdown-item">Design Mode</a></li>
              <li><a href="#" class="dropdown-item">Development Mode</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium text-gray-800 mb-2">Video</h4>
            <ul class="space-y-1 text-sm">
              <li><a href="#" class="dropdown-item">Tutorial</a></li>
              <li><a href="#" class="dropdown-item">Demo</a></li>
            </ul>
          </div>
        </div>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>



