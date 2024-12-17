import { pluginsSharedUi, rollupConfig } from '@kaizen/package-bundler'

export default rollupConfig({
  input: {
    index: './src/index.ts',
    future: './src/__rc__/index.ts',
    actionsV1: './src/__actions__/v1.ts',
    actionsV2: './src/__actions__/v2.ts',
    actionsV3: './src/__actions__/v3.ts',
    overlaysV1: './src/v1-overlays.ts',
    overlaysV2: './src/v2-overlays.ts',
    overlaysV3: './src/v3-overlays.ts',
    utilitiesV3: './src/__utilities__/v3.ts',
    reactAriaV3: './src/__react-aria__/index.ts',
    reactAriaComponentsV3: './src/__react-aria-components__/index.ts',
  },
  plugins: pluginsSharedUi,
})
