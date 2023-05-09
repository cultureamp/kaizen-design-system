// Call the pre-build script -- used for validation, setup, etc.
import "../pre-build"
import { RuleSetRule } from "webpack"
import babelConfig from "../../.babelrc.json"

export const babel: RuleSetRule = {
  test: /\.(j|t)sx?$/,
  loader: require.resolve("babel-loader"),
  options: babelConfig,
}

export const styles: RuleSetRule = {
  test: /\.css$/i,
  use: [
    {
      loader: "style-loader",
    },
    {
      loader: "css-loader",
      options: {
        importLoaders: 2,
        sourceMap: true,
        modules: {
          localIdentName: "[folder]-[name]__[local]--[hash:base64:5]",
        },
      },
    },
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
        {
          name: "removeTitle",
          active: true,
        },
        {
          name: "convertColors",
          params: {
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
