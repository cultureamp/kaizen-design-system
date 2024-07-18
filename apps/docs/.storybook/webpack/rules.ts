import postcssFlexbugsFixes from "postcss-flexbugs-fixes"
import postcssImport from "postcss-import"
import postcssPresetEnv from "postcss-preset-env"
import tailwindcss from "tailwindcss"
import { RuleSetUseItem, RuleSetRule } from "webpack"
import { browsersList } from "./browserslist"

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
          namedExport: false,
          exportLocalsConvention: "as-is",
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

export const excludeExternalModules = (rule: RuleSetRule): RuleSetRule => ({
  exclude: /node_modules\/(?!(\@kaizen|\@cultureamp)).*/,
  ...rule,
})
