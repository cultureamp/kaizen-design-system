import stylelint from "stylelint"
import { AtRule } from "postcss"
const ruleName = "kaizen/use-deprecated-component-library-helpers-scss-imports"
const messages = stylelint.utils.ruleMessages(ruleName, {
  deprecatedComponentLibraryColorImport:
    "@kaizen/component-library/styles/color.scss has been deprecated",
  deprecatedComponentLibraryTypeImport:
    "@kaizen/component-library/styles/type.scss has been deprecated",
  deprecatedComponentLibraryLayoutImport:
    "@kaizen/component-library/styles/layout.scss has been deprecated",
})

type ImportToReplace = {
  oldImport: string
  newImport: string
  message: any
}

const importsToReplace: ImportToReplace[] = [
  {
    oldImport: '"~@kaizen/component-library/styles/type"',
    newImport: '"~@kaizen/deprecated-component-library-helpers/styles/type"',
    message: messages.deprecatedComponentLibraryTypeImport,
  },
  {
    oldImport: '"~@kaizen/component-library/styles/color"',
    newImport: '"~@kaizen/deprecated-component-library-helpers/styles/color"',
    message: messages.deprecatedComponentLibraryColorImport,
  },
  {
    oldImport: '"~@kaizen/component-library/styles/layout"',
    newImport: '"~@kaizen/deprecated-component-library-helpers/styles/layout"',
    message: messages.deprecatedComponentLibraryLayoutImport,
  },
]

const makeRuleFunction = (
  primaryOption: any,
  secondaryOptionsObject: any,
  context: any
) => (postcssRoot: any, postcssResult: any) => {
  const validOptions = stylelint.utils.validateOptions(postcssResult, ruleName)

  if (!validOptions) {
    return
  }

  for (const importToReplace of importsToReplace) {
    replaceImport(context, postcssRoot, postcssResult, importToReplace)
  }
}

const replaceImport = (
  context: any,
  postcssRoot: any,
  postcssResult: any,
  { oldImport, newImport, message }: ImportToReplace
) => {
  const importsToProcess: AtRule[] = []
  let containsOldImport = false
  postcssRoot.walkAtRules((node: AtRule) => {
    if (node.name === "import") {
      if ([oldImport, newImport].includes(node.params)) {
        importsToProcess.push(node)
        if (node.params.includes(oldImport)) {
          containsOldImport = true
          if (!context.fix) {
            stylelint.utils.report({
              message,
              node,
              result: postcssResult,
              ruleName,
            })
          }
        }
      }
    }
  })

  if (context.fix && containsOldImport) {
    const [lastImport, ...importsToRemove] = importsToProcess.reverse()

    // the last import, whether it's an old or new import, should be
    // changed to a new import
    lastImport.params = newImport

    for (const importToRemove of importsToRemove) {
      // we only want one import, so remove all earlier imports
      importToRemove.remove()
    }
  }
}

module.exports = stylelint.createPlugin(ruleName, makeRuleFunction)

module.exports.ruleName = ruleName
module.exports.messages = messages
