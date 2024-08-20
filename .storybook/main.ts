import type { StorybookConfig } from "@storybook/react-vite"
import path, { join, dirname } from "path"
import { mergeAlias } from "vite"

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")))
}

const config: StorybookConfig = {
  stories: [
    "../packages/**/*.mdx",
    "../packages/**/*.stories.tsx",
    "./pages/**/*.mdx",
    "./pages/**/*.stories.tsx",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  staticDirs: [
    {
      from: "./assets",
      to: "/static/media",
    },
  ],
  viteFinal: config => {
    return {
      ...config,
      resolve: {
        alias: mergeAlias(
          [
            {
              // this is required for the SCSS modules
              find: /^~(.*)$/,
              replacement: "$1",
            },
            {
              // monorepo workspace aliases
              find: /^\@kaizen(.*)$/,
              replacement: path.resolve(__dirname, "../packages$1"),
            },
          ],
          {
            "~storybook": path.resolve(__dirname),
            "~kaio-global-styles": path.resolve(
              __dirname,
              "../packages/components/styles/global.css"
            ),
            "~components": path.resolve(
              __dirname,
              "../packages/components/src"
            ),
            "~design-tokens": path.resolve(
              __dirname,
              "../packages/design-tokens/src"
            ),
            "~tailwind": path.resolve(__dirname, "../packages/tailwind/src"),
            // i18n-react-intl package attempts to import locales from this path.
            // When rollup attempts to import from the 'find' path, it will be
            // redirected to import from the replacement path (Same as KAIO rollup config).
            "__@cultureamp/i18n-react-intl/locales": path.resolve(
              __dirname,
              "../packages/components/locales"
            ),
          }
        ),
      },
    }
  },
}
export default config
