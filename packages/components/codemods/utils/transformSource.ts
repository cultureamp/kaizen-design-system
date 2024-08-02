import ts from "typescript"

/** Transforms the source file with the transformer provided */
export const transformSource = (
  sourceFile: ts.SourceFile,
  astTransformer: (
    context: ts.TransformationContext,
    importAlias: string
  ) => (rootNode: ts.Node) => ts.Node,
  importAlias: string
): ts.SourceFile => {
  const result = ts.transform(sourceFile, [
    context => astTransformer(context, importAlias),
  ])
  const transformedSource = result.transformed[0] as ts.SourceFile

  return transformedSource
}
