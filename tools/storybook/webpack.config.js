const { extensions, rules } = require("@kaizen/webpack")

const removeSvgFromTest = rule => {
  if (rule.test.toString().includes("svg")) {
    const test = rule.test
      .toString()
      .replace("svg|", "")
      .replace(/\//g, "")
    return { ...rule, test: new RegExp(test) }
  } else {
    return rule
  }
}

module.exports = ({ config }) => {
  // Storybook's base config applies file-loader to svgs
  config.module.rules = config.module.rules.map(removeSvgFromTest)
  config.module.rules.push(...rules)
  config.resolve.extensions.push(...extensions)
  return config
}
