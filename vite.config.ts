import path from "path"
import { defineConfig, mergeAlias } from "vite"

export default defineConfig({
  resolve: {
    alias: mergeAlias(
      [
        {
          // this is required for the SCSS modules
          find: /^~(.*)$/,
          replacement: "$1",
        },
        {
          // monorepo workspace aliases
          find: /^\@kaizen(.*)$/,
          replacement: path.resolve(__dirname, "packages$1"),
        },
      ],
      {
        "~storybook": path.resolve(__dirname, "storybook"),
        "~types": path.resolve(__dirname, "packages/components/src/types"),
        "~utils": path.resolve(__dirname, "packages/components/src/utils"),
        "~components": path.resolve(__dirname, "packages/components/src"),
        "~design-tokens": path.resolve(__dirname, "packages/design-tokens/src"),
        // i18n-react-intl package attempts to import locales from this path.
        // When rollup attempts to import from the 'find' path, it will be
        // redirected to import from the replacement path (Same as KAIO rollup config).
        "__@cultureamp/i18n-react-intl/locales": path.resolve(
          __dirname,
          "packages/components/locales"
        ),
      }
    ),
  },
})
