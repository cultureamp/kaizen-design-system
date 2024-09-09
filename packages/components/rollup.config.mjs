import { pluginsSharedUi, rollupConfig } from "@kaizen/package-bundler"

export default rollupConfig({
  input: {
    index: "./src/index.ts",
    future: "./src/__future__/index.ts",
    actionsV1: "./src/__actions__/v1.ts",
    actionsV2: "./src/__actions__/v2.ts",
    actionsV3: "./src/__actions__/v3.ts",
    layoutV1: "./src/__layout__/v1.ts",
    layoutV2: "./src/__layout__/v2.ts",
    layoutV3: "./src/__layout__/v3.ts",
    // Maps to Tooltip as it was the only component in overlays
    overlaysV1: "./src/Tooltip/index.ts",
    overlaysV2: "./src/Tooltip/index.ts",
    overlaysV3: "./src/__future__/Tooltip/index.ts",
    utilitiesV3: "./src/__utilities__/v3.ts",
    reactAriaV3: "./src/__react-aria__/index.ts",
    reactAriaComponentsV3: "./src/__react-aria-components__/index.ts",
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
