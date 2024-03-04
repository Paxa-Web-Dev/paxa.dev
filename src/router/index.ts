import { createRouter, createWebHistory } from 'vue-router/auto' // 'vue-router'
import HomeView from '../pages/index.vue'

const main = [
	{ path: '/', name: 'home', component: HomeView },
	{	path: '/about',	name: 'about', component: () => import('../pages/index.vue') }
]

const router = createRouter({
	extendRoutes: (routes) => [ ...routes,  ...main ],
	history: createWebHistory(import.meta.env.BASE_URL)
})

export default router
