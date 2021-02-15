import path from "path"

import {
  elm,
  excludeExternalModules,
  babel,
  styles,
  svgs,
  svgIcons,
  removeSvgFromTest,
} from "./rules"

module.exports = {
  stories: [
    "../packages/component-library/**/*.stories.tsx",
    "../packages/design-tokens/**/*.stories.tsx",
    "../draft-packages/**/*.stories.tsx",
    "../legacy-packages/**/*.stories.tsx",
  ],
  addons: [
    path.resolve("./storybook/gtm-addon/register"),
    path.resolve("./storybook/theme-switcher-addon/register"),
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-addon-designs",
  ],
  presets: [path.resolve("./storybook/header-preset/preset")],
  webpackFinal: (config, { configType }) => {
    // eslint-disable-next-line no-console
    console.log(`Using configuration for: ${configType}`)

    // Storybook's base config applies file-loader to svgs
    config.module.rules = config.module.rules.map(removeSvgFromTest)

    config.module.rules.push(
      ...[babel, styles, svgs, svgIcons, elm].map(excludeExternalModules)
    )

    config.resolve.extensions.push(".ts", ".tsx")

    // Return the altered config
    return config
  },
}
