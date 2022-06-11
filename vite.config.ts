import * as path from 'path'

import { defineConfig, loadEnv } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import solidPlugin from 'vite-plugin-solid'
import solidSvg from 'vite-plugin-solid-svg'

export default defineConfig(({ mode }) => {
  console.log(`${process.cwd()}/src`)

  const env = loadEnv(mode, `${process.cwd()}/src`)

  const url = `${env.VITE_API_URL || ''}`
  if (!url) throw Error('Environment variable "VITE_API_URL" is not set')

  const isHttps = `${env.VITE_API_HTTPS}`.toLowerCase() === 'true'
  const urlHttps = `${env.VITE_API_URL_HTTPS || ''}`
  if (isHttps && !urlHttps) throw Error('Environment variable "VITE_API_URL_HTTPS" is not set')

  return {
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      target: 'esnext',
      polyfillDynamicImport: false,
    },
    server: {
      host: true,
      https: isHttps,
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
  }
})
