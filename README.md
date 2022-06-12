![EXDeck](https://user-images.githubusercontent.com/66313777/128413639-b654dffb-e0e7-497a-b376-2c6eb4da5998.gif)

# EXDeck (birdseye-frontend)

A lightweight multi-column Twitter client frontend made with [Solid](https://www.solidjs.com)

[EXDeck.jp](https://exdeck.jp)

Use with [birdseye-deno](https://github.com/MarinDeck/birdseye-deno).

## Requirement

- Node.js version manager (Recommend using [fnm](https://fnm.vercel.app/)
- [Node.js](https://nodejs.org) (17.9.0)
- [PNpm](https://pnpm.io)

## Installation

<!-- 以下のコマンドを実行します。 -->

Execute the following command.

```sh
git clone https://github.com/MarinDeck/birdseye-frontend.git
cd birdseye-frontend
pnpm i
```

## Start development server

<!-- src/.env.development.localファイルを作成し、開発時に通信を行うバックエンドのURLを指定してください。(記入例はsrc/.env.development.exampleを参照してください。) -->

Create a `src/.env.development.local` file and specify the URL of the backend with which you want to communicate during development. (See `src/.env.development.example` for an example.)

<!-- その後、以下のコマンドを実行します。 -->

Then execute the following command.

```sh
pnpm dev # or pnpm start
```

## Start development server in https

<!-- Start development serverの手順をすべて行った上で、src/.env.development.localにHttpsでの実行フラグと開発時に通信を行うバックエンドのURLを指定してください。(記入例はsrc/.env.development.exampleを参照してください。)  -->

After completing all the steps of **Start development server**, specify the execution flag in Https and the URL of the backend to communicate during development in `src/.env.development.local`. (See `src/.env.development.example` for an example.)

<!-- その後、以下のコマンドを実行します。 -->

Then execute the following command.

```sh
pnpm dev # or pnpm start
```

## Build

<!-- src/.env.production.localファイルを作成し、通信を行うバックエンドのURLを指定してください。(記入例はsrc/.env.production.exampleを参照してください。) -->

Create a `src/.env.production.local` file and specify the URL of the backend to communicate with. (See `src/.env.production.example` for an example.)

<!-- その後、以下のコマンドを実行します。 -->

Then execute the following command.

```sh
pnpm build
```

## Build https

<!-- Buildの手順をすべて行った上で、src/.env.production.localにHttpsでの実行フラグと通信を行うバックエンドのURLを指定してください。(記入例はsrc/.env.production.exampleを参照してください。)  -->

After completing all the **Build** steps, specify the execution flag in Https and the URL of the backend to communicate with in `src/.env.production.local`. (See `src/.env.production.example` for an example.)

<!-- その後、以下のコマンドを実行します。 -->

Then execute the following command.

```sh
pnpm build
```
