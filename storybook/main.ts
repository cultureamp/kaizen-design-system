import fs from "fs"
import path from "path"
import { StorybookConfig } from "@storybook/react-vite"

/**
 * Use `STORIES=path/to/package` environment variable to load all `*.stories.tsx` stories in that folder.
 * Use `STORIES=path/to/specific/story.stories.tsx` to load a specific story only.
 * Leaving blank will return false, causing our defaultStoryPaths (for all stories in Kaizen) to be used.
 */
const getStoryPathsFromEnv = (): string[] | false => {
  if (!process.env.STORIES) return false

  const storyPath = path.join(__dirname, "../", process.env.STORIES)
  if (fs.existsSync(storyPath)) {
    if (fs.statSync(storyPath).isDirectory()) {
      return [
        path.join(storyPath, "**/*.stories.tsx"),
        path.join(storyPath, "**/*.mdx"),
      ]
    }
  }
  return [storyPath]
}

const defaultStoryPaths = [
  "../{docs,packages}/**/*.mdx",
  "../{docs,packages}/**/*.stories.tsx",
]

const config = {
  stories: getStoryPathsFromEnv() || defaultStoryPaths,
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
