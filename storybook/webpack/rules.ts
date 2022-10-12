// Call the pre-build script -- used for validation, setup, etc.
import "../pre-build"
import { resolve } from "path"
import { RuleSetUseItem, RuleSetRule } from "webpack"
// import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { browsersList } from "./browserslist"

const isEnabled = require("./isEnabled")

export const babel: RuleSetRule = {
  test: /\.(j|t)sx?$/,
  loader: require.resolve("babel-loader"),
  options: require("../../.babelrc.json"),
}

export const postCssLoader: RuleSetUseItem = {
  loader: require.resolve("postcss-loader"),
  options: {
    postcssOptions: {
      plugins: [
        require("postcss-flexbugs-fixes"),
        [
          require("postcss-preset-env"),
          {
            autoprefixer: {
              flexbox: "no-2009",
              // Enable Autoprefixer grid translations but exclude autoplacement support.
              // See https://github.com/postcss/autoprefixer#options
              // and https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/#no-auto-placement-no-auto-placement-no-auto-placement
              grid: "no-autoplace",
            },
            browsers: browsersList,
            // https://cssdb.org/#staging-process
            stage: 3,
          },
        ],
      ],
    },
  },
}

export const sassLoader: RuleSetUseItem = {
  loader: require.resolve("sass-loader"),
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

export const makeVanillaCssRule = (tailwindRoot: string) =>
  makeStyleRule({
    extensions: new RegExp(
      `(?!(.*${tailwindRoot.replace(".", "\\.")}))^.*(?<!\\.tw)\\.css$`
    ),
    preprocessors: [],
    cssModules: false,
  })

export const makeCssLoader = ({
  numberOfPreprocessors,
  cssModules = true,
}: {
  numberOfPreprocessors: number
  cssModules: boolean
}): RuleSetUseItem => ({
  loader: require.resolve("css-loader"),
  options: {
    importLoaders: numberOfPreprocessors,
    sourceMap: true,
    modules: cssModules
      ? {
          localIdentName: "[folder]-[name]__[local]--[hash:base64:5]",
        }
      : false,
  },
})
// {
//   loader: "style-loader",
// },
// {
//   loader: "css-loader",
//   options: {
//     importLoaders: stylePreprocessors.length,
//     sourceMap: true,
//     modules: {
//       localIdentName: "[folder]-[name]__[local]--[hash:base64:5]",
//     },
//   },
// },
// export const makeCssExtractLoader = (): RuleSetUseItem => ({
//   loader: MiniCssExtractPlugin.loader,
// })

export const makeStyleRule = ({
  extensions,
  preprocessors,
  cssModules,
}: {
  extensions: RuleSetRule["test"]
  preprocessors: RuleSetUseItem[]
  cssModules: boolean
}): RuleSetRule => {
  // const extractLoader = makeCssExtractLoader()

  const cssLoaders = [
    {
      loader: "style-loader",
    },
    makeCssLoader({
      numberOfPreprocessors: preprocessors.length,
      cssModules,
    }),
    ...preprocessors,
  ]

  return {
    test: extensions,
    use: [...cssLoaders],
  }
}

export const tailwindPostCssLoader: RuleSetUseItem = {
  loader: require.resolve("postcss-loader"),
  options: {
    postcssOptions: {
      plugins: [
        require("postcss-flexbugs-fixes"),
        require("postcss-import"),
        require("tailwindcss/nesting"),
        require("tailwindcss"),
        [
          require("postcss-preset-env"),
          {
            autoprefixer: {
              flexbox: "no-2009",
              // Enable Autoprefixer grid translations but exclude autoplacement support.
              // See https://github.com/postcss/autoprefixer#options
              // and https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/#no-auto-placement-no-auto-placement-no-auto-placement
              grid: "no-autoplace",
            },
            // browsers: browsersList,
            // https://cssdb.org/#staging-process
            stage: 3,
          },
        ],
      ],
    },
  },
}

export const makeSassRule = () =>
  makeStyleRule({
    extensions: /\.scss$/,
    preprocessors: [postCssLoader, sassLoader],
    cssModules: true,
  })

export const makeTailwindRule = (tailwindRoot: string) =>
  makeStyleRule({
    extensions: new RegExp(
      `(?!(.*${tailwindRoot.replace(".", "\\.")}))^.*\\.tw\\.css$`
    ),
    preprocessors: [tailwindPostCssLoader],
    cssModules: true,
  })

export const makeTailwindRootRule = (tailwindRoot: string) =>
  makeStyleRule({
    extensions: new RegExp(`^.*${tailwindRoot.replace(".", "\\.")}$`),
    preprocessors: [tailwindPostCssLoader],
    cssModules: false,
  })

export const styles = [
  makeVanillaCssRule("tailwind-root.css"),
  makeSassRule(),
  makeTailwindRootRule("tailwind-root.css"),
  makeTailwindRule("tailwind-root.css"),
]
