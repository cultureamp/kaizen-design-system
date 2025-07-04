import { pluginsSharedUi, rollupConfig } from '@cultureamp/package-bundler'

export default rollupConfig({
  input: {
    index: './src/index.ts',
    future: './src/__next__/index.ts',
    next: './src/__next__/index.ts',
    actionsV1: './src/v1-actions.ts',
    actionsV2: './src/v2-actions.ts',
    actionsV3: './src/v3-actions.ts',
    overlaysV1: './src/v1-overlays.ts',
    overlaysV2: './src/v2-overlays.ts',
    overlaysV3: './src/v3-overlays.ts',
    utilitiesV3: './src/index.ts',
    reactAriaV3: './src/__react-aria__/index.ts',
    reactAriaComponentsV3: './src/__react-aria-components__/index.ts',
    alpha: './src/__alpha__/index.ts',
  },
  plugins: pluginsSharedUi,
})
