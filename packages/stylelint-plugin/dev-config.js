// This is an entrypoint file that you can use in Kaizen's stylelint.config.js.
// This enables us to use the typescript source of the plugin in this repo, rather than relying on a compiled version.
require("ts-node").register({
  project: require.resolve("./tsconfig.json"),
  transpileOnly: true,
})

const defaultConfig = require("./src/index")

module.exports = {
  ...defaultConfig,
  // Overwrite "plugins" with the dev-plugin that also registers ts-node
  plugins: [require.resolve("./dev-plugin.js")],
}
