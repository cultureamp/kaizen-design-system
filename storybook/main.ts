import fs from "fs"
import path, { dirname, join } from "path"
import type { StorybookConfig } from "@cultureamp/next-storybook"

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

const addons = [
  getAbsolutePath("@storybook/addon-a11y"),
  getAbsolutePath("@storybook/addon-essentials"),
  getAbsolutePath("@storybook/addon-interactions"),
  getAbsolutePath("@storybook/addon-links"),
  getAbsolutePath("@storybook/addon-storysource"),
  getAbsolutePath("@storybook/addon-designs"),
  getAbsolutePath("storybook-addon-pseudo-states"),
  require.resolve(
    join(
      getAbsolutePath("@cultureamp/next-storybook"),
      "/dist/addons/sensibleDefaults/preset"
    )
  ),
  // require.resolve(join(getAbsolutePath("@cultureamp/next-storybook"), "/dist/addons/frontend-apis/preset")),
  require.resolve(
    join(
      getAbsolutePath("@cultureamp/next-storybook"),
      "/dist/addons/react-intl/preset"
    )
  ),
  require.resolve(
    join(
      getAbsolutePath("@cultureamp/next-storybook"),
      "/dist/addons/chromatic/preset"
    )
  ),
  // require.resolve(join(getAbsolutePath("@cultureamp/next-storybook"), "/dist/addons/date/preset")),
  // require.resolve(join(getAbsolutePath("@cultureamp/next-storybook"), "/dist/addons/localStorage/preset")),
  // require.resolve(join(getAbsolutePath("@cultureamp/next-storybook"), "/dist/addons/cookie/preset")),
  // require.resolve(join(getAbsolutePath("@cultureamp/next-storybook"), "/dist/addons/amplitude/preset")),
  // require.resolve(join(getAbsolutePath("@cultureamp/next-storybook"), "/dist/addons/kaizen/preset")),
  require.resolve(
    join(
      getAbsolutePath("@cultureamp/next-storybook"),
      "/dist/addons/svg/preset"
    )
  ),
  require.resolve(
    join(
      getAbsolutePath("@cultureamp/next-storybook"),
      "/dist/addons/withoutImageOptimization/preset"
    )
  ),
  require.resolve(
    join(
      getAbsolutePath("@cultureamp/next-storybook"),
      "/dist/addons/tailwind/preset"
    )
  ),
] satisfies StorybookConfig["addons"]

const config = {
  stories: getStoryPathsFromEnv() || defaultStoryPaths,
  addons,
  // addons: [
  //   // getAbsolutePath("@storybook/addon-essentials"),
  //   // getAbsolutePath("@storybook/addon-a11y"),
  //   // getAbsolutePath("@storybook/addon-interactions"),
  //   // getAbsolutePath("@storybook/addon-webpack5-compiler-swc"),
  //   // getAbsolutePath("storybook-addon-pseudo-states"),
  //   "@cultureamp/next-storybook/default-preset"
  // ],
  staticDirs: [
    {
      from: "./assets",
      to: "/static/media",
    },
  ],
  framework: {
    name: "@cultureamp/next-storybook",
    options: {},
  },
  typescript: {
    check: false,
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
