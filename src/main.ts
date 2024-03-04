import '@/assets/scss/main.scss'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import App from '@/app.vue'
import autoRoutes from 'pages-generated'

let modifiedRoute
const isBlog = window.location.hostname === 'blog.paxa.dev'
const layoutRoutes = setupLayouts(autoRoutes)

const routes = setupLayouts(layoutRoutes).map((route) => {  
  modifiedRoute = { ...route, alias: route.path.endsWith("/") ? `${route.path}index.html` : `${route.path}.html` }
  if (isBlog && route.path === "/") modifiedRoute = { ...modifiedRoute, alias: '/posts' }
  return modifiedRoute
})

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes
})

// host = window.location.host; subdomain = host.split(".")[0];
router.beforeEach((to, _from, next) => {
  if (window.location.host === "blog.paxa.dev") {
    if (!to.path.startsWith('/posts')) {
      next('/posts')
    } else {
      next()
    }
  } else {
    next()
  }
})

createApp(App).use(router).mount('#app')
