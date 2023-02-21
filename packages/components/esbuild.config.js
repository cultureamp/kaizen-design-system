// @ts-nocheck
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-extraneous-dependencies */
import { existsSync, mkdirSync, writeFileSync } from "fs"
import { join } from "path"
import postCssPlugin from "@deanc/esbuild-plugin-postcss"
import autoprefixer from "autoprefixer"
import esbuild from "esbuild"
import { sassPlugin, postcssModules } from "esbuild-sass-plugin"
import postcss from "postcss"
import tailwindcss from "tailwindcss"
import glob from "tiny-glob"

const dist = join(process.cwd(), "dist")

if (!existsSync(dist)) {
  mkdirSync(dist)
}

const tailwindPlugins = [tailwindcss, autoprefixer]

const SCSSModulesLoader = { ".scss": "copy" }
const commonLoaders = { ".svg": "copy" }

const SCSSPlugins = [
  sassPlugin({
    cssImports: true,
    transform: postcssModules({ basedir: "./dist" }, tailwindPlugins),
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

    // Why are there double esbuilds?
    // We need to double handle the build files to get the right CSS output for two scenarios.
    // Combining these approaches (both loader and plugin) doesn't seem to work as of writing this file,
    // as I believe the result of the scss files being copied via loaders is then passed into the plugins, which results in the plugins
    // being unable to find the scss files.

    // 1. Copies the SCSS files over to the dist so that SCSS Modules imports work.
    await esbuild
      .build({
        ...ESMConfig,
        // Handle SCSS Modules:
        loader: { ...SCSSModulesLoader, ...commonLoaders },
      })
      .catch(() => process.exit(1))

    // 2. Runs the CSS plugins over the SCSS Modules and converts it into `scss-components.css`
    await esbuild
      .build({
        ...ESMConfig,
        loader: { ...commonLoaders },
        // Handle CSS Processing:
        plugins: [...SCSSPlugins],
      })
      .catch(() => process.exit(1))
  })()
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

  // Why are there double esbuilds?
  // We need to double handle the build files to get the right CSS output for two scenarios.
  // Combining these approaches (both loader and plugin) doesn't seem to work as of writing this file,
  // as I believe the result of the scss files being copied via loaders is then passed into the plugins, which results in the plugins
  // being unable to find the scss files.

  // 1. Copies the SCSS files over to the dist so that SCSS Modules imports work.
  esbuild
    .build({
      ...CJSConfig,
      // Handle SCSS Modules:
      loader: { ...SCSSModulesLoader, ...commonLoaders },
    })
    .catch(() => process.exit(1))

  // 2. Runs the CSS plugins over the SCSS Modules and converts it into `scss-components.css`
  esbuild
    .build({
      ...CJSConfig,
      loader: { ...commonLoaders },
      // Handle CSS Processing:
      plugins: [...SCSSPlugins],
    })
    .catch(() => process.exit(1))
})()

// -----

// ===== TAILWIND ===== //
esbuild
  .build({
    entryPoints: ["./src/tailwind.css"],
    outfile: "./dist/tailwind.css",
    minify: true,
    bundle: true,
    plugins: [
      postCssPlugin({
        plugins: [...tailwindPlugins],
      }),
    ],
  })
  .catch(e => {
    process.exit()
  })
