import fs from "fs"
import path from "path"
import type { StorybookConfig } from "@storybook/react-vite"
import { mergeConfig } from "vite"
// import tsconfigPaths from "vite-tsconfig-paths"

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
  "../(docs|draft-packages|packages)/**/*.mdx",
  "../(docs|draft-packages|packages)/**/*.stories.tsx",
]

export default {
  core: { builder: "@storybook/builder-vite" },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: getStoryPathsFromEnv() || defaultStoryPaths,
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "storybook-addon-pseudo-states",
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
  viteFinal: async config => mergeConfig(config, {
    // plugins: [
      // tsconfigPaths({
      //   root: path.resolve(__dirname)
      // })
    // ],
    resolve: {
      alias: [
        // { find: "@kaizen", replacement: path.resolve(__dirname, "../packages") },
        // {
        //   // this is required for the SCSS modules
        //   find: /^~@kaizen\/design-tokens\/(.*)$/,
        //   replacement: path.resolve(__dirname, "../packages/design-tokens/$1"),
        // },
        // { find: "~components", replacement: path.resolve(__dirname, "../packages/components/src") },
        { find: "~storybook", replacement: path.resolve(__dirname, "../storybook") },
        { find: "~types", replacement: path.resolve(__dirname, "../packages/components/src/types") },
        { find: "~utils", replacement: path.resolve(__dirname, "../packages/components/src/utils") },
        { find: "~components", replacement: path.resolve(__dirname, "../packages/components/src") },
        { find: "~design-tokens", replacement: path.resolve(__dirname, "../packages/design-tokens/src") },
        // i18n-react-intl package attempts to import locales from this path.
        // When rollup attempts to import from the 'find' path, it will be
        // redirected to import from the replacement path (Same as KAIO rollup config).
        {
          find: "__@cultureamp/i18n-react-intl/locales",
          replacement: path.resolve(__dirname, "../packages/components/locales")
        },
        {
          // this is required for the SCSS modules
          find: /^~(.*)$/,
          replacement: "$1",
        },
      ]
    }
    // resolve: {
    //   alias: {
        // "~storybook": path.resolve(__dirname, "../storybook"),
        // "~types": path.resolve(__dirname, "../packages/components/src/types"),
        // "~utils": path.resolve(__dirname, "../packages/components/src/utils"),
        // "~components": path.resolve(__dirname, "../packages/components/src"),
        // "~design-tokens": path.resolve(__dirname, "../packages/design-tokens/src"),
        // // i18n-react-intl package attempts to import locales from this path.
        // // When rollup attempts to import from the 'find' path, it will be
        // // redirected to import from the replacement path (Same as KAIO rollup config).
        // "__@cultureamp/i18n-react-intl/locales": path.resolve(
        //   __dirname,
        //   "../packages/components/locales"
        // ),
      // },
    // },
  }),
} satisfies StorybookConfig

// export default config
