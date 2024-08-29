import path, { join, dirname } from "path"
import type { StorybookConfig } from "@storybook/react-vite"
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
    "../../packages/**/*.mdx",
    "../../packages/**/*.stories.tsx",
    "../pages/**/*.mdx",
    "../pages/**/*.stories.tsx",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-links"),
    "storybook-addon-pseudo-states",
  ],
  framework: "@storybook/react-vite",
  staticDirs: [
    {
      from: "../assets",
      to: "/static/media",
    },
  ],
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      include: ["../packages/**/*.tsx"],
      skipChildrenPropWithoutDoc: false,
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop): boolean => {
        if (prop.name === "className") return true
        const isHTMLElementProp =
          prop.parent?.fileName.includes("node_modules/@types/react") ?? false
        return !isHTMLElementProp
      },
    },
  },
  viteFinal: viteConfig => ({
    ...viteConfig,
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
            replacement: path.resolve(__dirname, "../../packages$1"),
          },
        ],
        {
          "~storybook": path.resolve(__dirname, "../"),
          "~components": path.resolve(
            __dirname,
            "../../packages/components/src"
          ),
          "~design-tokens": path.resolve(
            __dirname,
            "../../packages/design-tokens/src"
          ),
          "~tailwind": path.resolve(__dirname, "../../packages/tailwind/src"),
          // i18n-react-intl package attempts to import locales from this path.
          // When rollup attempts to import from the 'find' path, it will be
          // redirected to import from the replacement path (Same as KAIO rollup config).
          "__@cultureamp/i18n-react-intl/locales": path.resolve(
            __dirname,
            "../../packages/components/locales"
          ),
        }
      ),
    },
  }),
}
export default config
