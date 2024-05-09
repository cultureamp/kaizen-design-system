import alias from "@rollup/plugin-alias"
import { babel, getBabelOutputPlugin } from "@rollup/plugin-babel"
import { InputPluginOption } from "rollup"
import ignore from "rollup-plugin-ignore"
import nodeExternals from "rollup-plugin-node-externals"

export const pluginsDefault = [
  nodeExternals({
    devDeps: true,
  }),
  // This call to alias plugin will be additional to the above alias plugin call
  alias({
    entries: [
      // i18n-react-intl package attempts to import locales from this path.
      // When rollup attempts to import from the 'find' path, it will be
      // redirected to import from the replacement path (same as storybook webpack config).
      {
        find: "__@cultureamp/i18n-react-intl/locales",
        replacement: "locales",
      },
    ],
  }),
  // These libraries aren't used in KAIO, and require polyfills to be set up
  // in consuming repos. Ignoring them here removes the need for extra setup in
  // consuming repos.
  ignore(["stream", "http", "https", "zlib"]),
  babel({ babelHelpers: "bundled" }),
  getBabelOutputPlugin({
    plugins: [
      "@babel/plugin-transform-react-pure-annotations",
      "babel-plugin-pure-static-props",
    ],
  }),
] satisfies InputPluginOption[]
