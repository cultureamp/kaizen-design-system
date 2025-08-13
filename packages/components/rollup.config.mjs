import { pluginsSharedUi, rollupConfig } from '@cultureamp/package-bundler'

export default rollupConfig({
  input: {
    index: './src/index.ts',
    next: './src/__next__/index.ts',
    alpha: './src/__alpha__/index.ts',
    reactAria: './src/__react-aria__/index.ts',
    reactAriaComponents: './src/__react-aria-components__/index.ts',
  },
  plugins: pluginsSharedUi,
})
