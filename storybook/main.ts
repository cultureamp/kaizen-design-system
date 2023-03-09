import fs from "fs"
import path from "path"

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
      return [path.join(storyPath, "**/*.stories.tsx")]
    }
  }
  return [storyPath]
}

const defaultStoryPaths = [
  "../draft-packages/**/*.mdx",
  "../draft-packages/**/*.stories.tsx",
  "../packages/**/*.mdx",
  "../packages/**/*.stories.tsx",
  "../docs/**/*.mdx",
  "../docs/**/*.stories.tsx",
]

module.exports = {
  stories: getStoryPathsFromEnv() || defaultStoryPaths,
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
  presets: [path.resolve("./storybook/header-preset/preset")],
  staticDirs: [{ from: "./assets", to: "/static/media" }],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
}
