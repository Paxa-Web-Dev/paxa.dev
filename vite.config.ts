import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import router from 'unplugin-vue-router/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
    router({
			extensions: ['.vue', '.md'],
			async extendRoute(route) {
				route.addToMeta({ title: 'Teste', path: route.fullPath })
			}
		}), 
    vue({
			include: [/\.vue$/, /\.md$/]
		})
  ],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
