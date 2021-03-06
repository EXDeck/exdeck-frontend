import path from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: 'esnext',
  },
  server: {
    host: true,
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
});
