![EXDeck](https://user-images.githubusercontent.com/66313777/128413639-b654dffb-e0e7-497a-b376-2c6eb4da5998.gif)

# EXDeck (birdseye-frontend)

軽量なマルチカラムな Twitter クライアントの [SolidJS](https://www.solidjs.com) 製フロントエンド

[birdseye-deno](https://github.com/MarinDeck/birdseye-deno) と合わせて使用してください

[EXDeck.jp](https://exdeck.jp)

## 必要要件

- Node.js version manager ([fnm](https://fnm.vercel.app/)を推奨)
- [Node.js](https://nodejs.org) (17.9.0)
- [PNpm](https://pnpm.io)

## インストール

以下のコマンドを実行します。

```sh
git clone https://github.com/MarinDeck/birdseye-frontend.git
cd birdseye-frontend
pnpm i
```

## 開発用サーバーの起動方法

src/.env.development.local ファイルを作成し、開発時に通信を行うバックエンドの URL を指定してください。(記入例は src/.env.development.example を参照してください。)

その後、以下のコマンドを実行します。

```sh
pnpm dev # or pnpm start
```

## 開発用サーバーの起動方法(HTTPS)

**開発用サーバーの起動方法** の手順をすべて行った上で、src/.env.development.local に Https での実行フラグと開発時に通信を行うバックエンドの URL を指定してください。(記入例は src/.env.development.example を参照してください。)

その後、以下のコマンドを実行します。

```sh
pnpm dev # or pnpm start
```

## ビルド

src/.env.production.local ファイルを作成し、通信を行うバックエンドの URL を指定してください。(記入例は src/.env.production.example を参照してください。)

その後、以下のコマンドを実行します。

```sh
pnpm build
```

## ビルド(HTTPS)

**ビルド** の手順をすべて行った上で、src/.env.production.local に Https での実行フラグと通信を行うバックエンドの URL を指定してください。(記入例は src/.env.production.example を参照してください。)

その後、以下のコマンドを実行します。

```sh
pnpm build
```
