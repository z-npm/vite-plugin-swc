# @z-code/vite-plugin-swc [![npm](https://img.shields.io/npm/v/@z-code/vite-plugin-swc)](https://www.npmjs.com/package/@z-code/vite-plugin-swc)

Transform your TypeScript / JavaScript source files with [SWC](https://swc.rs) within your [Vite](https://vitejs.dev/) **build** process.

## Thanks
This Project is a fork of [vite-plugin-swc-transform](https://github.com/ziir/vite-plugin-swc-transform) and thanks a lot for your grate work [Timothée “Tim” Pillard](https://github.com/ziir)


## Install

```sh
yarn add @z-code/vite-plugin-swc --dev
```
or
```sh
npm i @z-code/vite-plugin-swc --save-dev
```

## Usage

### vite.config.ts:
```ts
import { defineConfig } from "vite"
import { swc } from "@z-code/vite-plugin-swc"

export default defineConfig({
  plugins: [swc()],
})
```

The plugin will default to the following options:

_Note:_ This options support **Top Level Await**, **Stage 3 Decorators**
in **Vanilla TypeScript**

```ts
 {
    include: /\.ts?$/,
    exclude: "node_modules",
    minify: true,
    jsc: {
      parser: {
        syntax: "typescript",
        decorators: true,
      },
      transform: {
        decoratorMetadata: true,
        decoratorVersion: "2022-03",
      },
    },
}
```


