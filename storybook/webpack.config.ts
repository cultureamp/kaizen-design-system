import type { Configuration } from "webpack"
import {
  elm,
  excludeExternalModules,
  babel,
  styles,
  svgs,
  svgIcons,
  removeSvgFromTest,
} from "./webpack/rules"

export default ({ config }: { config: Configuration }) => {
  if (!config.resolve || !config.resolve.extensions || !config.module) {
    throw new Error(`Storybook started with unexpected config:\n${config}`)
  }

  // Storybook's base config applies file-loader to svgs
  config.module.rules = config.module.rules.map(removeSvgFromTest)

  config.module.rules.push(
    ...[babel, styles].map(excludeExternalModules),
    svgs,
    svgIcons,
    elm
  )

  config.resolve.extensions.push(".ts", ".tsx")

  // Return the altered config
  return config
}
