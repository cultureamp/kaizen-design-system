// tslint:disable:no-implicit-dependencies
import { Loader, RuleSetRule } from "webpack"

export const extensions = [".ts", ".tsx"]

const excludeExternalModules = (rule: RuleSetRule): RuleSetRule => ({
  exclude: /node_modules\/(?!\@kaizen).*/,
  ...rule,
})

export const babelLoaderOptions = {
  presets: ["@babel/preset-typescript", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
  ],
}

const babelRule: RuleSetRule = {
  test: /\.(j|t)sx?$/,
  use: [
    {
      loader: require.resolve("babel-loader"),
      options: babelLoaderOptions,
    },
  ],
}

const imagesRule: RuleSetRule = {
  test: [/\.jpe?g$/, /\.png$/],
  loader: "file-loader",
  options: {
    name: "[name].[hash:8].[ext]",
  },
}

const preprocessorLoaders: Loader[] = [
  {
    loader: "postcss-loader",
    options: {
      ident: "postcss",
      plugins: () => [
        require("postcss-flexbugs-fixes"),
        require("postcss-preset-env")({
          autoprefixer: { flexbox: "no-2009" },
          stage: 3,
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
]

const stylesRule: RuleSetRule = {
  test: /\.(sass|scss|css)$/,
  use: [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        importLoaders: preprocessorLoaders.length,
        sourceMap: true,
        modules: {
          localIdentName: "[folder]-[name]__[local]--[hash:base64:5]",
        },
      },
    },
    ...preprocessorLoaders,
  ],
}

export const rules: RuleSetRule[] = [babelRule, stylesRule, imagesRule].map(
  excludeExternalModules
)
