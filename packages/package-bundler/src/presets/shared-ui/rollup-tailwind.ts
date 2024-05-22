import path from "path"
import { RollupOptions } from "rollup"
import postcss from "rollup-plugin-postcss"

// This file is added by bin/addBuildTools
const styleInjectPath = path.resolve("src/__build-tools/styleInject.js")

export const rollupTailwindConfig = (): RollupOptions[] => {
  const sharedConfig = {
    input: "./src/tailwind.css",
    plugins: [
      postcss({
        modules: false,
        extract: false,
        inject: cssVariableName =>
          `import { styleInject } from "${styleInjectPath}";\n\nstyleInject(${cssVariableName});`,
        extensions: [".css"],
      }),
    ],
  } satisfies RollupOptions

  // CommonJS
  const cjsConfig = {
    ...sharedConfig,
    output: {
      dir: "dist/cjs",
      format: "commonjs",
      entryFileNames: "tailwind.css.cjs",
      exports: "named",
    },
  } satisfies RollupOptions

  // ESModules
  const esmConfig = {
    ...sharedConfig,
    output: {
      dir: "dist/esm",
      format: "esm",
      entryFileNames: "tailwind.css.mjs",
    },
  } satisfies RollupOptions

  return [cjsConfig, esmConfig]
}
