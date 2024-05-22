import fs from "fs"
import { dirname } from "path"
import { fileURLToPath } from "url"
import { RollupOptions } from "rollup"
import postcss from "rollup-plugin-postcss"

const dir = dirname(fileURLToPath(import.meta.url))
const styleInjectFn = fs.readFileSync(`${dir}/utils/styleInject.js`, "utf8")

export const rollupTailwindConfig = (): RollupOptions[] => {
  const sharedConfig = {
    input: "./src/tailwind.css",
    plugins: [
      postcss({
        modules: false,
        extract: false,
        inject: cssVariableName =>
          `${styleInjectFn}\nstyleInject(${cssVariableName});`,
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
