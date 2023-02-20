// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
<<<<<<< HEAD
const postCssPlugin = require("@deanc/esbuild-plugin-postcss")
const esbuild = require("esbuild")
const cssModulesPlugin = require("esbuild-css-modules-plugin")
const { sassPlugin } = require("esbuild-sass-plugin")
const { ScssModulesPlugin } = require("esbuild-scss-modules-plugin")

esbuild
  .build({
    entryPoints: ["./src/index.ts", "./src/future.ts"],
    outdir: "./dist",
    // minify: true,
    bundle: true,
    loader: { ".js": "jsx" },
    jsx: "automatic",
    format: "cjs",
    external: ["react", "react-dom"],
    plugins: [
      // cssModulesPlugin({
      //   localsConvention: "dashes",
      // }),
      // ScssModulesPlugin({
      //   inject: false,
      //   localsConvention: "dashes",
      // }),
      sassPlugin(),
    ],
  })
  .catch(e => {
    process.exit()
  })

esbuild
  .build({
    entryPoints: ["./src/tailwind.css"],
    outfile: "./dist/styles.css",
    // minify: true,
    bundle: true,
    plugins: [
      postCssPlugin({
        plugins: [require("tailwindcss"), require("autoprefixer")],
      }),
    ],
=======
import { existsSync, mkdirSync, writeFileSync } from "fs"
import { join } from "path"
import postCssPlugin from "@deanc/esbuild-plugin-postcss"
import autoprefixer from "autoprefixer"
import esbuild from "esbuild"
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

const commonLoaders = { ".scss": "copy" }
const commonPlugins = [...tailwindPlugins]

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
    entryPoints: ["./src/styles.css"],
    outfile: "./dist/styles.css",
    minify: true,
    bundle: true,
    plugins: tailwindPlugins,
>>>>>>> main
  })
  .catch(e => {
    process.exit()
  })
