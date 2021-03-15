// Abbreviated example
const stylelint = require("stylelint")

const ruleName = "kaizen/use-deprecated-component-library-helpers-scss-imports"
const messages = stylelint.utils.ruleMessages(ruleName, {
  deprecatedComponentLibraryColorImport:
    "@kaizen/component-library/styles/color.scss has been deprecated",
  deprecatedComponentLibraryTypeImport:
    "@kaizen/component-library/styles/type.scss has been deprecated",
  deprecatedComponentLibraryLayoutImport:
    "@kaizen/component-library/styles/layout.scss has been deprecated",
})

module.exports = stylelint.createPlugin(
  ruleName,
  function (primaryOption, secondaryOptionObject) {
    return function (postcssRoot, postcssResult) {
      const validOptions = stylelint.utils.validateOptions(
        postcssResult,
        ruleName,
        {
          /* .. */
        }
      )

      if (!validOptions) {
        return
      }

      if (postcssRoot.source.lang !== "scss") {
        return
      }
      // console.log(postcssRoot)
      // console.log(postcssRoot.source.input.css)
      // console.log(postcssRoot.source.lang)

      // console.log("running stylelint plugin by michael")

      for (node of postcssRoot.nodes) {
        if (
          node.type === "atrule" &&
          node.name === "import" &&
          node.params === '"~@kaizen/component-library/styles/color"'
        ) {
          stylelint.utils.report({
            message: messages.deprecatedComponentLibraryColorImport,
            node,
            result: postcssResult,
            ruleName,
          })
        }
      }

      // ... some logic ...
    }
  }
)

module.exports.ruleName = ruleName
module.exports.messages = messages
