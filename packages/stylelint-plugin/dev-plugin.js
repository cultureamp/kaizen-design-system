// This is an entrypoint file that you can use in your stylelint.config.js plugins list for local development.
// The main reason for this is so the plugin works in CI
require("ts-node").register({
  project: require.resolve("./tsconfig.json"),
  transpileOnly: true,
})
module.exports = require("./src/index")
