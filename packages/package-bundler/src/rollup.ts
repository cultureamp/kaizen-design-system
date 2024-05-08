import { RollupAliasOptions } from "@rollup/plugin-alias"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import { InputPluginOption, RollupOptions } from "rollup"
import { presetDefault, presetUiLibrary } from "./presets/index.js"

type Config = {
  input: RollupOptions["input"]
  plugins: InputPluginOption[]
  alias?: RollupAliasOptions
}

export const rollupConfig = (
  config: Config = {
    input: { index: "./src/index.ts" },
    plugins: presetUiLibrary,
  }
): RollupOptions[] => {
  // Shared config
  const sharedConfig = {
    input: config.input,
    plugins: [...config.plugins, ...presetDefault({ alias: config.alias })],
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
