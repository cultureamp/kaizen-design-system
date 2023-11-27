import { createRequire } from "node:module";
import alias from "@rollup/plugin-alias"
import { babel, getBabelOutputPlugin } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs"
import image from "@rollup/plugin-image"
import jsonPlugin from "@rollup/plugin-json"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"
import ignore from "rollup-plugin-ignore"
import nodeExternals from "rollup-plugin-node-externals"
import postcss from "rollup-plugin-postcss"

// ts-patch needs to be in CJS, but rollup uses EMS
// https://github.com/nonara/ts-patch/issues/106
const require = createRequire(import.meta.url);
const tspCompiler = require("ts-patch/compiler");

const OUTPUT_DIR = "dist"

const getCompiledConfigByModuleType = format => ({
  input: { index: "./src/index.ts", future: "./src/__future__/index.ts" },
  plugins: [
    nodeExternals({
      devDeps: true
    }),
    // Has to be the same as packages/components/tsconfig.json -> compilerOptions -> paths
    alias({
      entries: [
        { find: "~types", replacement: "src/types" },
        { find: "~utils", replacement: "src/utils" },
        { find: "~components", replacement: "src" },
        // i18n-react-intl package attempts to import locales from this path.
        // When rollup attempts to import from the 'find' path, it will be
        // redirected to import from the replacement path (same as storybook webpack config).
        {
          find: "__@cultureamp/i18n-react-intl/locales",
          replacement: "locales",
        },
      ],
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
      tsconfig: `./tsconfig.${format}.json`,
      typescript: tspCompiler,
    }),
    commonjs(),
    image(),
    jsonPlugin(),
    // These libraries aren't used in KAIO, and require polyfills to be set up
    // in consuming repos. Ignoring them here removes the need for extra setup in
    // consuming repos.
    ignore(["stream", "http", "https", "zlib"]),
    babel({ babelHelpers: "bundled" }),
    getBabelOutputPlugin({
      plugins: [
        "@babel/plugin-transform-react-pure-annotations",
        "babel-plugin-pure-static-props"
      ]
    }),
  ],
  output: [
    {
      dir: `${OUTPUT_DIR}/${format}`,
      format,
      sourcemap: true,
      preserveModules: true,
      entryFileNames: format === "esm" ? "[name].mjs" : "[name].cjs",
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
  },
]
