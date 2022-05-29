import * as path from 'path'

import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import solidPlugin from 'vite-plugin-solid'
import solidSvg from 'vite-plugin-solid-svg'

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
      // BUG vite-plugin-solid-svgのimportパスの頭にsrcをつけてしまう不具合への暫定対処
      $: __dirname,
    },
  },
  plugins: [mkcert(), solidPlugin(), solidSvg()],
})
