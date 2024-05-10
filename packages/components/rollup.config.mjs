import postcss from "rollup-plugin-postcss"
import { rollupConfig, pluginsUiLibrary } from "@kaizen/package-bundler";

export default [
  ...rollupConfig({
    input: { index: "./src/index.ts", future: "./src/__future__/index.ts" },
    plugins: pluginsUiLibrary,
    alias: {
      entries: [
        { find: "~types", replacement: "src/types" },
        { find: "~utils", replacement: "src/utils" },
        { find: "~components", replacement: "src" },
      ],
    }
  }),
  {
    input: "./src/tailwind.css",
    plugins: [
      postcss({
        config: "./postcss.config.js",
        modules: false,
        extract: false,
        inject: cssVariableName =>
          `import styleInject from "style-inject";\nstyleInject(${cssVariableName});`,
        extensions: [".css"],
      }),
    ],
    external: ["style-inject"],
    output: {
      dir: "dist",
      entryFileNames: "tailwind.css.js"
    }
  }
]
