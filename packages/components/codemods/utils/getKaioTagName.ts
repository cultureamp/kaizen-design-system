import ts from "typescript"

const getKaioNamedImports = (
  visitedNode: ts.Node,
):
  | {
      importModuleName: string
      namedImports: ts.NodeArray<ts.ImportSpecifier>
    }
  | undefined => {
  if (ts.isImportDeclaration(visitedNode)) {
    const moduleSpecifier = (visitedNode.moduleSpecifier as ts.StringLiteral)
      .text
    if (moduleSpecifier.includes("@kaizen/components")) {
      const namedBindings = visitedNode.importClause?.namedBindings
      if (namedBindings && ts.isNamedImports(namedBindings)) {
        return {
          importModuleName: moduleSpecifier,
          namedImports: namedBindings.elements,
        }
      }
    }
  }

  return undefined
}

type ImportSpecifierNames = { tagName: string; originalName: string }

const getNamesFromSpecifier = (
  importSpecifier: ts.ImportSpecifier,
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
  importSpecifierTarget: string,
): string | undefined => {
  let alias: string | undefined

  const visitNode = (visitedNode: ts.Node): string | undefined => {
    const kaioNamedImports = getKaioNamedImports(visitedNode)

    if (!kaioNamedImports) {
      return ts.forEachChild(visitedNode, visitNode) || undefined
    }

    kaioNamedImports.namedImports.find(importSpecifier => {
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

// Key is the tag name (component name or alias)
// Value is the original component name
type TagNamesMap = Map<string, string>
// Key is the import module name (eg. `@kaizen/components/future`)
export type ImportModuleNameTagsMap = Map<string, TagNamesMap>

/**
 * Recurses through AST to find all the import names or aliases in KAIO that match the provided regex.
 *
 * @returns Map<string, Map<string, string>> | undefined
 * - `Map<string, Map<string, string>>` = Map<importModuleName, Map<tagName, originalName>>
 *   - `importModuleName` = the module name of the KAIO import (eg. `@kaizen/components/future`)
 *   - `tagName` = the component name or alias (eg. `KaizenWell`)
 *   - `originalName` = the original component name (eg. `Well`)
 * - `undefined` no imports that match the target
 */
export const getKaioTagNamesByRegex = (
  node: ts.Node,
  importSpecifierPattern: RegExp | string,
): ImportModuleNameTagsMap | undefined => {
  const tagsByImportModuleName = new Map() as ImportModuleNameTagsMap

  const visitNode = (visitedNode: ts.Node): ts.Node | undefined => {
    const kaioNamedImports = getKaioNamedImports(visitedNode)

    if (!kaioNamedImports) {
      return ts.forEachChild(visitedNode, visitNode)
    }

    const tags = new Map() as TagNamesMap
    kaioNamedImports.namedImports.forEach(importSpecifier => {
      const { tagName, originalName } = getNamesFromSpecifier(importSpecifier)

      if (new RegExp(importSpecifierPattern).test(originalName)) {
        tags.set(tagName, originalName)
      }
    })

    if (tags.size > 0) {
      tagsByImportModuleName.set(
        kaioNamedImports.importModuleName,
        new Map(tags),
      )
    }

    return ts.forEachChild(visitedNode, visitNode)
  }

  visitNode(node)

  return tagsByImportModuleName.size === 0 ? undefined : tagsByImportModuleName
}
