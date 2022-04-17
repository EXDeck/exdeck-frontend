import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import * as path from 'path';

export default defineConfig({
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  root: './src',
  publicDir: '../public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [solidPlugin()],
});
