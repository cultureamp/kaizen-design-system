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

const CSSPlugins = [
  ...tailwindPlugins,
  ScssModulesPlugin({
    inject: false,
    cssCallback: css => {
      writeFileSync(join(dist, "imported-components.css"), css)
    },
  }),
]

// ===== ESM ===== //
;(async () => {
  const entryPoints = await glob("./dist/esm/**/index.js")

  await esbuild
    .build({
      entryPoints,
      outdir: "dist/esm",
      allowOverwrite: true,
      plugins: [...CSSPlugins],
    })
    .catch(() => process.exit(1))
})()

// -----

// ===== CJS ===== //
esbuild
  .build({
    entryPoints: ["dist/cjs/index.js"],
    outdir: "dist/cjs",
    allowOverwrite: true,
    plugins: [...CSSPlugins],
  })
  .catch(() => process.exit(1))

// -----
