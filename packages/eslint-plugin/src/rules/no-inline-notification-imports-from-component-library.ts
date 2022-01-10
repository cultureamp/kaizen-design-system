import { Rule } from "eslint"
import getCompleteObjectKeyRange from "../util/getCompleteObjectKeyRange"

// TODO - transform this rule into fixing all legacy packages, not just InlineNotification
// TODO - kaizen version awareness

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Fix breaking changes from @kaizen >=11.0.0. InlineNotification component moved from @kaizen/component-library to @kaizen/notification. See more at https://github.com/cultureamp/kaizen-design-system/blob/master/packages/component-library/CHANGELOG.md#1100-2021-08-30",
      category: "Possible Errors",
      recommended: true,
    },
    fixable: "code",
    schema: [],
  },
  create(context: Rule.RuleContext): Rule.NodeListener {
    const sourceCode = context.getSourceCode()
    return {
      VariableDeclarator(node) {
        // TS node.init.arguments check
        if (!node.init || node.init.type !== "CallExpression") return

        // Check the VariableDeclarator is invoking Node's require function
        // without this, `const foo = myFunction("@kaizen/component-library/InlineNotification") will
        // throw a false positive.
        if (
          node.init.callee.type !== "Identifier" ||
          node.init.callee.name !== "require"
        ) {
          return
        }

        if (node.init.arguments.length > 0) {
          node.init.arguments.forEach(arg => {
            if (arg.type !== "Literal" || typeof arg.value !== "string") return
            /**
             * Declare as simple variable
              {
                code:
                  "const InlineNotification = require('@kaizen/component-library/InlineNotification');",
                output:
                  "const InlineNotification = require('@kaizen/notification/InlineNotification');",
                errors: [{ message: /^Moved import/ }],
              },
             */
            if (
              arg.value.includes("@kaizen/component-library/InlineNotification")
            ) {
              context.report({
                message: `Unexpected moved import ${arg.value}`,
                node,
                fix(fixer) {
                  if (typeof arg.value === "string" && arg.raw) {
                    const newValue = arg.raw.replace(
                      "@kaizen/component-library/InlineNotification",
                      "@kaizen/notification/InlineNotification"
                    )
                    return fixer.replaceText(arg, newValue)
                  }
                  return null
                },
              })
            } else if (arg.value.includes("@kaizen/component-library")) {
              if (node.parent.type !== "VariableDeclaration") return
              if (node.parent.declarations.length === 0) return
              if (node.parent.declarations[0].id.type !== "ObjectPattern")
                return
              const inlineNotificationProperty = node.parent.declarations[0].id.properties.find(
                prop => {
                  if (prop.type !== "Property") return false
                  if (prop.key.type !== "Identifier") return false
                  if (prop.key.name === "InlineNotification") return true
                }
              )
              if (!inlineNotificationProperty) return
              if (inlineNotificationProperty.type !== "Property") return
              if (node.parent.declarations[0].id.properties.length > 1) {
                /**
                 * Declare as object spread pattern (Multiple)
                  {
                    code:
                      "const { Icon, InlineNotification, Heading } = require('@kaizen/component-library');",
                    output: `const { Icon, Heading } = require('@kaizen/component-library')
                             const { InlineNotification } = require('@kaizen/notification');`,
                    errors: [{ message: /^Moved import/ }],
                  },
                */
                context.report({
                  message: `Unexpected moved import ${arg.value}`,
                  node,
                  fix(fixer) {
                    if (typeof arg.value === "string" && arg.raw) {
                      if (!inlineNotificationProperty.key.range) return null

                      return [
                        fixer.removeRange(
                          getCompleteObjectKeyRange(
                            sourceCode,
                            inlineNotificationProperty
                          )
                        ),
                        fixer.insertTextAfter(
                          node.parent,
                          "\nconst { InlineNotification } = require('@kaizen/notification');"
                        ),
                      ]
                    }
                    return null
                  },
                })
              } else {
                /**
                 * Declare as object spread pattern (Single)
                  {
                    code:
                      "const { InlineNotification} = require('@kaizen/component-library');",
                    output: `const { InlineNotification } = require('@kaizen/notification');`,
                    errors: [{ message: /^Moved import/ }],
                  },
                */
                context.report({
                  message: `Unexpected moved import ${arg.value}`,
                  node,
                  fix(fixer) {
                    if (typeof arg.value === "string" && arg.raw) {
                      const newValue = arg.raw.replace(
                        "@kaizen/component-library",
                        "@kaizen/notification"
                      )
                      return fixer.replaceText(arg, newValue)
                    }
                    return null
                  },
                })
              }
            }
          })
        }
      },
      ImportDeclaration(node) {
        if (typeof node.source.value === "string") {
          if (
            node.source.value.includes(
              "@kaizen/component-library/InlineNotification"
            )
          ) {
            /**
             * Import as default export
              {
                code:
                  "import InlineNotification from '@kaizen/component-library/InlineNotification';",
                output:
                  "import InlineNotification from '@kaizen/notification/InlineNotification';",
                errors: [{ message: /moved import/ }],
              },
             */
            context.report({
              message: `Unexpected moved import ${node.source.value}`,
              node,
              fix(fixer) {
                if (typeof node.source.value === "string" && node.source.raw) {
                  const newValue = node.source.raw.replace(
                    "@kaizen/component-library/InlineNotification",
                    "@kaizen/notification/InlineNotification"
                  )
                  return fixer.replaceText(node.source, newValue)
                }
                return null
              },
            })
          } else if (node.source.value.includes("@kaizen/component-library")) {
            const inlineNotificationSpecifier = node.specifiers.find(s => {
              if (s.type !== "ImportSpecifier") return false
              if (s.local.name === "InlineNotification") return true
            })
            if (!inlineNotificationSpecifier) return
            if (node.specifiers.length > 1) {
              /**
               * Import as object spread pattern (Multiple)
                {
                  code:
                    "import { Icon, InlineNotification, Heading } from '@kaizen/component-library';",
                  output: `import { Icon, Heading } from '@kaizen/component-library';
                           import { InlineNotification } from '@kaizen/notification';`,
                  errors: [{ message: /moved import/ }],
                },
              */
              context.report({
                message: `Unexpected moved import ${node.source.value}`,
                node,
                fix(fixer) {
                  if (
                    typeof node.source.value === "string" &&
                    node.source.raw
                  ) {
                    if (!inlineNotificationSpecifier.range) return null
                    if (inlineNotificationSpecifier.type !== "ImportSpecifier")
                      return null

                    return [
                      fixer.removeRange(
                        getCompleteObjectKeyRange(
                          sourceCode,
                          inlineNotificationSpecifier
                        )
                      ),
                      fixer.insertTextAfter(
                        node.parent,
                        "\nimport { InlineNotification } from '@kaizen/notification';"
                      ),
                    ]
                  }
                  return null
                },
              })
            } else {
              /**
               * Import as object spread pattern (Single)
                {
                  code: "import { InlineNotification } from '@kaizen/component-library';",
                  output: "import { InlineNotification } from '@kaizen/notification';",
                  errors: [{ message: /moved import/ }],
                },
              */
              context.report({
                message: `Unexpected moved import ${node.source.value}`,
                node,
                fix(fixer) {
                  if (
                    typeof node.source.value === "string" &&
                    node.source.raw
                  ) {
                    const newValue = node.source.raw.replace(
                      "@kaizen/component-library",
                      "@kaizen/notification"
                    )
                    return fixer.replaceText(node.source, newValue)
                  }
                  return null
                },
              })
            }
          }
        }
      },
    }
  },
}
