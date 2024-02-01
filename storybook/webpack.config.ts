import path from "path"
import type { Configuration } from "webpack"
import {
  excludeExternalModules,
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

  config.module.rules.push(
    ...[styles, tailwind].map(excludeExternalModules)
  )

  config.resolve.extensions.push(".ts", ".tsx")

  config.resolve.alias = {
    ...config.resolve.alias,
    "~storybook": path.resolve(__dirname, "../storybook"),
    "~types": path.resolve(__dirname, "../packages/components/src/types"),
    "~utils": path.resolve(__dirname, "../packages/components/src/utils"),
    "~components": path.resolve(__dirname, "../packages/components/src"),
    "~design-tokens": path.resolve(__dirname, "../packages/design-tokens/src"),
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
