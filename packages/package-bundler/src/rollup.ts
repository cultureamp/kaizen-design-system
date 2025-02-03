import fs from 'fs'
import path from 'path'
import typescript from '@rollup/plugin-typescript'
import merge from 'lodash.merge'
import { type InputPluginOption, type RollupOptions } from 'rollup'
import { pluginsDefault } from './presets/index.js'
import { rollupTailwindConfig } from './presets/shared-ui/rollup-tailwind.js'

export const rollupConfig = (
  userConfig: RollupOptions = {
    input: { index: './src/index.ts' },
    plugins: pluginsDefault as InputPluginOption[],
  },
): RollupOptions[] => {
  // CommonJS
  const cjsConfig: RollupOptions = merge(
    {
      plugins: [
        typescript({
          tsconfig: './tsconfig.dist.json',
          compilerOptions: {
            esModuleInterop: false,
            allowSyntheticDefaultImports: true,
          },
        }),
      ],
      output: {
        dir: 'dist/cjs',
        format: 'commonjs',
        preserveModules: true,
        entryFileNames: '[name].cjs',
        interop: 'auto',
      },
    },
    userConfig,
  )

  // ESModules
  const esmConfig: RollupOptions = merge(
    {
      plugins: [
        typescript({
          tsconfig: './tsconfig.dist.json',
          compilerOptions: {
            declaration: true,
            declarationDir: 'dist/esm/_tmp/types',
            noEmit: false,
            plugins: [
              { transform: 'typescript-transform-paths' },
              {
                transform: 'typescript-transform-paths',
                afterDeclarations: true,
              },
            ],
          },
        }),
      ],
      output: {
        dir: 'dist/esm',
        format: 'esm',
        preserveModules: true,
        entryFileNames: '[name].mjs',
      },
    },
    userConfig,
  )

  const hasTailwind = fs.existsSync(path.resolve(process.cwd(), './tailwind.config.js'))

  return hasTailwind ? [cjsConfig, esmConfig, ...rollupTailwindConfig()] : [cjsConfig, esmConfig]
}
