![EXDeck](https://user-images.githubusercontent.com/66313777/128413639-b654dffb-e0e7-497a-b376-2c6eb4da5998.gif)

# Frontend for EXDeck

[EXDeck](https://exdeck.jp/)は、軽量なマルチカラムのTwitterクライアントです。

## 関連リポジトリ

- フロントエンド [birdseye-frontend](https://github.com/MarinDeck/birdseye-frontend) (このリポジトリ)
- バックエンド [birdseye-backend](https://github.com/MarinDeck/birdseye-backend)

## 必要要件

- Node.js Version Manager ([fnm](https://fnm.vercel.app/)を推奨)
- [Node.js](https://nodejs.org/) v17.9.0
- [pnpm](https://pnpm.io/)

## インストール

以下のコマンドを実行します。

```sh
git clone https://github.com/MarinDeck/birdseye-frontend.git
cd birdseye-frontend
pnpm i
```

## 使い方

### 開発用サーバーの起動

`src/.env.development.local` ファイルを作成します。

**HTTPS通信をする場合**は、`VITE_API_HTTPS`(HTTPS通信の実行フラグ) を `true` にし、`VITE_API_URL_HTTPS`(開発時にHTTPS通信を行うバックエンドのURL) を指定します。

**HTTP通信をする場合**は、`VITE_API_HTTPS`(HTTPS通信の実行フラグ) を `false` にし、`VITE_API_URL`(開発時にHTTP通信を行うバックエンドのURL) を指定します。

記入例は `src/.env.development.example` を参照してください。

その後、以下のコマンドを実行します。

```sh
pnpm dev
```

### ビルド

`src/.env.production.local` ファイルを作成します。

**HTTPS通信をする場合**は、`VITE_API_HTTPS`(HTTPS通信の実行フラグ) を `true` にし、`VITE_API_URL_HTTPS`(HTTPS通信を行うバックエンドのURL) を指定します。

**HTTP通信をする場合**は、`VITE_API_HTTPS`(HTTPS通信の実行フラグ) を `false` にし、`VITE_API_URL`(HTTP通信を行うバックエンドのURL) を指定します。

記入例は `src/.env.production.example` を参照してください。

その後、以下のコマンドを実行します。

```sh
pnpm build
```

## ライセンス

Copyright (c) 2022 EXDeck <https://github.com/MarinDeck>

このソフトウェアは、[MIT License](./LICENSE)に基づき配布しています。
