import path from 'path'

import { loadEnv, UserConfigExport } from 'vite'
import eslint from 'vite-plugin-eslint'
import mkcert from 'vite-plugin-mkcert'
import solidPlugin from 'vite-plugin-solid'

// eslint-disable-next-line jsdoc/require-jsdoc
function mkCert() {
  const bool = (str: string | undefined): boolean => {
    if (typeof str === 'undefined') return false
    return str.toLowerCase() === 'false' ? false : true
  }
  if (!bool(process.env.VITE_DEV_SERVER_USE_HTTPS)) return undefined
  return mkcert()
}

export default async ({ mode }: { mode: string }): Promise<UserConfigExport> => {
  process.env = { ...process.env, ...loadEnv(mode, `${process.cwd()}/src`) }
  return {
    plugins: [solidPlugin(), eslint(), mkCert()],
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      target: 'es2017',
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
  }
}
