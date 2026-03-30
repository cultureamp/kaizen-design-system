import cssnano from 'cssnano'
import postcssImport from 'postcss-import'

export default {
  plugins: [postcssImport, cssnano({ preset: 'default' })],
}
