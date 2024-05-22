import { pluginsSharedUi, rollupConfig } from "@kaizen/package-bundler";

export default rollupConfig({
  input: { index: "./src/index.ts", future: "./src/__future__/index.ts" },
  plugins: pluginsSharedUi,
  alias: {
    entries: [
      { find: "~types", replacement: "src/types" },
      { find: "~utils", replacement: "src/utils" },
      { find: "~components", replacement: "src" },
    ],
  },
})
