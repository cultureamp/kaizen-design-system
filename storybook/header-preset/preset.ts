import path from "path"
import {
  RuleSetRule as Rule,
  Loader,
  NormalModuleReplacementPlugin,
} from "webpack"

module.exports = {
  managerWebpack: async (config, options) => {
    const replaceLayoutPlugin = new NormalModuleReplacementPlugin(
      /^\.\/layout$/,
      "custom-layout"
    )

    const babel: Rule = {
      test: /\.(j|t)sx?$/,
      loader: require.resolve("babel-loader"),
      options: require("../../package.json").babel,
    }

    const stylePreprocessors: Loader[] = [
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

    const styles: Rule = {
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

    return {
      ...config,
      plugins: [...config.plugins, replaceLayoutPlugin],
      module: {
        ...config.module,
        rules: [...config.module.rules, babel, styles],
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "custom-layout": path.resolve("./storybook/header-preset/header.tsx"),
        },
      },
    }
  },
  webpackFinal: async (config, options) => config,
  addons: [],
}
