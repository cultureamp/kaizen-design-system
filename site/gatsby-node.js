const { babelLoaderOptions, extensions } = require("@kaizen/webpack")

exports.onCreateWebpackConfig = ({ actions, loaders }) => {
  const babelLoader = loaders.js()
  if (!babelLoader) return
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: babelLoader,
        },
      ],
    },
  })
}

exports.onCreateBabelConfig = ({ actions }, options) => {
  const { presets, plugins } = babelLoaderOptions
  presets.forEach(preset => {
    actions.setBabelPreset({ name: require.resolve(preset), options })
  })
  plugins.forEach(plugin => {
    actions.setBabelPlugin({ name: require.resolve(plugin), options })
  })
}

exports.resolvableExtensions = () => extensions
