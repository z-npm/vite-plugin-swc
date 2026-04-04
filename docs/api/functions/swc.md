[**@o.z/vite-plugin-swc API**](../README.md)

***

# Function: swc()

> **swc**(`options?`): `Plugin`

Defined in: [src/lib/index.ts:45](https://github.com/z-npm/vite-plugin-swc/blob/591e49fb74c9079f493dcc5cbf75990db0ece68e/src/lib/index.ts#L45)

Vite plugin that transforms TypeScript and JavaScript files using SWC.
It disables Vite's default esbuild transform to let SWC handle the compilation,
resulting in significantly faster builds, especially for large codebases.

## Parameters

### options?

[`Options`](../interfaces/Options.md) = `...`

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
