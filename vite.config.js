import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDirectory = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(rootDirectory, './src'),
    },
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  build: {
    rollupOptions: {
      output: isSsrBuild ? {
        entryFileNames: 'entry-server.js',
        chunkFileNames: 'chunks/[name]-[hash].js',
      } : {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) return 'react-vendor'
          if (id.includes('@radix-ui')) return 'radix-vendor'
          if (id.includes('i18next') || id.includes('react-i18next')) return 'i18n-vendor'
          if (id.includes('lucide-react')) return 'icons-vendor'
          if (id.includes('react-hook-form') || id.includes('zod')) return 'form-vendor'
          if (id.includes('framer-motion')) return 'animation-vendor'
          return 'vendor'
        },
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(assetInfo.name)) return 'assets/images/[name]-[hash][extname]'
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) return 'assets/fonts/[name]-[hash][extname]'
          return 'assets/[name]-[hash][extname]'
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: isSsrBuild ? false : 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      format: { comments: false },
    },
    sourcemap: false,
    cssCodeSplit: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}))
