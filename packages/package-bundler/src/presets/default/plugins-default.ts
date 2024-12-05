import alias from '@rollup/plugin-alias'
import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { InputPluginOption } from 'rollup'
import ignore from 'rollup-plugin-ignore'
import { nodeExternals } from 'rollup-plugin-node-externals'

export const pluginsDefault = [
  nodeExternals({
    devDeps: true,
  }),
  // https://rollupjs.org/tools/#rollup-plugin-node-resolve
  // This is needed to ensure that css is compiled correctly.
  // Without this there is an alphabetised order in the dist CSS for subcomponents.
  // This can cause styles being overwritten by primitives, ie: BaseButton overwriting DropdownButton
  // https://cultureamp.slack.com/archives/C02NUQ27G56/p1713157055178419
  resolve({
    preferBuiltins: true,
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }),
  // This call to alias plugin will be additional to the above alias plugin call
  alias({
    entries: [
      // i18n-react-intl package attempts to import locales from this path.
      // When rollup attempts to import from the 'find' path, it will be
      // redirected to import from the replacement path (same as storybook webpack config).
      {
        find: '__@cultureamp/i18n-react-intl/locales',
        replacement: 'locales',
      },
    ],
  }),
  // These libraries aren't used in UI Library packages, and require polyfills to be set up
  // in consuming repos. Ignoring them here removes the need for extra setup in
  // consuming repos.
  ignore([
    'crypto',
    'fs',
    'http',
    'https',
    'module',
    'net',
    'os',
    'path',
    'stream',
    'tls',
    'tty',
    'v8',
    'worker_threads',
    'zlib',
  ]),
  babel({ babelHelpers: 'bundled' }),
  getBabelOutputPlugin({
    plugins: ['@babel/plugin-transform-react-pure-annotations', 'babel-plugin-pure-static-props'],
  }),
  // https://rollupjs.org/tools/#rollup-plugin-commonjs
  commonjs(),
] satisfies InputPluginOption[]
