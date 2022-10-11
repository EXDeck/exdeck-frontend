![EXDeck](https://user-images.githubusercontent.com/66313777/128413639-b654dffb-e0e7-497a-b376-2c6eb4da5998.gif)

# Frontend for EXDeck

[EXDeck](https://exdeck.jp/)は、軽量なマルチカラムの Twitter クライアントです。

## 関連リポジトリ

- フロントエンド [exdeck-frontend](https://github.com/EXDeck/exdeck-frontend) (このリポジトリ)
- バックエンド [exdeck-backend](https://github.com/EXDeck/exdeck-backend)

## 必要要件

- Node.js Version Manager ([fnm](https://fnm.vercel.app/)を推奨)
- [Node.js](https://nodejs.org/) LTS
- [pnpm](https://pnpm.io/)

## 使い方

### 開発用サーバーの起動

`src/.env.development.local`ファイルを作成します。

バックエンドと HTTPS 通信をする場合は、`VITE_BACKEND_USE_HTTPS`(バックエンドとの HTTPS 通信の使用フラグ)を true にし、`VITE_BACKEND_URL_HTTPS`(開発時に HTTPS 通信を行うバックエンドの URL) を指定します。
バックエンドと HTTP 通信をする場合は、`VITE_BACKEND_USE_HTTPS`(バックエンドとの HTTPS 通信の使用フラグ)を false にし、`VITE_BACKEND_URL_HTTP`(開発時に HTTP 通信を行うバックエンドの URL) を指定します。
また、開発環境で HTTPS 通信を使用する場合は`VITE_DEV_SERVER_USE_HTTPS`(開発環境での HTTPS 通信の使用フラグ)を true にします。

記入例は`src/.env.development.example`を参照してください。

その後、以下のコマンドを実行します。

```sh
pnpm dev
```

### 本番環境のビルド

`src/.env.production.local`ファイルを作成します。

バックエンドと HTTPS 通信をする場合は、`VITE_BACKEND_USE_HTTPS`(バックエンドとの HTTPS 通信の使用フラグ)を true にし、`VITE_BACKEND_URL_HTTPS`(開発時に HTTPS 通信を行うバックエンドの URL) を指定します。
バックエンドと HTTP 通信をする場合は、`VITE_BACKEND_USE_HTTPS`(バックエンドとの HTTPS 通信の使用フラグ)を false にし、`VITE_BACKEND_URL_HTTP`(開発時に HTTP 通信を行うバックエンドの URL) を指定します。

記入例は`src/.env.production.example`を参照してください。

その後、以下のコマンドを実行します。

```sh
pnpm build
```

## ライセンス

Copyright (c) 2022 EXDeck <https://github.com/EXDeck>

このソフトウェアは、[Apache License, Version 2.0](./LICENSE)に基づき配布しています。
