import ts from 'typescript'

type ImportModuleNamedImports = {
  importModuleName: string
  namedImports: ts.NodeArray<ts.ImportSpecifier>
}

const getKaioNamedImports = (
  visitedNode: ts.Node,
  importSource?: string,
): ImportModuleNamedImports | undefined => {
  if (ts.isImportDeclaration(visitedNode)) {
    const moduleSpecifier = (visitedNode.moduleSpecifier as ts.StringLiteral).text
    const hasMatch = importSource
      ? moduleSpecifier === importSource
      : moduleSpecifier.includes('@kaizen/components')

    if (hasMatch) {
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
  componentName: string,
  importSource?: string,
): string | undefined => {
  let alias: string | undefined

  const visitNode = (visitedNode: ts.Node): string | undefined => {
    const kaioNamedImports = getKaioNamedImports(visitedNode, importSource)

    if (!kaioNamedImports) {
      return ts.forEachChild(visitedNode, visitNode)
    }

    kaioNamedImports.namedImports.find((importSpecifier) => {
      const { tagName, originalName } = getNamesFromSpecifier(importSpecifier)

      if (originalName === componentName) {
        alias = tagName
        return true
      }

      return false
    })

    return alias
  }

  return visitNode(node)
}

type TagImportAttributes = {
  // Import module name (eg. `@kaizen/components/next`)
  importModuleName: string
  // Component name or alias
  tagName: string
  // Original component name
  originalName: string
}
/** Key is the tag name (component name or alias) */
export type TagImportAttributesMap = Map<string, TagImportAttributes>

/**
 * Recurses through AST to find all the import names or aliases in KAIO that exactly match the provided strings.
 */
const getKaioTagNamesMap = (
  node: ts.Node,
  onFilterAndUpdateTagsMap: (
    kaioNamedImports: ImportModuleNamedImports,
    checkAndUpdateTagsMap: (
      namedImport: ts.ImportSpecifier,
      checkToAddToMap: (originalName: string) => boolean,
    ) => void,
  ) => void,
): TagImportAttributesMap | undefined => {
  const tagsMap = new Map() as TagImportAttributesMap

  const visitNode = (visitedNode: ts.Node): ts.Node | undefined => {
    const kaioNamedImports = getKaioNamedImports(visitedNode)

    if (!kaioNamedImports) {
      return ts.forEachChild(visitedNode, visitNode)
    }

    onFilterAndUpdateTagsMap(kaioNamedImports, (namedImport, checkToAddToMap) => {
      const { originalName, tagName } = getNamesFromSpecifier(namedImport)

      if (checkToAddToMap(originalName)) {
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

/**
 * Recurses through AST to find all the import names or aliases in KAIO that exactly match the provided strings.
 */
export const getKaioTagNamesMapByComponentName = (
  node: ts.Node,
  importSpecifiers: string[],
): TagImportAttributesMap | undefined => {
  return getKaioTagNamesMap(node, (kaioNamedImports, checkAndUpdateTagsMap) => {
    importSpecifiers.forEach((importSpecifier) => {
      kaioNamedImports.namedImports.find((namedImport) => {
        checkAndUpdateTagsMap(namedImport, (originalName) => originalName === importSpecifier)
      })
    })
  })
}

/**
 * Recurses through AST to find all the import names or aliases in KAIO that match the provided regex pattern.
 */
export const getKaioTagNamesMapByPattern = (
  node: ts.Node,
  importSpecifierPattern: RegExp | string,
): TagImportAttributesMap | undefined => {
  return getKaioTagNamesMap(node, (kaioNamedImports, checkAndUpdateTagsMap) => {
    kaioNamedImports.namedImports.forEach((namedImport) => {
      checkAndUpdateTagsMap(namedImport, (originalName) =>
        new RegExp(importSpecifierPattern).test(originalName),
      )
    })
  })
}
