// This is an entrypoint file that you can use in Kaizen's stylelint.config.js.
// This enables us to use the typescript source of the plugin in this repo, rather than relying on a compiled version.
require("ts-node").register({
  project: require.resolve("./tsconfig.json"),
  transpileOnly: true,
})

const rules = require("./src/index").kaizenStylelintRules

module.exports = {
  plugins: [require.resolve("./dev-plugin.js")],
  rules,
}
