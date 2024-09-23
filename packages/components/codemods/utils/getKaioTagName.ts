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

const getNamesFromSpecifier = (
  importSpecifier: ts.ImportSpecifier
): { importName: string; tagName: string } => {
  const importName = importSpecifier.name.getText()
  const tagName = importSpecifier.propertyName
    ? importSpecifier.propertyName.getText()
    : importName

  return { importName, tagName }
}

/**
 * Recurses through AST to find the import name or alias in KAIO that matches the provided component name.
 *
 * @returns string | undefined
 * - `string` the import name or alias found
 * - `undefined` no import that matches the target
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
      const { importName, tagName } = getNamesFromSpecifier(importSpecifier)

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

/**
 * Recurses through AST to find all the import names or aliases in KAIO that match the provided regex.
 *
 * @returns string[] | undefined
 * - `string[]` the import names or aliases found
 * - `undefined` no imports that match the target
 */
export const getKaioTagNamesByRegex = (
  node: ts.Node,
  importSpecifierTarget: string
): string[] | undefined => {
  const tags: string[] = []

  const visitNode = (visitedNode: ts.Node): string[] | undefined => {
    const kaioNamedImports = getKaioNamedImports(visitedNode)

    if (!kaioNamedImports) {
      return ts.forEachChild(visitedNode, visitNode) || undefined
    }

    kaioNamedImports.forEach(importSpecifier => {
      const { importName, tagName } = getNamesFromSpecifier(importSpecifier)

      if (new RegExp(importSpecifierTarget).test(tagName)) {
        tags.push(importName)
      }
    })

    return tags.length === 0 ? undefined : tags
  }

  return visitNode(node)
}
