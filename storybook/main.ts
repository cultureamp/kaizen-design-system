import path from "path"
import fs from "fs"

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
  "../packages/**/*.stories.tsx",
  "../draft-packages/**/*.stories.tsx",
  "../legacy-packages/**/*.stories.tsx",
]

module.exports = {
  stories: getStoryPathsFromEnv() || defaultStoryPaths,
  addons: [
    path.resolve("./storybook/gtm-addon/register"),
    {
      name: "@storybook/addon-docs",
      options: {
        transcludeMarkdown: true,
      },
    },
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-addon-designs",
  ],
  presets: [path.resolve("./storybook/header-preset/preset")],
}
