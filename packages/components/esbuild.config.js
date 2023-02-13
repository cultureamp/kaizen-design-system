// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
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
  })
  .catch(e => {
    process.exit()
  })
