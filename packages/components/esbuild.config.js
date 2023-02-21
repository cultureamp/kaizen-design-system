// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
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

const commonLoaders = { ".scss": "copy", ".svg": "copy" }
const commonPlugins = [...tailwindPlugins]

// esm output bundles with code splitting

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

// Tailwind build
esbuild
  .build({
    entryPoints: ["./src/styles.css"],
    outfile: "./dist/styles.css",
    minify: true,
    bundle: true,
    plugins: tailwindPlugins,
  })
  .catch(e => {
    process.exit()
  })
;(async () => {
  const entryPoints = await glob("./node_modules/@kaizen/**/*.scss")
  await esbuild
    .build({
      entryPoints,
      outfile: "./dist/variables.scss",
      minify: true,
      bundle: true,
      loader: { ".scss": "copy" },
    })
    .catch(e => {
      process.exit()
    })
})()
