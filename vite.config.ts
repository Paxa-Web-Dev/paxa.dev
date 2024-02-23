import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import router from 'unplugin-vue-router/vite'
import layouts from 'vite-plugin-vue-layouts';
import markdown from 'unplugin-vue-markdown/vite'
import { resolve, join } from 'node:path'
import { readFileSync } from 'fs-extra'
import matter from 'gray-matter'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
      '~/': `${resolve(__dirname)}/`
    },
  },
  plugins: [
    router({
      extensions: ['.vue', '.md'],  
      extendRoute(route) {
        console.log(route.meta)

        if (route.path === '/posts') {
          route.meta = { frontmatter: { title: 'Test' }}
        }

        if (route.name === '/[name]') {
          route.addAlias('/hello-vite-:name')
        }
      }
    }), 
    vue({
      include: [/\.vue$/, /\.md$/] // <-- allows Vue to compile Markdown files
    }),
    layouts(),
    markdown({})
  ],
})