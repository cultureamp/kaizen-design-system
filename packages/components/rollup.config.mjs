import { pluginsSharedUi, rollupConfig } from "@kaizen/package-bundler";

export default rollupConfig({
  input: { index: "./src/index.ts",
  future: "./src/__future__/index.ts",
  collectionsV1: "./src/collections/v1/index.ts",
  collectionsV2: "./src/collections/v2/index.ts",
  },
  plugins: pluginsSharedUi,
  alias: {
    entries: [
      { find: "~types", replacement: "src/types" },
      { find: "~utils", replacement: "src/utils" },
      { find: "~components", replacement: "src" },
    ],
  },
})
