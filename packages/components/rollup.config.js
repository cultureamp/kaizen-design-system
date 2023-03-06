import babel from "@rollup/plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
// import copy from "rollup-plugin-copy"
import dts from "rollup-plugin-dts"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import postcss from "rollup-plugin-postcss"

const TYPES_TEMP_DIR = "dts"
const OUTPUT_DIR = "dist"

const getCompiledConfigByModuleType = format => ({
  input: { index: "./src/index.ts", future: "./src/__future__/index.ts" },
  plugins: [
    peerDepsExternal(),
    // Required if you need to export scss files for raw consumption
    // copy({
    //   targets: [
    //     { src: "src/theme.scss*", dest: `${OUTPUT_DIR}/${format}` },
    //     { src: "src/components.scss*", dest: `${OUTPUT_DIR}/${format}` },
    //     {
    //       src: ["src/components/**/*.scss*", "!**/*.spec.*"],
    //       dest: `${OUTPUT_DIR}/${format}/src`,
    //     },
    //   ],
    //   verbose: true,
    //   flatten: false,
    // }),
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    postcss({
      extract: true,
      extensions: [".scss"],
    }),
    typescript({
      declaration: true,
      declarationDir: `${OUTPUT_DIR}/${format}/${TYPES_TEMP_DIR}`,
    }),
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules/**",
    }),
  ],
  output: [
    {
      dir: `${OUTPUT_DIR}/${format}`,
      format,
      sourcemap: true,
    },
  ],
})

const getTypesConfigByModuleType = format => ({
  // path to your declaration files root
  input: `./${OUTPUT_DIR}/${format}/${TYPES_TEMP_DIR}/index.d.ts`,
  output: [{ file: `${OUTPUT_DIR}/${format}/index.d.ts`, format }],
  external: [/\.scss$/],
  plugins: [dts()],
})

export default [
  getCompiledConfigByModuleType("cjs"),
  getTypesConfigByModuleType("cjs"),
  getCompiledConfigByModuleType("esm"),
  getTypesConfigByModuleType("esm"),
]
