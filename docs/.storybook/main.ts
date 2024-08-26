import path, { join, dirname } from "path"
import type { StorybookConfig } from "@storybook/react-vite"

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
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-links"),
    "storybook-addon-pseudo-states",
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {
      builder: {
        viteConfigPath: path.resolve(__dirname, "../../vite.config.ts"),
      },
    },
  },
  staticDirs: [
    {
      from: "../assets",
      to: "/static/media",
    },
  ],
}
export default config
