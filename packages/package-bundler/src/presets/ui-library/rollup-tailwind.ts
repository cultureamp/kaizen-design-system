import commonjs from "@rollup/plugin-commonjs"
import { RollupOptions } from "rollup"
import postcss from "rollup-plugin-postcss"

export const rollupTailwindConfig = (): RollupOptions[] => {
  const sharedConfig = {
    input: "./src/tailwind.css",
    plugins: [
      postcss({
        modules: false,
        extract: false,
        inject: cssVariableName =>
          `import styleInject from "style-inject";\n\nstyleInject(${cssVariableName});`,
        extensions: [".css"],
      }),
    ],
    external: ["style-inject"],
  }

  // CommonJS
  const cjsConfig = {
    ...sharedConfig,
    plugins: [...sharedConfig.plugins, commonjs()],
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
