import { pluginsDefault, rollupConfig } from "@kaizen/package-bundler"

export default rollupConfig({
  input: { index: "./src/index.ts" },
  plugins: pluginsDefault,
  alias: {
    entries: [
      { find: "~types", replacement: "src/types" },
      { find: "~utils", replacement: "src/utils" },
      { find: "~components", replacement: "src" },
    ],
  },
})
