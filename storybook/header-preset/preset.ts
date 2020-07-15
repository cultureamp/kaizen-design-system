import path from "path"
import { RuleSetRule as Rule, NormalModuleReplacementPlugin } from "webpack"

module.exports = {
  managerWebpack: async (config, options) => {
    const newConfig = { ...config }
    const babel: Rule = {
      test: /\.(j|t)sx?$/,
      loader: require.resolve("babel-loader"),
      options: require("../../package.json").babel,
    }
    const replaceLayoutPlugin = new NormalModuleReplacementPlugin(
      /^\.\/layout$/,
      "custom-layout"
    )
    // const resolvePaths = [
    //   path.resolve("./storybook/header-preset/header"),
    //   path.resolve("./site/src/components/MainNav")
    // ]

    newConfig.plugins.push(replaceLayoutPlugin)
    newConfig.resolve.alias["custom-layout"] = path.resolve(
      "./storybook/header-preset/header"
    )
    newConfig.module.rules.push(babel)

    return newConfig
  },
  webpackFinal: async (config, options) => config,
  addons: [],
}
