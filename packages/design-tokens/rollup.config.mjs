import { pluginsDefault, rollupConfig } from '@kaizen/package-bundler'

export default rollupConfig({
  input: { index: './src/index.ts' },
  plugins: pluginsDefault,
})
