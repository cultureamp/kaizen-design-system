/* eslint-disable @typescript-eslint/explicit-function-return-type */
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs"
import image from "@rollup/plugin-image"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"
import esbuild from "rollup-plugin-esbuild"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import postcss from "rollup-plugin-postcss"

const TYPES_TEMP_DIR = "dts"
const OUTPUT_DIR = "dist"

const getCompiledConfigByModuleType = format => ({
  input: { index: "./src/index.ts", future: "./src/__future__/index.ts" },
  plugins: [
    peerDepsExternal(),
    alias({
      entries: [
        { find: "@icons", replacement: "./icons" },
        { find: "@util", replacement: "./util" },
      ]
    }),
    resolve({
      preferBuiltins: true,
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
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: "auto",
    }),
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

const getTypesConfigByModuleType = format => ({
  // path to your declaration files root
  input: `./${OUTPUT_DIR}/${format}/dts/index.d.ts`,
  output: [{ file: `${OUTPUT_DIR}/index.d.ts`, format }],
  external: [/\.scss$/],
  plugins: [dts()],
})

export default [
  getCompiledConfigByModuleType("cjs"),
  getCompiledConfigByModuleType("esm"),
  getTypesConfigByModuleType("cjs"),
  getTypesConfigByModuleType("esm"),
]
