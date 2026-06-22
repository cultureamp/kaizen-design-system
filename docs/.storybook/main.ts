import path, { dirname, join } from 'path'
import type { StorybookConfig } from '@storybook/react-vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import svgr from 'vite-plugin-svgr'

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

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const iconTemplate = (variables: any, { tpl }: any) => tpl`
      import * as React from 'react';
      const ${variables.componentName} = ({ size = 24, color = 'currentColor', ...props }) => (
        ${variables.jsx}
      );
      export default ${variables.componentName};
    `

    config?.plugins?.push(
      svgr({
        include: '**/custom-icons/*.svg',
        svgrOptions: {
          replaceAttrValues: {
            '#000': 'currentColor',
            '#000000': 'currentColor',
          },
          template: iconTemplate,
          jsx: {
            babelConfig: {
              plugins: [
                [
                  '@svgr/babel-plugin-add-jsx-attribute',
                  {
                    elements: ['svg'],
                    attributes: [
                      { name: 'width', value: 'size', literal: true, position: 'start' },
                      { name: 'height', value: 'size', literal: true, position: 'start' },
                      { name: 'color', value: 'color', literal: true, position: 'start' },
                    ],
                  },
                ],
              ],
            },
          },
        },
      }),
    )

    return config
  },
}
export default config
