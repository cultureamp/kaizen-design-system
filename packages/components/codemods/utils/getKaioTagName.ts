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

type ImportSpecifierNames = { tagName: string; originalName: string }

const getNamesFromSpecifier = (
  importSpecifier: ts.ImportSpecifier
): ImportSpecifierNames => {
  const tagName = importSpecifier.name.getText()
  const originalName = importSpecifier.propertyName
    ? importSpecifier.propertyName.getText()
    : tagName

  return { tagName, originalName }
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
      const { tagName, originalName } = getNamesFromSpecifier(importSpecifier)

      if (originalName === importSpecifierTarget) {
        alias = tagName
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
 * @returns Map<string, string> | undefined
 * - `Map<string, string>` where the key is the tag name (possibly an alias) and the value is the original component name
 * - `undefined` no imports that match the target
 */
export const getKaioTagNamesByRegex = (
  node: ts.Node,
  importSpecifierTarget: string
): Map<string, string> | undefined => {
  const tags = new Map<string, string>()

  const visitNode = (visitedNode: ts.Node): Map<string, string> | undefined => {
    const kaioNamedImports = getKaioNamedImports(visitedNode)

    if (!kaioNamedImports) {
      return ts.forEachChild(visitedNode, visitNode) || undefined
    }

    kaioNamedImports.forEach(importSpecifier => {
      const { tagName, originalName } = getNamesFromSpecifier(importSpecifier)

      if (new RegExp(importSpecifierTarget).test(originalName)) {
        tags.set(tagName, originalName)
      }
    })

    return tags.size === 0 ? undefined : tags
  }

  return visitNode(node)
}
