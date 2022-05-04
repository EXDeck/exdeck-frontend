import * as path from 'path'

import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  server: {
    host: true,
    https: true,
  },
  root: './src',
  publicDir: '../public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [mkcert(), solidPlugin()],
})
