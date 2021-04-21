// A separate config is needed because we want to read SCSS files normally (ignore moduleNameMapper)
const baseConfig = require("../../jest.config")
module.exports = {
  ...baseConfig,
  moduleNameMapper: {},
}
