<script setup lang="ts">
import { useRouter } from 'vue-router'
const routes = useRouter().getRoutes()
console.log(routes)
</script>
<template>
  <div class="row">
    <div class="col-md-8">
      <h2 class="mt-5 fw-bold">Blog</h2>
      <template v-for="post in routes" :key="post.path">
        <router-link :to="post.path">{{ post.meta.frontmatter }}</router-link><br />
      </template>
    </div>
  </div>
</template>
<route lang="yaml">
  meta:
    layout: blog
</route>