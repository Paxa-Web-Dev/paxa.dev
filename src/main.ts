import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import '@/assets/scss/main.scss'
import App from '@/app.vue'

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  extendRoutes: (routes) => setupLayouts(routes)
})

createApp(App).use(router).mount('#app')
