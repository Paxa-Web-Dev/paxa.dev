import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'
import markdown from 'unplugin-vue-markdown/vite'
import components from 'unplugin-vue-components/vite'
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
    pages({
      extensions: ['vue', 'md'],
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))

        if (!path.includes('projects.md') && path.endsWith('.md')) {
          const md = readFileSync(path, 'utf-8')
          const { data } = matter(md)
          route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        }

        return route
      },
    }),
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    layouts(),
    markdown({}),
    components({
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    })
  ]
})