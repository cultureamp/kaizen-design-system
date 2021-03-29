/* eslint-disable no-console */
import fs from "fs"
import { sync as globSync } from "glob"
import webpack from "webpack"
import yargs from "yargs"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import prettier from "prettier"

const { files } = yargs.option("files", {
  demandOption: true,
  description:
    "A glob of SASS files you want to use as the source of the snapshot.\nE.g. ./**/!(node_modules)/*.{scss,css,sass}' ",
  type: "string",
}).argv

const rules = [
  {
    test: /\.s?(a|c)ss$/,
    use: [
      {
        loader: "style-loader",
      },
      { loader: MiniCssExtractPlugin.loader },
      {
        loader: "css-loader",
        options: {
          importLoaders: 2,
          sourceMap: false,
          modules: {
            localIdentName: "[path][name]__[local]--[hash:base64:5]",
          },
        },
      },
      {
        loader: "postcss-loader",
        options: {
          plugins: () => [
            require("postcss-css-variables"),
            require("postcss-minify-font-values")({
              removeQuotes: true,
              removeDuplicates: false,
            }),
            require("postcss-discard-comments")({ removeAll: true }),
            require("postcss-merge-rules"),
          ],
        },
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: false,
        },
      },
    ],
  },
]

const snapshotCssFileName = "snapshot.css"
const run = async () => {
  const filePaths = globSync(files).filter(name => /\.s?(c|a)ss/.test(name))
  if (!filePaths.length) {
    throw Error("No CSS/SCSS files found from your input glob")
  }
  console.log(`Creating a snapshot of ${filePaths.length} files`)
  webpack({
    entry: filePaths,
    mode: "development",
    module: { rules },
    devtool: false,
    plugins: [new MiniCssExtractPlugin({ filename: "snapshot.css" })],
    output: {
      path: __dirname,
      filename: "snapshot-tmp.js",
    },
  }).run((err, stats) => {
    fs.rmSync("snapshot-tmp.js")
    if (!err) {
      console.log("............\n......." + stats.toString().slice(-4000))
      console.log("Formatting the snapshot file")
      fs.writeFileSync(
        snapshotCssFileName,
        prettier.format(fs.readFileSync(snapshotCssFileName).toString(), {
          parser: "css",
        })
      )
    } else {
      console.error(err.message)
    }
  })
}

run()
