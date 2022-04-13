// Call the pre-build script -- used for validation, setup, etc.
import "../pre-build"
import { resolve } from "path"
import { RuleSetUseItem, RuleSetRule } from "webpack"

const isEnabled = require("./isEnabled")

export const babel: RuleSetRule = {
  test: /\.(j|t)sx?$/,
  loader: require.resolve("babel-loader"),
  options: require("../../.babelrc.json"),
}

export const stylePreprocessors: RuleSetUseItem[] = [
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

export const styles: RuleSetRule = {
  test: /\.s?css$/,
  use: [
    {
      loader: "style-loader",
    },
    {
      loader: "css-loader",
      options: {
        importLoaders: stylePreprocessors.length,
        sourceMap: true,
        modules: {
          localIdentName: "[folder]-[name]__[local]--[hash:base64:5]",
        },
      },
    },
    ...stylePreprocessors,
  ],
}

export const svgs: RuleSetRule = {
  test: /\.svg$/,
  use: [
    {
      loader: "svg-sprite-loader",
      options: {
        symbolId: "ca-icon-[name]",
      },
    },
  ],
}

export const svgIcons: RuleSetRule = {
  test: /\.icon\.svg$/,
  use: {
    loader: "svgo-loader",
    options: {
      plugins: [
        { removeTitle: true },
        {
          convertColors: {
            currentColor: /black|#000|#000000/,
          },
        },
      ],
    },
  },
}

export const removeSvgFromTest = (
  rule: RuleSetRule | "..."
): RuleSetRule | "..." => {
  if (rule !== "..." && rule.test && rule.test.toString().includes("svg")) {
    const test = rule.test.toString().replace("svg|", "").replace(/\//g, "")
    return { ...rule, test: new RegExp(test) } as RuleSetRule
  }
  return rule
}

export const excludeExternalModules = (rule: RuleSetRule): RuleSetRule => ({
  exclude: /node_modules\/(?!(\@kaizen|\@cultureamp)).*/,
  ...rule,
})
