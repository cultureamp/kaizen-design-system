import ts from 'typescript'

type ImportModuleNamedImports = {
  importModuleName: string
  namedImports: ts.NodeArray<ts.ImportSpecifier>
}

const getKaioNamedImports = (visitedNode: ts.Node): ImportModuleNamedImports | undefined => {
  if (ts.isImportDeclaration(visitedNode)) {
    const moduleSpecifier = (visitedNode.moduleSpecifier as ts.StringLiteral).text
    if (moduleSpecifier.includes('@kaizen/components')) {
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

const getNamesFromSpecifier = (importSpecifier: ts.ImportSpecifier): ImportSpecifierNames => {
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
      return ts.forEachChild(visitedNode, visitNode)
    }

    kaioNamedImports.namedImports.find((importSpecifier) => {
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
 * Key is the tag name (component name or alias)
 * Value is the original component name
 */
type TagNamesMap = Map<string, string>
/** Key is the import module name (eg. `@kaizen/components/future`) */
export type ImportModuleRegexTagNamesMap = Map<string, TagNamesMap>

/**
 * Recurses through AST to find all the import names or aliases in KAIO that match the provided regex pattern.
 *
 * @returns Map<string, Map<string, string>> | undefined
 * - `Map<string, Map<string, string>>` = Map<importModuleName, Map<tagName, originalName>>
 *   - `importModuleName` = the module name of the KAIO import (eg. `@kaizen/components/future`)
 *   - `tagName` = the component name or alias (eg. `KaizenWell`)
 *   - `originalName` = the original component name (eg. `Well`)
 * - `undefined` no imports that match the target
 */
export const getKaioTagNamesMapByRegex = (
  node: ts.Node,
  importSpecifierPattern: RegExp | string,
): ImportModuleRegexTagNamesMap | undefined => {
  const tagsByImportModuleName = new Map() as ImportModuleRegexTagNamesMap

  const visitNode = (visitedNode: ts.Node): ts.Node | undefined => {
    const kaioNamedImports = getKaioNamedImports(visitedNode)

    if (!kaioNamedImports) {
      return ts.forEachChild(visitedNode, visitNode)
    }

    const tags = new Map() as TagNamesMap
    kaioNamedImports.namedImports.forEach((namedImport) => {
      const { tagName, originalName } = getNamesFromSpecifier(namedImport)

      if (new RegExp(importSpecifierPattern).test(originalName)) {
        tags.set(tagName, originalName)
      }
    })

    if (tags.size > 0) {
      tagsByImportModuleName.set(kaioNamedImports.importModuleName, new Map(tags))
    }

    return ts.forEachChild(visitedNode, visitNode)
  }

  visitNode(node)

  return tagsByImportModuleName.size === 0 ? undefined : tagsByImportModuleName
}

type TagImportAttributes = {
  // Import module name (eg. `@kaizen/components/future`)
  importModuleName: string
  // Component name or alias
  tagName: string
  // Original component name
  originalName: string
}
/** Key is the tag name (component name or alias) */
export type TagImportAttributesMap = Map<string, TagImportAttributes>

/**
 * Recurses through AST to find all the import names or aliases in KAIO that exactly match the provided string.
 */
export const getKaioTagNamesMapByString = (
  node: ts.Node,
  importSpecifier: string,
): TagImportAttributesMap | undefined => {
  const tagsMap = new Map() as TagImportAttributesMap

  const visitNode = (visitedNode: ts.Node): ts.Node | undefined => {
    const kaioNamedImports = getKaioNamedImports(visitedNode)

    if (!kaioNamedImports) {
      return ts.forEachChild(visitedNode, visitNode)
    }

    kaioNamedImports.namedImports.find((namedImport) => {
      const { originalName, tagName } = getNamesFromSpecifier(namedImport)

      if (importSpecifier === originalName) {
        tagsMap.set(tagName, {
          importModuleName: kaioNamedImports.importModuleName,
          tagName,
          originalName,
        })
        return true
      }

      return false
    })

    return ts.forEachChild(visitedNode, visitNode)
  }

  visitNode(node)

  return tagsMap.size === 0 ? undefined : tagsMap
}
