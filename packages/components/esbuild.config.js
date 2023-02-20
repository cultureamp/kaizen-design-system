// @ts-nocheck
/* eslint-disable @typescript-eslint/explicit-function-return-type */
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

const SCSSModulesLoader = { ".scss": "copy" }
const CSSPlugins = [
  ...tailwindPlugins,
  ScssModulesPlugin({
    inject: false,
    cssCallback: css => {
      writeFileSync(join(dist, "scss-components.css"), css)
    },
  }),
]

// ===== ESM ===== //

const ESMBuild = (() => {
  ;(async () => {
    const entryPoints = await glob("./src/**/*.ts")

    const ESMConfig = {
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
    }

    await esbuild
      .build({
        ...ESMConfig,
        // Handle SCSS Modules:
        loader: { ...SCSSModulesLoader },
      })
      .catch(() => process.exit(1))

    await esbuild
      .build({
        ...ESMConfig,
        // Handle CSS Processing:
        plugins: [...CSSPlugins],
      })
      .catch(() => process.exit(1))
  })()

  // Create entry files
  writeFileSync(join(dist, "index.js"), "export * from './esm/index.js';")
  writeFileSync(join(dist, "future.js"), "export * from './esm/future.js';")
})()

// -----

// ===== CJS ===== //

const CJSBuild = (() => {
  const CJSConfig = {
    entryPoints: ["src/index.ts", "src/future.ts"],
    outdir: "dist/cjs",
    bundle: true,
    sourcemap: true,
    minify: true,
    platform: "node",
    target: ["node16"],
    external: ["react", "react-dom"],
  }

  esbuild
    .build({
      ...CJSConfig,
      // Handle SCSS Modules:
      loader: { ...SCSSModulesLoader },
    })
    .catch(() => process.exit(1))
  esbuild
    .build({
      ...CJSConfig,
      // Handle CSS Processing:
      plugins: [...CSSPlugins],
    })
    .catch(() => process.exit(1))

  // Create entry files
  writeFileSync(
    join(dist, "index.cjs.js"),
    "module.exports = require('./cjs/index.cjs.js');"
  )
  writeFileSync(
    join(dist, "future.cjs.js"),
    "module.exports = require('./cjs/future.cjs.js');"
  )
})()

// -----

// ===== TAILWIND ===== //
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
