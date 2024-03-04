<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { formatDate } from '~/logics'
import type { Post } from '@/types'

const props = defineProps<{
    type?: string
    posts?: Post[]
    extra?: Post[]
}>()

const router = useRouter()

const routes: Post[] = router
    .getRoutes()
    .filter(i => i.name)
    .filter(i => i.meta.frontmatter)
    .filter(i => i.path.startsWith('/posts') && i.meta.frontmatter.date && !i.meta.frontmatter.draft)
    .filter(i => !i.path.endsWith('.html'))
    .map(i => ({
        path: i.meta.frontmatter.redirect || i.path,
        title: i.meta.frontmatter.title,
        date: i.meta.frontmatter.date,
        lang: i.meta.frontmatter.lang,
        duration: i.meta.frontmatter.duration || '1min',
        recording: i.meta.frontmatter.recording,
        upcoming: i.meta.frontmatter.upcoming,
        redirect: i.meta.frontmatter.redirect
    }))

const posts = computed(
  () => 
    [...(props.posts || routes), ...(props.extra || [])]
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))
)

const getYear = (a: Date | string | number) => new Date(a).getFullYear()
const isFuture = (a?: Date | string | number) => a && new Date(a) > new Date()
const isSameYear = (a?: Date | string | number, b?: Date | string | number) => a && b && getYear(a) === getYear(b)
function isSameGroup(a: Post, b?: Post) {
    return isFuture(a.date) === isFuture(b?.date) && isSameYear(a.date, b?.date)
}

function getGroupName(p: Post) {
    if (isFuture(p.date)) return 'Upcoming'
    return getYear(p.date)
}
</script>
<template>
  <div class="row">
    <div class="col-md-8">
      <h2 class="mt-5 fw-bold">Blog</h2>
      <template v-if="!posts.length">
        <h2 class="mt-5 fw-bold">Nenhum post ainda</h2>
      </template>

      <template v-for="(route, idx) in posts" :key="route.path">
        <h2 v-if="!isSameGroup(route, posts[idx - 1])">
          <span class="badge text-bg-light">{{ getGroupName(route) }}</span>
        </h2>
        <router-link :to="route.path">{{ formatDate(route.date) }} - {{ route.title }} - {{ route.duration }}</router-link>
      </template>
    </div>
  </div>
</template>
<route lang="yaml">
  meta:
    layout: blog
</route>