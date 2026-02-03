// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import path, { dirname, join } from 'path'
import type { StorybookConfig } from 'storybook'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

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
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath("storybook-addon-pseudo-states"),
    {
			name: '@storybook/addon-mcp',
			options: {
				toolsets: {
					dev: true, // Tools for story URL retrieval and UI building instructions (default: true)
					docs: true, // Tools for component manifest and documentation (default: true, requires experimental feature flag below 👇)
				},
				experimentalFormat: 'markdown', // Output format: 'markdown' (default) or 'xml'
			},
		},
    getAbsolutePath("@storybook/addon-docs")
  ],
	features: {
		experimentalComponentsManifest: true, // Enable manifest generation for the docs toolset, only supported in React-based setups.
	},
  framework: "@storybook/react-vite",
  core: {
    builder: {
      name: "@storybook/builder-vite",
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
    config?.plugins?.push(nodePolyfills({
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }))

    return config
  },
}
export default config
