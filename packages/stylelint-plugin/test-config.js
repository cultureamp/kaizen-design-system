const baseConfig = require("./dev-config")

module.exports = {
  ...baseConfig,
  rules: {
    "kaizen/no-tokens-in-variables": [
      true,
      { severity: "warning", disableFixing: false },
    ],
    ...baseConfig.rules,
  },
}
