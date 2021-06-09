// This is an entrypoint file that you can use in Kaizen's stylelint config (see also dev-config.js).
// This enables us to use the typescript source of the plugin in this repo, rather than relying on a compiled version.
require("ts-node").register({
  project: require.resolve("./tsconfig.json"),
  transpileOnly: true,
})
module.exports = require("./src/stylelintPlugin")
