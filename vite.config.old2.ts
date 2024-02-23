import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import router from 'unplugin-vue-router/vite'
import layouts from 'vite-plugin-vue-layouts';
import markdown from 'unplugin-vue-markdown/vite'
import { resolve } from 'node:path'
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
        // const path = resolve(__dirname, route.components.slice(1))
        // const path = route.components.get('default')
        let layout = ''
        let path = ''

        if (!route.components.get('default')) return
        else path = route.components.get('default')
        // else path = resolve(__dirname, route.components.get('default').slice(1))

        // console.log(route.fullPath)
        console.log(path)

        if (route.name.includes('/posts')) layout = 'blog'
        else if (route.name.includes('/projetos')) layout = 'projects'

        // if (!route.name.includes('projects') && path.endsWith('.md')) {
        if (path.endsWith('.md')) {
          const md = readFileSync(path, 'utf-8')
          const { data } = matter(md)
          route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        }

        route.meta = Object.assign(route.meta || {}, { layout })
        // return route
      },
      
        // beforeWriteFiles(root) {
        //   root.insert('/from-root', path.join(__dirname, './src/pages/index.vue'))
        // },

    }), 
    vue({
      include: [/\.vue$/, /\.md$/] // <-- allows Vue to compile Markdown files
    }),
    layouts(),
    markdown({})
  ],
})