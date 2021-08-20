import { Rule } from "eslint";

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "disallow imports of draft components",
      category: "Possible Errors",
      recommended: true,
    },
    fixable: "code",
    schema: [],
  },
  create(context: Rule.RuleContext): Rule.NodeListener {
    return {
      VariableDeclarator(node) {
        if (!node.init || node.init.type !== "CallExpression") return
        if (node.init.arguments.length > 0) {
          node.init.arguments.forEach(arg => {
            if (arg.type !== "Literal" || typeof arg.value !== "string") return;
            if (arg.value.includes("@kaizen/draft")) {
              context.report({
                message: `Unexpected draft import ${arg.value}`,
                node,
                fix(fixer) {
                  if (typeof arg.value === "string" && arg.raw) {
                    const newValue = arg?.raw.replace("kaizen/draft-", "kaizen/")
                    return fixer.replaceText(arg, newValue)
                  }

                  return null
                }
              })
            }
          })
        }
      },
      ImportDeclaration(node) {
        if (typeof node.source.value === "string" && node.source.value.includes("@kaizen/draft")) {
          context.report({
            message: "Unexpected draft import",
            node,
            fix(fixer) {
              if (typeof node.source.value === "string") {
                const newValue = node.source.value.replace("kaizen/draft-", "kaizen/")
                return fixer.replaceText(node.source, newValue)
              }

              return null
            }
          })
        }
      }
    }
  }
};

