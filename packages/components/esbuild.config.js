// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
const esbuild = require("esbuild")
const cssModulesPlugin = require("esbuild-css-modules-plugin")
const { sassPlugin } = require("esbuild-sass-plugin")
const { ScssModulesPlugin } = require("esbuild-scss-modules-plugin")

esbuild
  .build({
    entryPoints: ["./src/index.ts", "./src/future.ts"],
    outdir: "dist",
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
      //   localsConvention: "dashes",
      // }),
      sassPlugin(),
    ],
  })
  .catch(e => {
    process.exit()
  })
