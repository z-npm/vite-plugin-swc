[**@o.z/vite-plugin-swc API**](../README.md)

***

# Function: swc()

> **swc**(`options?`): `Plugin`

Defined in: [src/lib/index.ts:42](https://github.com/z-npm/vite-plugin-swc/blob/30ba13fa149e33dc1c20673fad835f42bfe82182/src/lib/index.ts#L42)

Vite plugin that transforms TypeScript and JavaScript files using SWC.
It disables Vite's default esbuild transform to let SWC handle the compilation,
resulting in significantly faster builds, especially for large codebases.

## Parameters

### options?

[`Options`](../interfaces/Options.md) = `{}`

Configuration options for the plugin and SWC.

## Returns

`Plugin`

A Vite plugin instance.

## Example

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import swc from '@o.z/vite-plugin-swc'

export default defineConfig({
  plugins: [swc()]
})
```
