import { pluginsSharedUi, rollupConfig } from '@cultureamp/package-bundler'
// import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const logCssToFilePlugin = () => {
  const logFile = path.resolve(__dirname, 'css-order.log')

  return {
    name: 'log-css-to-file',

    buildStart() {
      const header = `CSS Order Log for build started at: ${new Date().toISOString()}\n\n`
      fs.writeFileSync(logFile, header)
      console.log(`[CSS Logger] Cleared and prepared log file at: ${logFile}`)
    },

    transform(code, id) {
      if (/\.(css|scss|sass|less)$/.test(id)) {
        fs.appendFileSync(logFile, `${id}\n`)
      }

      return null
    },

    buildEnd() {
      console.log(`[CSS Logger] Finished logging CSS order. You can inspect the log at: ${logFile}`)
    },
  }
}

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
  plugins: [
    logCssToFilePlugin(),
    ...pluginsSharedUi,
    // visualizer({
    //   filename: 'bundle-stats.html', // Output file name
    //   open: true, // Automatically open it in your browser
    // }),
  ],
})
