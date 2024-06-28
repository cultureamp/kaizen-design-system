import fs from "fs"
import glob from "fast-glob"
import ts from "typescript"
export const splitIntoFamilies = (sourceFile: ts.SourceFile): ts.SourceFile => {
  const transformer =
    <T extends ts.Node>(context: ts.TransformationContext) =>
    (rootNode: T) => {
      function visit(node: ts.Node): ts.NodeArray<ts.Node> | ts.Node {
        if (
          ts.isImportDeclaration(node) &&
          ts.isStringLiteral(node.moduleSpecifier)
        ) {
          const importPath = node.moduleSpecifier.text
          if (importPath === "@kaizen/components") {
            const updatedNodes: ts.Node[] = []
            const bindings = node.importClause?.namedBindings
            if (bindings && ts.isNamedImports(bindings)) {
              const textSpecifier = bindings.elements.find(
                el => el.name.text === "Tooltip"
              )
              const otherSpecifiers = bindings.elements.filter(
                el => el.name.text !== "Tooltip"
              )
              if (textSpecifier) {
                updatedNodes.push(
                  ts.factory.createImportDeclaration(
                    undefined,
                    ts.factory.createImportClause(
                      false,
                      undefined,
                      ts.factory.createNamedImports([textSpecifier])
                    ),
                    ts.factory.createStringLiteral(
                      "@kaizen/components/v2/content"
                    )
                  )
                )
              }
              if (otherSpecifiers.length > 0) {
                updatedNodes.push(
                  ts.factory.createImportDeclaration(
                    undefined,
                    ts.factory.createImportClause(
                      false,
                      undefined,
                      ts.factory.createNamedImports(otherSpecifiers)
                    ),
                    ts.factory.createStringLiteral("@kaizen/components")
                  )
                )
              }
              return ts.factory.createNodeArray(updatedNodes)
            }
          }
        }
        return ts.visitEachChild(node, visit, context)
      }
      return ts.visitNode(rootNode, visit) || rootNode
    }
  const finalFile = ts.transform(sourceFile, [transformer])
    .transformed[0] as ts.SourceFile
  return finalFile
}
const printSourceFile = (sourceFile: ts.SourceFile): string => {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })
  return printer.printFile(sourceFile)
}
const processFile = (filePath: string): void => {
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" })
  const sourceFile = ts.createSourceFile(
    filePath,
    fileContent,
    ts.ScriptTarget.Latest,
    true
  )
  const updatedSourceFile = splitIntoFamilies(sourceFile)
  const updatedContent = printSourceFile(updatedSourceFile)
  fs.writeFileSync(filePath, updatedContent)
}
// Adjust the glob pattern to match your project structure
const files = glob.sync("**/*.{ts,tsx}", {
  ignore: ["node_modules/**", "**/*.d.ts"],
})
files.forEach(processFile)
