import alias, { RollupAliasOptions } from "@rollup/plugin-alias"
import { babel, getBabelOutputPlugin } from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import { InputPluginOption, RollupOptions } from "rollup"
import ignore from "rollup-plugin-ignore"
import nodeExternals from "rollup-plugin-node-externals"
import { rollupOptionsUiLibrary } from "./presets/ui-library/index.js"

type Presets = "ui-library"

const getPreset = (preset: Presets): RollupOptions => {
  switch (preset) {
    case "ui-library":
      return rollupOptionsUiLibrary
  }
}

type Config = {
  input: RollupOptions["input"]
  preset: Presets
  alias?: RollupAliasOptions
}

export const rollupConfig = (
  config: Config = {
    input: { index: "./src/index.ts" },
    preset: "ui-library",
  }
): RollupOptions[] => {
  const preset = getPreset(config.preset)

  // Shared config
  const sharedConfig = {
    ...preset,
    input: config.input,
    plugins: [
      ...(preset.plugins as InputPluginOption[]),
      nodeExternals({
        devDeps: true,
      }),
      // Has to be the same as packages/components/tsconfig.json -> compilerOptions -> paths
      alias(config.alias),
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
    ],
  }

  // CommonJS
  const cjsConfig = {
    ...sharedConfig,
    plugins: [
      ...sharedConfig.plugins,
      typescript({
        tsconfig: "./tsconfig.dist.json",
        compilerOptions: {
          esModuleInterop: false,
          allowSyntheticDefaultImports: true,
        },
      }),
      commonjs(),
    ],
    output: {
      dir: "dist/cjs",
      format: "commonjs",
      preserveModules: true,
      entryFileNames: "[name].cjs",
      interop: "auto",
    },
  } satisfies RollupOptions

  // ESModules
  const esmConfig = {
    ...sharedConfig,
    plugins: [
      ...sharedConfig.plugins,
      typescript({ tsconfig: "./tsconfig.dist.json" }),
    ],
    output: {
      dir: "dist/esm",
      format: "esm",
      preserveModules: true,
      entryFileNames: "[name].mjs",
    },
  } satisfies RollupOptions

  return [cjsConfig, esmConfig]
}
