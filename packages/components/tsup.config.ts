/* eslint-disable import/no-extraneous-dependencies */
// import { aliasPath } from "esbuild-plugin-alias-path"
import { sassPlugin, postcssModules } from "esbuild-sass-plugin"
import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/**/*.ts"],
  format: ["cjs", "esm"],
  splitting: true,
  dts: true,
  clean: true,
  //   legacyOutput: true,
  esbuildPlugins: [
    sassPlugin({
      cssImports: true,
      transform: postcssModules({
        generateScopedName: "[name]__[local]___[hash:base64:5]",
        exportGlobals: true,
      }),
    }),
  ],
})

// esbuildPlugins: [
//   aliasPath({
//     alias: { "__@cultureamp/i18n-react-intl/locales": "./locales" },
//   }),
// ],
// plugins: [
//     aliasPath({
//       alias: { '@foo': './src/alias/foo.ts' },
//     }),
//   ],

// import { defineConfig } from 'tsup'

// export default defineConfig({
//   esbuildPlugins: [YourPlugin],
//   esbuildOptions(options, context) {
//     options.define.foo = '"bar"'
//   },
// })
