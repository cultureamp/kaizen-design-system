import { RollupOptions } from "rollup"
import postcss from "rollup-plugin-postcss"

export const rollupTailwindConfig = (): RollupOptions[] => {
  const config = {
    input: "./src/tailwind.css",
    plugins: [
      postcss({
        modules: false,
        inject: false,
        extract: "tailwind.css",
        extensions: [".css"],
      }),
    ],
    output: {
      dir: "dist",
    },
  }

  return [config]
}
