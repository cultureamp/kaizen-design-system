import ts from "typescript"

type NewImportAttributes = { componentName: string; alias?: string }

const updateNamedImports = (
  factory: ts.NodeFactory,
  node: ts.ImportDeclaration,
  importsToAdd: Map<string, NewImportAttributes>
): ts.ImportDeclaration => {
  const importSpecifiers: ts.ImportSpecifier[] = []
  const newNamedImports = Array.from(importsToAdd.values()).map(
    ({ alias, componentName }) =>
      factory.createImportSpecifier(
        false,
        alias ? factory.createIdentifier(componentName) : undefined,
        factory.createIdentifier(alias ?? componentName)
      )
  )
  importSpecifiers.push(...newNamedImports)

  const namedBindings = node.importClause?.namedBindings
  if (namedBindings && ts.isNamedImports(namedBindings)) {
    importSpecifiers.unshift(...namedBindings.elements)
  }

  let importClause: ts.ImportClause
  if (node.importClause && node.importClause.namedBindings) {
    const namedImports = factory.createNamedImports(importSpecifiers)

    importClause = factory.updateImportClause(
      node.importClause,
      node.importClause.isTypeOnly,
      node.importClause.name,
      namedImports
    )
  } else {
    importClause = factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports(newNamedImports)
    )
  }

  return factory.updateImportDeclaration(
    node,
    node.modifiers,
    importClause,
    node.moduleSpecifier,
    node.attributes
  )
}

const removeNamedImports = (
  factory: ts.NodeFactory,
  node: ts.ImportDeclaration,
  toRemove: Set<string>
): ts.ImportDeclaration | null => {
  const namedBindings = node.importClause?.namedBindings
  if (namedBindings && ts.isNamedImports(namedBindings)) {
    const namedImports = namedBindings.elements.filter(importSpecifier => {
      const componentName =
        importSpecifier.propertyName?.getText() ??
        importSpecifier.name.getText()
      return !toRemove.has(componentName)
    })

    if (namedImports.length === 0) {
      return null
    }

    const importClause = factory.updateImportClause(
      node.importClause,
      node.importClause.isTypeOnly,
      node.importClause.name,
      factory.updateNamedImports(namedBindings, namedImports)
    )

    return factory.updateImportDeclaration(
      node,
      node.modifiers,
      importClause,
      node.moduleSpecifier,
      node.attributes
    )
  }

  return node
}

const createImportDeclaration = (
  factory: ts.NodeFactory,
  importAttributesMap: Map<string, NewImportAttributes>,
  moduleSpecifier: string
): ts.ImportDeclaration =>
  factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports(
        Array.from(importAttributesMap.values()).map(
          ({ componentName, alias }) =>
            factory.createImportSpecifier(
              false,
              alias ? factory.createIdentifier(componentName) : undefined,
              factory.createIdentifier(alias ?? componentName)
            )
        )
      )
    ),
    factory.createStringLiteral(moduleSpecifier)
  )

export type ImportsToRemove = Map<string, Set<string>>
export type ImportsToAdd = Map<string, Map<string, NewImportAttributes>>

export const updateKaioImports =
  ({
    importsToRemove,
    importsToAdd,
  }: {
    importsToRemove?: ImportsToRemove
    importsToAdd?: ImportsToAdd
  }) =>
  (context: ts.TransformationContext) =>
  (rootNode: ts.Node): ts.Node => {
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

        const importDeclaration = (statements[importIndex]) as ts.ImportDeclaration

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
