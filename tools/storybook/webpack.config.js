const { rules } = require("@kaizen/webpack")

module.exports = ({ config }) => {
  rules.forEach(rule => config.module.rules.push(rule))
  config.resolve.extensions.push(".ts", ".tsx")
  return config
}
