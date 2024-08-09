import ts from "typescript"

/** Recurses through AST to find the import specifier name and check it against the `importSpecifierTarget`. If found, it will return the import name or alias, otherwise will return `undefined` */
export const getTagName = (
  node: ts.Node,
  importSpecifierTarget: string
): string | undefined => {
  let alias: string | undefined

  const visitNode = (visitedNode: ts.Node): string | undefined => {
    if (ts.isImportDeclaration(visitedNode)) {
      const moduleSpecifier = visitedNode.moduleSpecifier.getText()
      if (moduleSpecifier.includes("@kaizen/components")) {
        const namedBindings = visitedNode.importClause?.namedBindings
        if (namedBindings && ts.isNamedImports(namedBindings)) {
          namedBindings.elements.forEach(importSpecifier => {
            const importName = importSpecifier.name.getText()
            const tagName = importSpecifier.propertyName
              ? importSpecifier.propertyName.getText()
              : importName
            if (tagName === importSpecifierTarget) {
              alias = importName
            }
          })
        }
      }
    }
    return alias || ts.forEachChild(visitedNode, visitNode) || undefined
  }

  return visitNode(node)
}
