// Call the pre-build script -- used for validation, setup, etc.
import "../pre-build"
import postcssPresetEnv from "postcss-preset-env"
import { RuleSetUseItem, RuleSetRule } from "webpack"
import { browsersList } from "./browserslist"

export const babel: RuleSetRule = {
  test: /\.(j|t)sx?$/,
  loader: require.resolve("babel-loader"),
  options: require("../../.babelrc.json"),
}

export const stylePreprocessors: RuleSetUseItem[] = [
  {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [
          require("postcss-flexbugs-fixes"),
          require("postcss-import"),
          require("tailwindcss/nesting"),
          require("tailwindcss"),
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
