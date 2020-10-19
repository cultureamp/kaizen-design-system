const path = require("path")

import {
  elm,
  excludeExternalModules,
  babel,
  styles,
  svgs,
  svgIcons,
  removeSvgFromTest,
  storybookSource,
} from "./webpack.config"

module.exports = {
  stories: [
    "../packages/component-library/stories/*.stories.tsx",
    /**
     * These stories are separated from their corresponding packages as
     * the packages contained compiled js in their node_modules and that
     * made storybook unhappy
     */
    "../draft-packages/stories/*.stories.tsx",
    "../legacy-packages/stories/*.stories.tsx",
  ],
  addons: [
    "./gtm-addon/register",
    {
      name: "@storybook/preset-typescript",
      options: {},
    },
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/addon-a11y",
  ],
  presets: [path.resolve("./storybook/header-preset/preset")],
  webpackFinal: async (config, { configType }) => {
    // eslint-disable-next-line no-console
    console.log(`Using configuration for: ${configType}`)

    // Storybook's base config applies file-loader to svgs
    config.module.rules = config.module.rules.map(removeSvgFromTest)

    // Required for the storysource storybook addon
    config.module.rules.push(storybookSource())

    config.module.rules.push(
      ...[babel, styles, svgs, svgIcons, elm].map(excludeExternalModules)
    )

    config.resolve.extensions.push(".ts", ".tsx")

    // Return the altered config
    return config
  },
}
