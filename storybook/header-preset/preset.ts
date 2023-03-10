// import path from "path"
// import { Configuration, NormalModuleReplacementPlugin } from "webpack"
// const webpackConfig = require("../webpack/rules")

//
// @NOTE: This isn't working in Storybook v7
//

// module.exports = {
//   managerWebpack: (config, { configType }): Configuration => {
//     // don't add header and footer for local builds
//     if (configType !== "PRODUCTION") return config

//     const replaceLayoutPlugin = new NormalModuleReplacementPlugin(
//       /^\.\/layout$/,
//       "custom-layout"
//     )

//     return {
//       ...config,
//       plugins: [...config.plugins, replaceLayoutPlugin],
//       module: {
//         ...config.module,
//         rules: [
//           webpackConfig.babel,
//           webpackConfig.styles,
//           webpackConfig.svgs,
//           webpackConfig.svgIcons,
//         ].map(webpackConfig.excludeExternalModules),
//       },
//       resolve: {
//         ...config.resolve,
//         alias: {
//           ...config.resolve.alias,
//           "custom-layout": path.resolve("./storybook/header-preset/index.tsx"),
//         },
//         extensions: [...config.resolve.extensions, ".ts", ".tsx"],
//       },
//     }
//   },
// }
