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
    "A glob of SASS files you want to use as the source of the snapshot.\nE.g. ./**/!(node_modules|design-tokens/sass)/*.{scss,css,sass}' ",
  type: "string",
}).argv

const rules = [
  {
    test: /\.s?css$/,
    use: [
      {
        loader: "style-loader",
      },
      { loader: MiniCssExtractPlugin.loader },
      {
        loader: "css-loader",
        options: {
          importLoaders: 2,
          sourceMap: true,
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
            // It might be nice to add this at some point, but it only works with Postcss 8, which isn't being used (implicitly/transitively by postcss-loader)
            // require("postcss-calc"),
            require("cssnano")({
              preset: [
                "default",
                {
                  discardComments: {
                    removeAll: true,
                  },
                  mergeIdents: true,
                },
              ],
            }),
          ],
        },
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: true,
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
    plugins: [new MiniCssExtractPlugin({ filename: "snapshot.css" })],
    output: {
      path: __dirname,
      filename: snapshotCssFileName,
    },
  }).run((err, stats) => {
    if (!err) {
      console.log("Formatting the snapshot file")
      fs.writeFileSync(
        snapshotCssFileName,
        prettier.format(fs.readFileSync(snapshotCssFileName).toString(), {
          parser: "scss",
        })
      )
    } else {
      console.error(err.message)
    }
  })
}

run()
