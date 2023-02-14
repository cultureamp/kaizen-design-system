import type { Configuration } from "webpack"
import {
  excludeExternalModules,
  babel,
  styles,
  svgs,
  svgIcons,
  removeSvgFromTest,
  tailwind,
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

  // Return the altered config
  return config
}
