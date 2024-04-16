import alias from "@rollup/plugin-alias"
import { babel, getBabelOutputPlugin } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import ignore from "rollup-plugin-ignore"
import nodeExternals from "rollup-plugin-node-externals"
import postcss from "rollup-plugin-postcss"


const sharedConfig = {
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
      extensions: [".js", ".jsx", ".ts", ".tsx"
     // This is needed to ensure that css is compiled correctly.
     // Without this there is an alphabetised order in the dist CSS for subcomponents.
     // This can cause styles being overwritten by primitives, ie: BaseButton overwriting DropdownButton
     // https://cultureamp.slack.com/archives/C02NUQ27G56/p1713157055178419
    ],
    }),
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
    postcss({
      modules: true,
      extract: true,
      extensions: [".scss", ".css"],
    }),
  ]
}

const cjsConfig = {
  ...sharedConfig,
  plugins: [
    ...sharedConfig.plugins,
    typescript({
      tsconfig: "./tsconfig.dist.json",
      compilerOptions: {
        esModuleInterop: false,
        allowSyntheticDefaultImports: true
      }
    }),
    commonjs(),
  ],
  output: {
    dir: "dist/cjs",
    format: "cjs",
    preserveModules: true,
    entryFileNames: "[name].cjs",
    interop: "auto",
  }
}

const esmConfig = {
  ...sharedConfig,
  plugins: [
    ...sharedConfig.plugins,
    typescript({ tsconfig: "./tsconfig.dist.json" })
  ],
  output: {
    dir: "dist/esm",
    format: "esm",
    preserveModules: true,
    entryFileNames: "[name].mjs",
  }
}

export default [
  cjsConfig,
  esmConfig,
]
