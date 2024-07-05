import ts from "typescript"
import { transformImportsIntoFamilies } from "../groupImportsByFamily/transformImportsIntoFamilies"

export const traverseKAIOImports = (sourceFile): ts.SourceFile => {
  const traverseFile =
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

            transformImportsIntoFamilies(node, updatedNodes)

            return ts.factory.createNodeArray(updatedNodes)
          }
        }
        return ts.visitEachChild(node, visit, context)
      }
      return ts.visitNode(rootNode, visit) || rootNode
    }
  const finalFile = ts.transform(sourceFile, [traverseFile])
    .transformed[0] as ts.SourceFile

  return finalFile
}
