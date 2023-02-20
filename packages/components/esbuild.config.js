// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
import { existsSync, mkdirSync, writeFileSync } from "fs"
import { join } from "path"
import postCssPlugin from "@deanc/esbuild-plugin-postcss"
import autoprefixer from "autoprefixer"
import esbuild from "esbuild"
import { ScssModulesPlugin } from "esbuild-scss-modules-plugin"
import tailwindcss from "tailwindcss"
import glob from "tiny-glob"

const dist = join(process.cwd(), "dist")

if (!existsSync(dist)) {
  mkdirSync(dist)
}

const tailwindPlugins = [
  postCssPlugin({
    plugins: [tailwindcss, autoprefixer],
  }),
]

// const commonLoaders = { ".scss": "copy" }
const commonLoaders = {}
const commonPlugins = [
  ...tailwindPlugins,
  ScssModulesPlugin({
    inject: false,
    minify: true,
    cssCallback: css => {
      writeFileSync(join(dist, "scss-components.css"), css)
    },
  }),
]

// esm output bundles with code splitting
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
;(async () => {
  const entryPoints = await glob("./src/**/*.ts")
  await esbuild
    .build({
      entryPoints,
      outdir: "dist/esm",
      bundle: true,
      sourcemap: true,
      minify: true,
      splitting: true,
      format: "esm",
      define: { global: "window" },
      target: ["esnext"],
      external: ["react", "react-dom"],
      loader: { ...commonLoaders },
      plugins: [...commonPlugins],
    })
    .catch(() => process.exit(1))
})()

// cjs output bundle
esbuild
  .build({
    entryPoints: ["src/index.ts", "src/future.ts"],
    outdir: "dist/cjs",
    bundle: true,
    sourcemap: true,
    minify: true,
    platform: "node",
    target: ["node16"],
    external: ["react", "react-dom"],
    loader: { ...commonLoaders },
    plugins: [...commonPlugins],
  })
  .catch(() => process.exit(1))

// an entry file for cjs at the root of the bundle
writeFileSync(join(dist, "index.js"), "export * from './esm/index.js';")
writeFileSync(join(dist, "future.js"), "export * from './esm/future.js';")

// an entry file for esm at the root of the bundle
writeFileSync(
  join(dist, "index.cjs.js"),
  "module.exports = require('./cjs/index.cjs.js');"
)
writeFileSync(
  join(dist, "future.cjs.js"),
  "module.exports = require('./cjs/future.cjs.js');"
)

// Tailwind build
esbuild
  .build({
    entryPoints: ["./src/tailwind.css"],
    outfile: "./dist/tailwind.css",
    minify: true,
    bundle: true,
    plugins: tailwindPlugins,
  })
  .catch(e => {
    process.exit()
  })
