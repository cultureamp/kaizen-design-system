import { pluginsSharedUi, rollupConfig } from "@kaizen/package-bundler"

export default rollupConfig({
  input: {
    index: "./src/index.ts",
    future: "./src/__future__/index.ts",
    actionsV1: "./src/__actions__/v1.ts",
    actionsV2: "./src/__actions__/v2.ts",
    actionsV3: "./src/__actions__/v3.ts",
    containersV1: "./src/__containers__/v1.ts",
    containersV2: "./src/__containers__/v2.ts",
    illustrationsV3: "./src/__illustrations__/v3.ts",
    layoutV1: "./src/__layout__/v1.ts",
    layoutV2: "./src/__layout__/v2.ts",
    layoutV3: "./src/__layout__/v3.ts",
    overlaysV1: "./src/__overlays__/v1.ts",
    overlaysV2: "./src/__overlays__/v2.ts",
    overlaysV3: "./src/__overlays__/v3.ts",
    utilitiesV3: "./src/__utilities__/v3.ts",
    reactAriaV3: "./src/__react-aria__/index.ts",
    reactAriaComponentsV3: "./src/__react-aria-components__/index.ts",
  },
  plugins: pluginsSharedUi,
  alias: {
    entries: [{ find: "~components", replacement: "src" }],
  },
})
