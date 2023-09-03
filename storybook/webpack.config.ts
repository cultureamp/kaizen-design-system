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
    "~storybook": path.resolve(__dirname, "../storybook"),
    "~types": path.resolve(__dirname, "../packages/components/src/types"),
    "~utils": path.resolve(__dirname, "../packages/components/src/utils"),
    "~components": path.resolve(__dirname, "../packages/components/src"),
    "~icons": path.resolve(__dirname, "../packages/components/src/Icons"),
    // i18n-react-intl package attempts to import locales from this path.
    // When rollup attempts to import from the 'find' path, it will be
    // redirected to import from the replacement path (Same as KAIO rollup config).
    "__@cultureamp/i18n-react-intl/locales": path.resolve(
      __dirname,
      "../packages/components/locales"
    ),
  }

  // Return the altered config
  return config
}
