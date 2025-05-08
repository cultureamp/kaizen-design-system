import path, { dirname, join } from 'path'
import type { StorybookConfig } from '@storybook/react-vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: ['../../packages/**/*.mdx', '../../packages/**/*.stories.tsx', '../pages/**/*.mdx'],
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-links'),
    'storybook-addon-pseudo-states',
  ],
  framework: '@storybook/react-vite',
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: path.resolve(__dirname, '../../vite.config.ts'),
      },
    },
  },
  staticDirs: [
    {
      from: '../assets',
      to: '/static/media',
    },
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      include: ['../packages/**/*.tsx'],
      skipChildrenPropWithoutDoc: false,
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop): boolean => {
        if (prop.name === 'className') return true
        const isHTMLElementProp =
          prop.parent?.fileName.includes('node_modules/@types/react') ?? false
        return !isHTMLElementProp
      },
    },
  },
  viteFinal: (config) => {
    config?.plugins?.push(nodePolyfills())

    return config
  },
}
export default config
