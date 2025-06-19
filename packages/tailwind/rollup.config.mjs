import { pluginsDefault, rollupConfig } from '@cultureamp/package-bundler'

export default rollupConfig({
  input: { index: './src/index.ts' },
  plugins: pluginsDefault,
})
