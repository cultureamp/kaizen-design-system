import { resolve } from "path"
import { Loader, RuleSetRule as Rule } from "webpack"
const isEnabled = require("./isEnabled")

export const babel: Rule = {
  test: /\.(j|t)sx?$/,
  loader: require.resolve("babel-loader"),
  options: require("../package.json").babel,
}

export const stylePreprocessors: Loader[] = [
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

export const styles: Rule = {
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

export const svgs: Rule = {
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

export const svgIcons: Rule = {
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

export const elm: Rule = {
  test: /\.elm$/,
  exclude: [/elm-stuff/, /node_modules/],
  use: [
    {
      loader: "babel-loader",
      options: {
        plugins: [
          "module:elm-css-modules-plugin",
          ["module:babel-elm-assets-plugin", {}, "assets-plugin-generic"],
          [
            "module:babel-elm-assets-plugin",
            {
              // "author/project" is the default value if no "name" field is
              // specified in elm.json. If we want to allow setting the name
              // field in our workspaces, we'll need to update the plugin to
              // support multiple possible package names.
              package: "author/project",
              module: "Icon.SvgAsset",
              function: "svgAsset",
            },
            "assets-plugin-svg",
          ],
        ],
      },
    },
    {
      loader: "elm-hot-webpack-loader",
    },
    {
      loader: resolve(__dirname, "elm-webpack-loader-fix.js"),
      options: {
        debug: isEnabled("ELM_DEBUG", process.env.ELM_DEBUG, false),
        cwd: resolve(__dirname, ".."),
        pathToElm: resolve(__dirname, "../node_modules/.bin/elm"),
        forceWatch: true,
      },
    },
  ],
}

export const removeSvgFromTest = (rule: Rule): Rule => {
  if (rule.test && rule.test.toString().includes("svg")) {
    const test = rule.test.toString().replace("svg|", "").replace(/\//g, "")
    return { ...rule, test: new RegExp(test) }
  } else {
    return rule
  }
}

export const excludeExternalModules = (rule: Rule): Rule => ({
  exclude: /node_modules\/(?!(\@kaizen|\@cultureamp)).*/,
  ...rule,
})
