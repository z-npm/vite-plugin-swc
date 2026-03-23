import { Plugin } from "vite"
import { FilterPattern, createFilter } from "@rollup/pluginutils"
import { transform as SWCTransform, Options as SWCOption } from "@swc/core"

/**
 * Options for the Vite SWC plugin.
 * Extends SWC's transformation options, omitting `filename`, `sourceFileName` and `exclude`
 */
export interface Options extends Omit<
  SWCOption,
  "filename" | "sourceFileName" | "exclude"
> {
  /**
   * A picomatch pattern, or array of patterns, which specifies the files to include.
   * @default /\.(ts|tsx|js|jsx)$/
   */
  include?: FilterPattern

  /**
   * A picomatch pattern, or array of patterns, which specifies the files to exclude.
   * @default "node_modules"
   */
  exclude?: FilterPattern
}

/**
 * Vite plugin that transforms TypeScript and JavaScript files using SWC.
 * It disables Vite's default esbuild transform to let SWC handle the compilation,
 * resulting in significantly faster builds, especially for large codebases.
 *
 * @example
 * ```ts
 * // vite.config.ts
 * import { defineConfig } from 'vite'
 * import swc from '@o.z/vite-plugin-swc'
 *
 * export default defineConfig({
 *   plugins: [swc()]
 * })
 * ```
 *
 * @param options - Configuration options for the plugin and SWC.
 * @returns A Vite plugin instance.
 */
export const swc = (
  options: Options = {
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
  },
): Plugin => {
  // Default include/exclude patterns – now covering .ts, .tsx, .js, .jsx
  const {
    include = /\.(ts|tsx|js|jsx)$/,
    exclude = "node_modules",
    ...swcOptions
  } = options

  const filter = createFilter(include, exclude)

  return {
    name: "vite-plugin-swc",
    enforce: "pre", // Run before other JS transforms

    config() {
      return {
        oxc: false,
        esbuild: false, // Disable esbuild, we'll use SWC instead
      }
    },

    async transform(code: string, id: string) {
      if (!filter(id)) return null

      try {
        // Determine if source maps should be generated based on Vite's config
        // `this.environment.config` is available inside the transform hook
        const sourceMaps =
          this.environment.config.command === "build"
            ? !!this.environment.config.build.sourcemap
            : !!this.environment.config.css?.devSourcemap // For dev, you might want to align with css sourcemaps or a dedicated flag

        const result = await SWCTransform(code, {
          filename: id,
          sourceFileName: id.split("?", 1)[0],
          sourceMaps, // Pass the derived source map setting
          ...swcOptions,
        })

        // SWC returns { code, map } when sourceMaps are enabled, otherwise just { code }
        return {
          code: result.code,
          map: result.map,
        }
      } catch (error: any) {
        // Enhance error message with file information and re-throw as a plugin error
        this.error(`SWC transform failed in ${id}: ${error?.message || error}`)
      }
    },
  }
}

export default swc
