const path = require("path")

// import { excludeExternalModules, babel, styles, svgs, svgIcons } from "./webpack.config"

module.exports = {
  stories: [
    "../packages/component-library/stories/*.stories.tsx",
    /**
     * These stories are separated from their corresponding packages as
     * the packages contained compiled js in their node_modules and that
     * made storybook unhappy
     */
    // @TODO - restore
    // "../draft-packages/stories/*.stories.tsx",
    // "../legacy-packages/stories/*.stories.tsx",
  ],
  addons: [
    {
      name: "@storybook/preset-typescript",
      options: {},
    },
    "./gtm-addon/register",
    "@storybook/addon-actions",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
  ],
  presets: [path.resolve("./storybook/header-preset/preset")],
  webpackFinal: async (config, { configType }) => {
    // eslint-disable-next-line no-console
    console.log(`Using configuration for: ${configType}`)

    // @TODO - This is from the example docs.
    // To complete, pinch the configs from webpack.config.json
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    })

    // Return the altered config
    return config
  },
}
