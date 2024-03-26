import fs from "fs"
import path, { dirname, join } from "path"
import type { StorybookConfig } from "@storybook/react-webpack5"

const getAbsolutePath = (value: string): string =>
  dirname(require.resolve(join(value, "package.json")))

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
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("storybook-addon-pseudo-states"),
    getAbsolutePath("@storybook/addon-webpack5-compiler-swc"),
  ],
  staticDirs: [
    {
      from: "./assets",
      to: "/static/media",
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  typescript: {
    // reactDocgen: "react-docgen",
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
  docs: {
    autodocs: "tag",
  },
  // @ts-expect-error Bug in the Storybook type https://github.com/storybookjs/storybook/issues/25736
} satisfies StorybookConfig

export default config
