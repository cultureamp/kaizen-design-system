import ts from "typescript"

export const groupImportsByFamily = (
  node: ts.ImportDeclaration,
  updatedNodes: ts.Node[],
  family: string,
  exportDeclarations: string[]
): ts.Node[] => {
  const familyImports = node.importClause?.namedBindings
    ? (node.importClause.namedBindings as ts.NamedImports).elements.filter(el =>
        exportDeclarations.includes(el.propertyName?.text ?? el.name.text)
      )
    : []

  if (familyImports.length > 0) {
    updatedNodes.push(
      ts.factory.createImportDeclaration(
        undefined,
        ts.factory.createImportClause(
          false,
          undefined,
          ts.factory.createNamedImports(familyImports)
        ),
        ts.factory.createStringLiteral(`@kaizen/components/v2/${family}`)
      )
    )
  }

  return updatedNodes
}
