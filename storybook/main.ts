import fs from "fs"
import path from "path"

/**
 * Use `STORIES=path/to/package` environment variable to load all `*.stories.tsx` stories in that folder.
 * Use `STORIES=path/to/specific/story.stories.tsx` to load a specific story only.
 * Leaving blank will return false, causing our defaultStoryPaths (for all stories in Kaizen) to be used.
 */
// const getStoryPathsFromEnv = (): string[] | false => {
//   if (!process.env.STORIES) return false
//   const storyPath = path.join(__dirname, "../", process.env.STORIES)
//   if (fs.existsSync(storyPath)) {
//     if (fs.statSync(storyPath).isDirectory()) {
//       return [path.join(storyPath, "**/*.stories.tsx")]
//     }
//   }
//   return [storyPath]
// }

const defaultStoryPaths = [
  "../draft-packages/**/*.stories.tsx",
  "../draft-packages/**/*.stories.mdx",
  "../packages/**/*.stories.tsx",
  "../packages/**/*.stories.mdx",
  "../docs/**/*.stories.mdx",
  "../docs/**/*.stories.tsx",
]

module.exports = {
  mode: "production",
  // @todo: test this still works
  // stories: getStoryPathsFromEnv() || defaultStoryPaths,
  stories: defaultStoryPaths,
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
  presets: [path.resolve("./storybook/header-preset/preset")],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
}
