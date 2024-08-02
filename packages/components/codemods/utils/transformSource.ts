import ts from "typescript"
import { printAst } from "./printAst"

/** Transforms the source file with the transformer provided */
export const transformSource = (
  sourceFile: ts.SourceFile,
  astTransformer: (
    context: ts.TransformationContext,
    importAlias: string
  ) => (rootNode: ts.Node) => ts.Node,
  importAlias: string
): string => {
  const result = ts.transform(sourceFile, [
    context => astTransformer(context, importAlias),
  ])
  const transformedSource = result.transformed[0] as ts.SourceFile

  return printAst(transformedSource)
}
