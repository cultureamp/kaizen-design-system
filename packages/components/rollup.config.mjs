import alias from "@rollup/plugin-alias"
import commonjs from "@rollup/plugin-commonjs"
import image from "@rollup/plugin-image"
import jsonPlugin from "@rollup/plugin-json"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"
import esbuild from "rollup-plugin-esbuild"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import postcss from "rollup-plugin-postcss"
import ttypescript from "ttypescript"
import ignore from "rollup-plugin-ignore"

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
      declaration: true,
      declarationDir: `${OUTPUT_DIR}/${format}/${TYPES_TEMP_DIR}`,
      exclude: [
        "node_modules",
        "**/*.spec.ts",
        "**/*.spec.tsx",
        "**/*.stories.tsx",
      ],
      // We use ttypescript instead of typescript to allow transformer to convert alias into actual paths/dependencies
      typescript: ttypescript,
    }),
    commonjs(),
    esbuild(),
    image(),
    jsonPlugin(),
    // These libraries aren't used in KAIO, and require polyfills to be set up
    // in consuming repos. Ignoring them here removes the need for extra setup in
    // consuming repos.
    ignore(["stream", "http", "https", "zlib"]),
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
  },
]
