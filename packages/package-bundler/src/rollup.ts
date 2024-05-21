import fs from "fs"
import path from "path"
import alias, { RollupAliasOptions } from "@rollup/plugin-alias"
import typescript from "@rollup/plugin-typescript"
import { InputPluginOption, RollupOptions } from "rollup"
import { pluginsDefault } from "./presets/index.js"
import { rollupTailwindConfig } from "./presets/shared-ui/rollup-tailwind.js"

type Config = {
  input?: RollupOptions["input"]
  plugins?: InputPluginOption[]
  alias?: RollupAliasOptions
}

export const rollupConfig = (
  config: Config = {
    input: { index: "./src/index.ts" },
    plugins: pluginsDefault as InputPluginOption[],
  }
): RollupOptions[] => {
  // Shared config
  const userConfig = {
    input: config.input,
    plugins: [
      alias(config.alias),
      ...((config?.plugins as InputPluginOption[]) || pluginsDefault),
    ],
  } satisfies RollupOptions

  // CommonJS
  const cjsConfig = {
    ...userConfig,
    plugins: [
      ...userConfig.plugins,
      typescript({
        tsconfig: "./tsconfig.dist.json",
        compilerOptions: {
          esModuleInterop: false,
          allowSyntheticDefaultImports: true,
        },
      }),
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
    ...userConfig,
    plugins: [
      ...userConfig.plugins,
      typescript({ tsconfig: "./tsconfig.dist.json" }),
    ],
    output: {
      dir: "dist/esm",
      format: "esm",
      preserveModules: true,
      entryFileNames: "[name].mjs",
    },
  } satisfies RollupOptions

  const hasTailwind = fs.existsSync(
    path.resolve(process.cwd(), "./tailwind.config.js")
  )

  return hasTailwind
    ? [cjsConfig, esmConfig, ...rollupTailwindConfig()]
    : [cjsConfig, esmConfig]
}
