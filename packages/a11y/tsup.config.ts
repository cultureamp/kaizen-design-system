/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/**/*.ts"],
  format: ["cjs", "esm"],
  splitting: true,
  dts: true,
  clean: true,
  legacyOutput: true,
  loader: {
    ".scss": "copy",
  },
})
