import ts from "typescript"

export const traverseKAIOImports = ({
  sourceFile,
  transformers,
}: {
  sourceFile: ts.SourceFile
  transformers: Array<
    (node: ts.ImportDeclaration, updatedNodes: ts.Node[]) => void
  >
}): ts.SourceFile => {
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

            transformers.forEach(transformer =>
              transformer(node as ts.ImportDeclaration, updatedNodes)
            )

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
