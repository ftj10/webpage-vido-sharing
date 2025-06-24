<script setup>
import { ref } from 'vue'
import { ElDialog, ElButton } from 'element-plus'
import axios from 'axios'

const searchQuery = ref('')
const results = ref([])
const isLoading = ref(false)
const showDialog = ref(false)

const searchJsonPlaceholder = async () => {
  if (!searchQuery.value.trim()) return
  
  isLoading.value = true
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        q: searchQuery.value,
        _limit: 5
      }
    })
    results.value = response.data
    showDialog.value = true
  } catch (error) {
    console.error('Search failed:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="json-search">
    <el-input
      v-model="searchQuery"
      placeholder="Search JSONPlaceholder posts..."
      @keyup.enter="searchJsonPlaceholder"
    >
      <template #append>
        <el-button @click="searchJsonPlaceholder" :loading="isLoading">
          Search
        </el-button>
      </template>
    </el-input>

    <el-dialog 
      v-model="showDialog" 
      title="Search Results" 
      width="70%"
    >
      <div v-if="results.length > 0" class="results-container">
        <div v-for="post in results" :key="post.id" class="post-item">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
          <small>Post ID: {{ post.id }}</small>
        </div>
      </div>
      <div v-else>
        No results found
      </div>
    </el-dialog>
  </div>
</template>

<style scoped>
.json-search {
  margin: 20px auto;
  max-width: 600px;
}

.results-container {
  max-height: 60vh;
  overflow-y: auto;
}

.post-item {
  padding: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.post-item h3 {
  color: #409EFF;
  margin-bottom: 8px;
}

.post-item p {
  color: #666;
  margin-bottom: 5px;
}

.post-item small {
  color: #999;
}
</style>