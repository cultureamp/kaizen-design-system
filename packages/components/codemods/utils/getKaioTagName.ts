import ts from "typescript"

const getKaioNamedImports = (
  visitedNode: ts.Node
): ts.NodeArray<ts.ImportSpecifier> | undefined => {
  if (ts.isImportDeclaration(visitedNode)) {
    const moduleSpecifier = visitedNode.moduleSpecifier.getText()
    if (moduleSpecifier.includes("@kaizen/components")) {
      const namedBindings = visitedNode.importClause?.namedBindings
      if (namedBindings && ts.isNamedImports(namedBindings)) {
        return namedBindings.elements
      }
    }
  }

  return undefined
}

/*
Recurses through AST to find the import specifier name and check it against the `importSpecifierTarget`.
If found, it will return the import name or alias, otherwise will return `undefined`
*/
export const getKaioTagName = (
  node: ts.Node,
  importSpecifierTarget: string
): string | undefined => {
  let alias: string | undefined

  const visitNode = (visitedNode: ts.Node): string | undefined => {
    const kaioNamedImports = getKaioNamedImports(visitedNode)

    if (!kaioNamedImports) {
      return ts.forEachChild(visitedNode, visitNode) || undefined
    }

    kaioNamedImports.find(importSpecifier => {
      const importName = importSpecifier.name.getText()
      const tagName = importSpecifier.propertyName
        ? importSpecifier.propertyName.getText()
        : importName

      if (tagName === importSpecifierTarget) {
        alias = importName
        return true
      }

      return false
    })

    return alias
  }

  return visitNode(node)
}
