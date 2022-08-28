import { ServerOptions } from 'https'
import path from 'path'

import { certificateFor } from 'devcert'
import { loadEnv, UserConfigExport } from 'vite'
import eslint from 'vite-plugin-eslint'
import solidPlugin from 'vite-plugin-solid'

/**
 * Create Cert
 *
 * @returns {Promise<ServerOptions>} 証明書情報
 */
async function createCert(): Promise<ServerOptions> {
  const { key, cert } = await certificateFor('localhost')
  return {
    key,
    cert,
  }
}

export default async ({ mode }: { mode: string }): Promise<UserConfigExport> => {
  process.env = { ...process.env, ...loadEnv(mode, `${process.cwd()}/src`) }
  return {
    plugins: [solidPlugin(), eslint()],
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      target: 'esnext',
    },
    server: {
      host: true,
      https: !process.env.VITE_DEV_SERVER_USE_HTTPS ? false : await createCert(),
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
