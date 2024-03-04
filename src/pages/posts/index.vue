<script setup lang="ts">
import { useRouter } from 'vue-router/auto'
const routes = useRouter().getRoutes()
// const posts = routes.filter(r => r.path !== '/posts' && r.path.startsWith('/posts'))
const posts = routes.filter(r => r.path.startsWith('/posts'))
console.log(posts)
</script>
<template>
  <h1>Posts Index</h1>

  <div v-for="post in posts">
    {{ post.meta }}
  </div>
</template>