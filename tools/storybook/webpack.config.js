const { extensions, rules } = require("@kaizen/webpack")

module.exports = ({ config }) => {
  config.module.rules.push(...rules)
  config.resolve.extensions.push(...extensions)
  return config
}
