import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    // 打包后去掉console，debugger
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : []
  },
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  plugins: [
    vue(),
    vueJsx(),
    // 自动引入依赖
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: './src/auto-imports.d.ts'
    }),
    legacy({
      targets: ['ie>=11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  resolve: {
    // 配置别名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '#': fileURLToPath(new URL('./types', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        // js和css分离
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        // 分包
        manualChunks: {
          vue: ['vue', 'pinia', 'vue-router'],
          echarts: ['echarts'],
          wangeditor: ['@wangeditor/editor', '@wangeditor/editor-for-vue'],
          elementPlus: ['element-plus'],
          leaflet: ['leaflet', 'leaflet-minimap'],
          elementIcons: ['@element-plus/icons-vue']
        }
      }
    },
    sourcemap: false
  },
  server: {
    // 开启局域网
    host: true,
    port: 1024,
    open: true
  }
})
