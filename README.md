# @o.z/vite-plugin-swc
[![npm](https://img.shields.io/npm/v/@o.z/vite-plugin-swc)](https://www.npmjs.com/package/@o.z/vite-plugin-swc) [![license](https://img.shields.io/npm/l/@o.z/vite-plugin-swc)](https://www.npmjs.com/package/@o.z/vite-plugin-swc)

A [Vite](https://vitejs.dev/) plugin that transforms TypeScript and JavaScript source files using [SWC](https://swc.rs) during the build process. SWC is a super-fast Rust-based compiler that significantly accelerates your build times compared to traditional Babel or tsc compilation.


## ✨ Features
- ⚡ Blazing Fast: Leverages SWC's Rust-based compilation for faster builds

- 🔧 Flexible Configuration: Supports both inline options and .swcrc configuration files

- 🎯 TypeScript First: Excellent TypeScript support with decorators and metadata

- 🔌 Seamless Integration: Works out of the box with Vite's build pipeline

- 🛠 Modern JavaScript: Supports latest ECMAScript features including top-level await

## 📦 Installation

yarn
```bash
yarn add @o.z/vite-plugin-swc --dev
```

pnpm
```bash
pnpm add @o.z/vite-plugin-swc --save-dev
```

npm
```bash
npm install @o.z/vite-plugin-swc --save-dev
```


## 🚀 Basic Usage
Add the plugin to your Vite configuration:

```ts
// vite.config.ts
import { defineConfig } from "vite";
import swc from "@o.z/vite-plugin-swc";

export default defineConfig({
  plugins: [swc()],
});
```


## ⚙️ Configuration
### Default Configuration
When no options are provided, the plugin uses the following defaults:

```ts 
{
  include: /\.(ts|tsx|js|jsx)$/,
  exclude: "node_modules",
  swcrc: false,
  configFile: false,
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

This configuration provides:

- TypeScript support with modern decorators (Stage 3)

- Decorator metadata transformation

- Minification enabled by default

- Top-level await support


### Custom Configuration
You can override any of the default options:
```ts 
// vite.config.ts
import { defineConfig } from "vite";
import swc from "@o.z/vite-plugin-swc";

export default defineConfig({
  plugins: [
    swc({
      include: /\.(ts|tsx|js|jsx)?$/,
      exclude: /node_modules/,
      minify: process.env.NODE_ENV === "production",
      jsc: {
        parser: {
          syntax: "typescript",
          tsx: true,
          decorators: true,
        },
        transform: {
          react: {
            runtime: "automatic",
          },
          decoratorMetadata: true,
          decoratorVersion: "2022-03",
        },
      },
    }),
  ],
});
```

### Using .swcrc Configuration File
If you prefer to use a configuration file, set swcrc and configFile to true:

```ts 
// vite.config.ts
import { defineConfig } from "vite";
import swc from "@o.z/vite-plugin-swc";

export default defineConfig({
  plugins: [
    swc({
      include: /\.ts?$/,
      swcrc: true,
      configFile: true,
    }),
  ],
});
```

Then create a .swcrc file in your project root:

```json
{
  "$schema": "https://json.schemastore.org/swcrc",
  "exclude": "node_modules",
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "decorators": true,
      "dynamicImport": true
    },
    "transform": {
      "decoratorMetadata": true,
      "decoratorVersion": "2022-03"
    },
    "target": "es2022",
    "loose": false,
    "externalHelpers": false
  },
  "minify": true
}
```

## 🎯 Use Cases
### 1. Faster TypeScript Builds
Replace tsc with SWC for significantly faster TypeScript compilation during production builds.

### 2. Modern Decorator Support
Use the latest decorator syntax (Stage 3) with metadata reflection.

### 3. Library Development
Build libraries with optimized output and modern JavaScript features.

### 4. Large Projects
Speed up build times in large codebases where traditional TypeScript compilation becomes a bottleneck.

## 🔄 Migration from vite-plugin-swc-transform
This plugin is a fork of [vite-plugin-swc-transform](https://github.com/ziir/vite-plugin-swc-transform). The migration is straightforward:

1. Install the new package:
```bash
npm uninstall vite-plugin-swc-transform

npm install @o.z/vite-plugin-swc --save-dev
```

2. Update your Vite config import:
```diff
- import swc from "vite-plugin-swc-transform"
+ import swc from "@o.z/vite-plugin-swc"
```

3. Enjoy improved performance and additional features!

## 🤝 Acknowledgements
This project is a fork of [vite-plugin-swc-transform](https://github.com/ziir/vite-plugin-swc-transform). Special thanks to [Timothée “Tim” Pillard](https://github.com/ziir) for the original implementation and great work.

## 📚 Additional Resources
[SWC Documentation](https://swc.rs/docs)

[Vite Plugin Development Guide](https://vitejs.dev/guide/api-plugin.html)

[TypeScript Decorators Proposal](https://github.com/tc39/proposal-decorators)

[SWC Configuration Schema](https://swc.rs/docs/configuration/swcrc)

## 📚 Dev API Reference
[Dev API Docs](docs/api/README.md)

## 🐛 Issues and Contributions
Found a bug or have a feature request? Please open an issue on [GitHub](https://github.com/z-npm/vite-plugin-swc/issues).

Contributions are welcome! Please feel free to submit a Pull Request.
