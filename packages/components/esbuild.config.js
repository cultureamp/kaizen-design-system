// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
const postCssPlugin = require("@deanc/esbuild-plugin-postcss")
const esbuild = require("esbuild")

esbuild
  .build({
    entryPoints: ["./src/index.ts", "./src/future.ts"],
    outdir: "./dist",
    bundle: true,
    loader: { ".module.scss": "copy" },
  })
  .catch(e => {
    process.exit()
  })

esbuild
  .build({
    entryPoints: ["./src/styles.css"],
    outfile: "./dist/styles.css",
    minify: true,
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
