import path from "path"
import { NormalModuleReplacementPlugin } from "webpack"
const webpackConfig = require("../webpack.config")

module.exports = {
  managerWebpack: async config => {
    const replaceLayoutPlugin = new NormalModuleReplacementPlugin(
      /^\.\/layout$/,
      "custom-layout"
    )

    return {
      ...config,
      plugins: [...config.plugins, replaceLayoutPlugin],
      module: {
        ...config.module,
        rules: [
          webpackConfig.babel,
          webpackConfig.styles,
          webpackConfig.svgs,
          webpackConfig.svgIcons,
        ].map(webpackConfig.excludeExternalModules),
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "custom-layout": path.resolve("./storybook/header-preset/header.tsx"),
        },
        extensions: [...config.resolve.extensions, ".ts", ".tsx"],
      },
    }
  },
}
