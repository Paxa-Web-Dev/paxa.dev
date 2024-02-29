import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import '@/assets/scss/main.scss'
import App from '@/app.vue'
import autoRoutes from 'pages-generated'

const routes = autoRoutes.map((i) => {
  return {
    ...i,
    alias: i.path.endsWith('/')
      ? `${i.path}index.html`
      : `${i.path}.html`,
  }
})

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes
})

createApp(App).use(router).mount('#app')
