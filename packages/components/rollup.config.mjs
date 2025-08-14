import { pluginsSharedUi, rollupConfig } from '@cultureamp/package-bundler'

export default rollupConfig({
  input: {
    index: './src/index.ts',
    next: './src/__next__/index.ts',
    alpha: './src/__alpha__/index.ts',
    reactAriaKZ: './src/__libs__/react-aria/index.ts',
    reactAriaComponentsKZ: './src/__libs__/react-aria-components/index.ts',
  },
  plugins: pluginsSharedUi,
})
