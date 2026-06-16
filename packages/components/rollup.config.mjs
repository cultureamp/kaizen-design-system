import { pluginsSharedUi, rollupConfig } from '@cultureamp/package-bundler'
import svgr from '@svgr/rollup'

const iconTemplate = (variables, { tpl }) => tpl`
  import * as React from 'react';
  import type { FC, SVGProps } from 'react';

  export interface Props extends SVGProps<SVGSVGElement> {
    color?: string;
    size?: number;
  }

  export const ${variables.componentName}: FC<Props> = ({ size = 24, color = 'currentColor', ...props }) => (
    ${variables.jsx}
  );
`

export default rollupConfig({
  input: {
    index: './src/index.ts',
    next: './src/__next__/index.ts',
    alpha: './src/__alpha__/index.ts',
    reactAriaKZ: './src/__libs__/react-aria/index.ts',
    reactAriaComponentsKZ: './src/__libs__/react-aria-components/index.ts',
    reactAriaV3: './src/__react-aria__/index.ts',
    reactAriaComponentsV3: './src/__react-aria-components__/index.ts',
  },
  plugins: [
    svgr({
      include: '**/custom-icons/*.svg',
      replaceAttrValues: {
        '#000': 'currentColor',
        '#000000': 'currentColor',
      },
      svgo: false,
      typescript: true,
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
    }),
    ...pluginsSharedUi,
  ],
})
