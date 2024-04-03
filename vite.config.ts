import { defineConfig } from "vite"
import { swc } from "./lib"
import dts from "vite-plugin-dts"
import path from "path"
import { URL } from "url"

// const __filename = new URL("", import.meta.url).pathname
const __dirname = new URL(".", import.meta.url).pathname

export default defineConfig({
  build: {
    lib: {
      name: "@z-code/vite-plugin-swc",
      entry: [path.resolve(__dirname, "./lib/index.ts")],
      fileName: (format, name) => {
        if (format === "es") return `${name}.js`
        else return `${name}.${format}`
      },
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: ["vite", "@swc/core"],
    },
  },
  plugins: [
    swc(),
    dts({
      // include: ["lib/**"],
      // exclude: ["src/**"],
      rollupTypes: true,
    }),
  ],
})
