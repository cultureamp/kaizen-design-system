import postcssFlexbugsFixes from "postcss-flexbugs-fixes"
import postcssImport from "postcss-import"
import postcssPresetEnv from "postcss-preset-env"
import tailwindcss from "tailwindcss"
import { RuleSetUseItem, RuleSetRule } from "webpack"
import babelConfig from "../../.babelrc.json"
import { browsersList } from "./browserslist"

export const babel: RuleSetRule = {
  test: /\.(j|t)sx?$/,
  loader: require.resolve("babel-loader"),
  options: babelConfig,
}

export const stylePreprocessors: RuleSetUseItem[] = [
  {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [
          postcssFlexbugsFixes,
          postcssImport,
          tailwindcss,
          postcssPresetEnv({
            autoprefixer: {
              flexbox: "no-2009",
              grid: "no-autoplace",
            },
            browsers: browsersList,
            stage: 3,
          }),
        ],
      },
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
  test: /(?!(.*tailwind\.s?css))^.*\.s?css/,
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
export const tailwind: RuleSetRule = {
  test: /tailwind\.s?css$/,
  use: [
    {
      loader: "style-loader",
    },
    {
      loader: "css-loader",
      options: {
        importLoaders: stylePreprocessors.length,
        sourceMap: true,
        modules: false,
      },
    },
    ...stylePreprocessors,
  ],
}

export const removeSvgFromTest = (
  rule: undefined | null | false | "" | 0 | RuleSetRule | "..."
): undefined | null | false | "" | 0 | RuleSetRule | "..." => {
  if (
    rule &&
    rule !== "..." &&
    rule.test &&
    rule.test?.toString().includes("svg")
  ) {
    const test = rule.test.toString().replace("svg|", "").replace(/\//g, "")
    return { ...rule, test: new RegExp(test) } as RuleSetRule
  }
  return rule
}

export const excludeExternalModules = (rule: RuleSetRule): RuleSetRule => ({
  exclude: /node_modules\/(?!(\@kaizen|\@cultureamp)).*/,
  ...rule,
})
