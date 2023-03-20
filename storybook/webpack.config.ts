import path from "path"
import type { Configuration } from "webpack"
import {
  excludeExternalModules,
  babel,
  svgs,
  svgIcons,
  removeSvgFromTest,
  tailwind,
  styles,
} from "./webpack/rules"

export default ({ config }: { config: Configuration }): Configuration => {
  if (
    !config.resolve ||
    !config.resolve.extensions ||
    !config.module ||
    !config.module.rules
  ) {
    throw new Error(`Storybook started with unexpected config:\n${config}`)
  }

  // Storybook's base config applies file-loader to svgs
  config.module.rules = config.module.rules.map(removeSvgFromTest)

  config.module.rules.push(
    ...[babel, styles, tailwind].map(excludeExternalModules),
    svgs,
    svgIcons
  )

  config.resolve.extensions.push(".ts", ".tsx")

  config.resolve.alias = {
    ...config.resolve.alias,
    "~components": path.resolve(__dirname, "../packages/components/src"),
    "~utils": path.resolve(__dirname, "../packages/components/src/utils"),
    "~icons": path.resolve(__dirname, "../packages/components/icons"),
    "~types": path.resolve(__dirname, "../packages/components/types"),
  }

  // Return the altered config
  return config
}
