import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs"
import image from "@rollup/plugin-image"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"
import esbuild from "rollup-plugin-esbuild"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import postcss from "rollup-plugin-postcss"
import ttypescript from "ttypescript"

const TYPES_TEMP_DIR = "dts"
const OUTPUT_DIR = "dist"

const getCompiledConfigByModuleType = format => ({
  input: { index: "./src/index.ts", future: "./src/__future__/index.ts" },
  plugins: [
    peerDepsExternal(),
    // Has to be the same as packages/components/tsconfig.json -> compilerOptions -> paths
    alias({
      entries: [
        { find: "~types", replacement: "src/types" },
        { find: "~utils", replacement: "src/utils" },
        { find: "~icons", replacement: "src/SVG/icons" },
        { find: "~components", replacement: "src" },
      ]
    }),
    resolve({
      preferBuiltins: true,
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    postcss({
      extract: true,
      extensions: [".scss", ".css"],
    }),
    typescript({
      declaration: true,
      declarationDir: `${OUTPUT_DIR}/${format}/${TYPES_TEMP_DIR}`,
      exclude: ["node_modules", "**/*.spec.ts", "**/*.spec.tsx", "**/*.stories.tsx"],
      // We use ttypescript instead of typescript to allow transformer to convert alias into actual paths/dependencies
      typescript: ttypescript
    }),
    commonjs(),
    esbuild(),
    image(),
  ],
  output: [
    {
      dir: `${OUTPUT_DIR}/${format}`,
      format,
      sourcemap: true,
    },
  ],
})

export default [
  getCompiledConfigByModuleType("cjs"),
  getCompiledConfigByModuleType("esm"),
  // This step doesn't matter if it's cjs or esm, the output will be the same (esm is faster)
  {
    input: `./${OUTPUT_DIR}/esm/dts/index.d.ts`,
    output: [{ file: `${OUTPUT_DIR}/index.d.ts`, format: "esm" }],
    external: [/\.scss$/],
    plugins: [dts()],
  }
]
