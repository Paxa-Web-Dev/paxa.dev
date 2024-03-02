import '@/assets/scss/main.scss'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import App from '@/app.vue'
import autoRoutes from 'pages-generated'

const layoutRoutes = setupLayouts(autoRoutes)

const routes = layoutRoutes.map((i) => {
  return {
    ...i,
    alias: i.path.endsWith("/") ? `${i.path}index.html` : `${i.path}.html`,
  };
});

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes
})

// host = window.location.host; subdomain = host.split(".")[0];
router.beforeEach((_to, _from, next) => {
  if (window.location.host === "blog.paxa.dev") {
    next("/posts")
  } else {
    next()
  }
})

createApp(App).use(router).mount('#app')
