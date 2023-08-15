import fs from "fs"
import path from "path"
import { StorybookConfig } from "@storybook/react-webpack5"

/**
 * Use `STORIES=path/to/package` environment variable to load all `*.stories.tsx` stories in that folder.
 * Use `STORIES=path/to/specific/story.stories.tsx` to load a specific story only.
 * Leaving blank will return false, causing our defaultStoryPaths (for all stories in Kaizen) to be used.
 */
const getStoryPathsFromEnv = (): string[] | false => {
  if (!process.env.STORIES) return false

  // BrandMoment stories freeze outside of prod, so we need to ignore it when running tests
  if (process.env.STORIES === "ignoreBrandMoment") {
    return ["../(docs|draft-packages|packages)/**/!(BrandMoment).stories.tsx"]
  }

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
  "../(docs|draft-packages|packages)/**/*.mdx",
  "../(docs|draft-packages|packages)/**/*.stories.tsx",
]

const config = {
  stories: getStoryPathsFromEnv() || defaultStoryPaths,
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
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
  refs: {
    legacy: {
      title: "Legacy",
      url: "https://main--64bde0b812df1bbcb02a4937.chromatic.com/",
    },
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      skipChildrenPropWithoutDoc: false,
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop): boolean => {
        const isHTMLElementProp =
          prop.parent?.fileName.includes("node_modules/@types/react") ?? false
        return !isHTMLElementProp
      },
    },
  },
} satisfies StorybookConfig
export default config
