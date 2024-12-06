import postcss from 'rollup-plugin-postcss'
import { pluginsDefault } from '../default/index.js'

export const pluginsSharedUi = [
  postcss({
    modules: true,
    extract: 'styles.css',
    extensions: ['.scss', '.css'],
  }),
  ...pluginsDefault,
]
