import { pluginsSharedUi, rollupConfig } from '@cultureamp/package-bundler'
import svgr from '@svgr/rollup'

export default rollupConfig({
  input: {
    index: './src/index.ts',
    next: './src/__next__/index.ts',
    alpha: './src/__alpha__/index.ts',
    reactAriaKZ: './src/__libs__/react-aria/index.ts',
    reactAriaComponentsKZ: './src/__libs__/react-aria-components/index.ts',
    reactAriaV3: './src/__react-aria__/index.ts',
    reactAriaComponentsV3: './src/__react-aria-components__/index.ts',
  },
  plugins: [
    svgr({
      replaceAttrValues: {
        '#000': 'currentColor',
        '#000000': 'currentColor',
        'black': 'currentColor',
      },
      svgo: false,
    }),
    ...pluginsSharedUi,
  ],
})
