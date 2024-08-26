/** @type {import('vite').UserConfig} */
import { mergeAlias } from "vite"
import path from "path"

export default {
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
          replacement: path.resolve(__dirname, "./packages$1"),
        },
      ],
      {
        "~storybook": path.resolve(__dirname, "./docs"),
        "~components": path.resolve(__dirname, "./packages/components/src"),
        "~design-tokens": path.resolve(
          __dirname,
          "./packages/design-tokens/src"
        ),
        "~tailwind": path.resolve(__dirname, "./packages/tailwind/src"),
        // i18n-react-intl package attempts to import locales from this path.
        // When rollup attempts to import from the 'find' path, it will be
        // redirected to import from the replacement path (Same as KAIO rollup config).
        "__@cultureamp/i18n-react-intl/locales": path.resolve(
          __dirname,
          "./packages/components/locales"
        ),
      }
    ),
  },
  test: {
    environment: "happy-dom",
  },
}
