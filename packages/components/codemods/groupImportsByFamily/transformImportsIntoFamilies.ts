import ts from "typescript"
import familyExportDeclarations from "./data/familyExportDeclarations"

// const futureComponentsTov2 = ["Tag", "Select", "Workflow"]

const splitImportsIntoFamily = ({
  importDeclaration,
  updatedNodes,
  family,
  exportDeclarations,
}: {
  importDeclaration: ts.ImportDeclaration
  updatedNodes: ts.Node[]
  family: string
  exportDeclarations: string[]
}): ts.Node[] => {
  const familyImports = importDeclaration.importClause?.namedBindings
    ? (
        importDeclaration.importClause.namedBindings as ts.NamedImports
      ).elements.filter(el =>
        exportDeclarations.includes(el.propertyName?.text ?? el.name.text)
      )
    : []

  if (familyImports.length > 0) {
    // check component which the imports belong to
    // futureComponentsTov2.includes(component) ? `@kaizen/components/v2/${family}` : `@kaizen/components/${family}`
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

export const transformImportsIntoFamilies = (
  node: ts.ImportDeclaration,
  updatedNodes: ts.Node[]
): void => {
  Object.keys(familyExportDeclarations).forEach(family => {
    splitImportsIntoFamily({
      importDeclaration: node,
      updatedNodes,
      family,
      exportDeclarations: familyExportDeclarations[family],
    })
  })
}
