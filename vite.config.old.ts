import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import router from 'unplugin-vue-router/vite'
import layouts from 'vite-plugin-vue-layouts';
import markdown from 'unplugin-vue-markdown/vite'
import { resolve } from 'node:path'
import matter from 'gray-matter'
import { readFileSync } from 'fs-extra'

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
      // extendRoute(route) {
      //   const path = resolve(__dirname, route.components.toString().slice(1))

      //   let layout = ''

      //   if (path.includes('/posts')) layout = 'blog'
      //   else if (path.includes('/projetos')) layout = 'projects'

      //   if (!path.includes('projects.md') && path.endsWith('.md')) {
      //     // const layout = path.includes('/posts') ? 'blog' : ''
      //     const md = readFileSync(path, 'utf-8')
      //     const { data } = matter(md)
      //     route.meta = Object.assign(route.meta || {}, { frontmatter: data })
      //   }

      //   route.meta = Object.assign(route.meta || {}, { layout })
      //   return route
      // }    
    }), 
    vue({
      include: [/\.vue$/, /\.md$/] // <-- allows Vue to compile Markdown files
    }),
    layouts(),
    markdown({})
  ],
})