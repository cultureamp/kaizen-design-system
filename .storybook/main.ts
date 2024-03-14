import type { StorybookConfig } from "@storybook/react-vite"

import { join, dirname } from "path"

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
const getAbsolutePath = (value: string) =>
  dirname(require.resolve(join(value, "package.json")))

const config: StorybookConfig = {
  stories: [
    // "../stories/**/*.mdx",
    // "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../{docs,packages}/**/*.mdx",
    "../{docs,packages}/**/*.stories.tsx",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  staticDirs: [
    {
      from: "./assets",
      to: "/static/media",
    },
  ],
  framework: {
    // name: getAbsolutePath("@storybook/react-vite"),
    name: "@storybook/react-vite",
    options: {},
  },
  // docs: {
  //   autodocs: "tag",
  // },
}
export default config
