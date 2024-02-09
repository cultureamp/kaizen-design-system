import { StorybookConfig } from "@storybook/react-vite"

const config = {
  stories: [
    "../{docs,packages}/**/*.mdx",
    "../{docs,packages}/**/*.stories.tsx",
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  framework: "@storybook/react-vite",
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "storybook-addon-pseudo-states",
    "@storybook/blocks",
  ],
  staticDirs: [
    {
      from: "./assets",
      to: "/static/media",
    },
  ],
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      skipChildrenPropWithoutDoc: false,
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop): boolean => {
        const isHTMLElementProp =
          prop.parent?.fileName.includes("node_modules/@types/react") ?? false
        return !isHTMLElementProp
      },
    },
  },
} satisfies StorybookConfig

export default config
