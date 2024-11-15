import ts from "typescript"

type ImportsToRemove = Set<string>

const removeNamedImports = (
  factory: ts.NodeFactory,
  node: ts.ImportDeclaration,
  importsToRemove: ImportsToRemove
): ts.ImportDeclaration | null => {
  const namedBindings = node.importClause?.namedBindings
  if (namedBindings && ts.isNamedImports(namedBindings)) {
    const namedImports = namedBindings.elements.filter(importSpecifier => {
      const componentName =
        importSpecifier.propertyName?.getText() ??
        importSpecifier.name.getText()
      return !importsToRemove.has(componentName)
    })

    if (namedImports.length === 0) return null

    return factory.updateImportDeclaration(
      node,
      node.modifiers,
      factory.updateImportClause(
        node.importClause,
        node.importClause.isTypeOnly,
        node.importClause.name,
        factory.updateNamedImports(namedBindings, namedImports)
      ),
      node.moduleSpecifier,
      node.attributes
    )
  }

  return node
}

type NewImportAttributes = { componentName: string; alias?: string }
type ImportsToAdd = Map<string, NewImportAttributes>

const createImportDeclaration = (
  factory: ts.NodeFactory,
  importsToAdd: ImportsToAdd,
  moduleSpecifier: string
): ts.ImportDeclaration => {
  const namedImports = Array.from(importsToAdd.values()).map(
    ({ componentName, alias }) =>
      factory.createImportSpecifier(
        false,
        alias ? factory.createIdentifier(componentName) : undefined,
        factory.createIdentifier(alias ?? componentName)
      )
  )

  return factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports(namedImports)
    ),
    factory.createStringLiteral(moduleSpecifier)
  )
}

const updateNamedImports = (
  factory: ts.NodeFactory,
  node: ts.ImportDeclaration,
  importsToAdd: ImportsToAdd
): ts.ImportDeclaration => {
  if (!node.importClause) return node

  const existingNamedImportNames = new Set<string>()
  const importSpecifiers: ts.ImportSpecifier[] = []

  const namedBindings = node.importClause.namedBindings
  if (namedBindings && ts.isNamedImports(namedBindings)) {
    namedBindings.elements.forEach(importSpecifier => {
      existingNamedImportNames.add(importSpecifier.name.getText())
      importSpecifiers.push(importSpecifier)
    })
  }

  Array.from(importsToAdd.values()).forEach(({ alias, componentName }) => {
    const newImport = factory.createImportSpecifier(
      false,
      alias ? factory.createIdentifier(componentName) : undefined,
      factory.createIdentifier(alias ?? componentName)
    )

    if (!existingNamedImportNames.has(componentName)) {
      importSpecifiers.push(newImport)
    }
  })

  return factory.updateImportDeclaration(
    node,
    node.modifiers,
    factory.updateImportClause(
      node.importClause,
      node.importClause.isTypeOnly,
      node.importClause.name,
      factory.createNamedImports(importSpecifiers)
    ),
    node.moduleSpecifier,
    node.attributes
  )
}

// Key is module specifier (eg. "@kaizen/components")
type ImportsToRemoveMap = Map<string, ImportsToRemove>
// Key is module specifier (eg. "@kaizen/components")
type ImportsToAddMap = Map<string, ImportsToAdd>

export type UpdateKaioImportsArgs = {
  importsToRemove?: ImportsToRemoveMap
  importsToAdd?: ImportsToAddMap
}

export const updateKaioImports =
  ({
    importsToRemove,
    importsToAdd,
  }: UpdateKaioImportsArgs): ts.TransformerFactory<ts.SourceFile> =>
  context =>
  rootNode => {
    if (!ts.isSourceFile(rootNode)) return rootNode

    if (!importsToRemove && !importsToAdd) return rootNode

    const { factory } = context

    const statements = Array.from(rootNode.statements)

    if (importsToRemove) {
      Array.from(importsToRemove.keys()).forEach(moduleSpecifier => {
        const importIndex = statements.findIndex(
          s =>
            ts.isImportDeclaration(s) &&
            (s.moduleSpecifier as ts.StringLiteral).text === moduleSpecifier
        )

        if (importIndex === -1) return

        const importDeclaration = statements[
          importIndex
        ] as ts.ImportDeclaration

        const updatedImportDeclaration = removeNamedImports(
          factory,
          importDeclaration,
          importsToRemove.get(moduleSpecifier)!
        )

        if (updatedImportDeclaration === null) {
          // Remove import statement as there are no more imports
          statements.splice(importIndex, 1)
          return
        }

        // Update import statement
        statements[importIndex] = updatedImportDeclaration
      })
    }

    if (importsToAdd) {
      Array.from(importsToAdd.keys()).forEach(newModuleSpecifier => {
        const importIndex = statements.findIndex(
          s =>
            ts.isImportDeclaration(s) &&
            (s.moduleSpecifier as ts.StringLiteral).text === newModuleSpecifier
        )

        if (importIndex === -1) {
          const fallbackKaioImportIdx = statements.findIndex(
            s =>
              ts.isImportDeclaration(s) &&
              (s.moduleSpecifier as ts.StringLiteral).text.includes(
                "@kaizen/components"
              )
          )

          const newImport = createImportDeclaration(
            factory,
            importsToAdd.get(newModuleSpecifier)!,
            newModuleSpecifier
          )
          statements.splice(fallbackKaioImportIdx + 1, 0, newImport)
          return
        }

        const importDeclaration = statements[
          importIndex
        ] as ts.ImportDeclaration

        const updatedImportDeclaration = updateNamedImports(
          factory,
          importDeclaration,
          importsToAdd.get(newModuleSpecifier)!
        )

        // Update import statement
        statements[importIndex] = updatedImportDeclaration
      })
    }

    return factory.updateSourceFile(rootNode, statements)
  }

/* Transformer helpers to generate `importsToRemove` and `importsToAdd` for `updateKaioImports` */
export const setImportToRemove = (
  map: ImportsToRemoveMap,
  moduleSpecifier: string,
  componentName: string
): void => {
  if (!map.has(moduleSpecifier)) {
    map.set(moduleSpecifier, new Set([componentName]))
  }
  map.get(moduleSpecifier)?.add(componentName)
}

export const setImportToAdd = (
  map: ImportsToAddMap,
  moduleSpecifier: string,
  importAttributes: NewImportAttributes
): void => {
  if (!map.has(moduleSpecifier)) {
    map.set(
      moduleSpecifier,
      new Map([[importAttributes.componentName, importAttributes]])
    )
  }
  map
    .get(moduleSpecifier)
    ?.set(importAttributes.componentName, importAttributes)
}
