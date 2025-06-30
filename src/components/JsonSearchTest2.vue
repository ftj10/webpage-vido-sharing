<script setup>
import { ref, nextTick } from 'vue'
import { ElDialog, ElInput, ElButton } from 'element-plus'
import axios from 'axios'

const searchValue = ref('')
const searchResults = ref([])
const isLoading = ref(false)
const showDialog = ref(false)

const handleSearch = async (value) => {
  if (!value.trim()) {
    searchResults.value = []
    return
  }
  
  isLoading.value = true
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        q: value,
        _limit: 10
      }
    })
    searchResults.value = response.data
  } catch (error) {
    console.error('Search failed:', error)
    searchResults.value = []
  } finally {
    isLoading.value = false
  }
}

const openSearchDialog = () => {
  showDialog.value = true
  // Focus the input after dialog opens
  nextTick(() => {
    document.querySelector('.search-dialog-input input').focus()
  })
}
</script>

<template>
  <div class="search-container">
    <el-input 
      placeholder="Search..." 
      v-model="searchValue" 
      size="medium" 
      @click="openSearchDialog"
      readonly
      class="search-trigger"
    >
      <template #prefix>
        <el-icon><Search /></el-icon>
      </template>
    </el-input>

    <el-dialog 
      v-model="showDialog" 
      title="Search Results" 
      width="70%"
      :close-on-click-modal="false"
      @closed="searchValue = ''; searchResults = []"
    >
      <el-input
        v-model="searchValue"
        placeholder="Type to search..."
        @input="handleSearch"
        :loading="isLoading"
        class="search-dialog-input"
        clearable
      />
      
      <div v-if="searchResults.length > 0" class="results-container">
        <div v-for="item in searchResults" :key="item.id" class="result-item">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
          <small>ID: {{ item.id }}</small>
        </div>
      </div>
      <div v-else-if="searchValue && !isLoading" class="empty-results">
        No results found
      </div>
      <div v-else-if="!searchValue" class="empty-prompt">
        Please enter your search terms
      </div>
    </el-dialog>
  </div>
</template>

<style scoped>
.search-container {
  display: inline-block;
}

.search-trigger {
  width: 200px;
  cursor: pointer;
}

.search-dialog-input {
  margin-bottom: 20px;
}

.results-container {
  max-height: 60vh;
  overflow-y: auto;
}

.result-item {
  padding: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.result-item h3 {
  color: #409EFF;
  margin-bottom: 8px;
}

.result-item p {
  color: #666;
  margin-bottom: 5px;
}

.result-item small {
  color: #999;
}

.empty-results,
.empty-prompt {
  text-align: center;
  color: #999;
  padding: 20px;
}
</style>