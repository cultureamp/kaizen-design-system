/* eslint-disable object-shorthand */
/* eslint-disable space-before-function-paren  */
module.exports = {
  type: "suggestion",
  docs: {
    description: "disallow imports of draft components",
    category: "Possible Errors",
    recommended: true,
  },
  schema: [],
  // eslint-disable-next-line space-before-function-paren
  create: function (context) {
    return {
      VariableDeclarator: function (node) {
        if (node.init.arguments.length > 0) {
          if (node.init.arguments[0].raw.includes("@kaizen/draft")) {
            context.report(node, "Unexpected draft import");
          }
        }
      },
      ImportDeclaration: function (node) {
        if (node.source.value.includes("@kaizen/draft")) {
          context.report(node, "Unexpected draft import");
        }
      }
    }
  }
};

