<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const routes = router.getRoutes()
  .filter(i => i.name)
  .filter(i => i.path.startsWith('/posts') && i.path !== '/posts')
  .filter(i => !i.path.endsWith('.html'))

</script>
<template>
  <div class="row">
    <div class="col-md-8">
      <h2 class="mt-5 fw-bold">Blog</h2>
      <template v-for="route in routes" :key="route.path">
        <router-link :to="route.path">{{ route.meta.frontmatter }}</router-link><br />
      </template>
    </div>
  </div>
</template>
<route lang="yaml">
  meta:
    layout: blog
</route>