import path from "path"
import { defineConfig, mergeAlias } from "vite"

const resolveAbsolutePath = (relativePath: string): string =>
  path.resolve(__dirname, relativePath)

export default defineConfig({
  resolve: {
    alias: mergeAlias(
      [
        //   {
        //     // this is required for the SCSS modules
        //     find: /^~(.*)$/,
        //     replacement: "$1",
        //   },
        {
          // monorepo workspace aliases
          find: /^\@kaizen(.*)$/,
          replacement: resolveAbsolutePath("packages$1"),
        },
      ],
      {
        "~storybook": resolveAbsolutePath("storybook"),
        "~types": resolveAbsolutePath("packages/components/src/types"),
        "~utils": resolveAbsolutePath("packages/components/src/utils"),
        "~components": resolveAbsolutePath("packages/components/src"),
        "~design-tokens": resolveAbsolutePath("packages/design-tokens/src"),
        // i18n-react-intl package attempts to import locales from this path.
        // When rollup attempts to import from the 'find' path, it will be
        // redirected to import from the replacement path (Same as KAIO rollup config).
        "__@cultureamp/i18n-react-intl/locales": resolveAbsolutePath(
          "packages/components/locales"
        ),
      }
    ),
  },
})
