/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "tsup"
import cssModules from "./plugins/esbuild-css-module"

export default defineConfig({
  entry: ["src/**/*.ts"],
  outDir: "./dist",
  format: ["cjs", "esm"],
  splitting: true,
  dts: true,
  clean: true,
  legacyOutput: true,
  silent: true,
  minify: true,
  loader: {
    ".scss": "copy",
  },
  esbuildPlugins: [cssModules],
})
