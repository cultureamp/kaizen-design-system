import ts from "typescript"
import { printAst } from "./printAst"

export type TransformConfig = {
  sourceFile: ts.SourceFile
  astTransformer: (
    context: ts.TransformationContext,
    tagName: string
  ) => (rootNode: ts.Node) => ts.Node
  tagName: string
}

/** Transforms the source file with the transformer and target import alias provided */
export const transformSource = ({
  sourceFile,
  astTransformer,
  tagName,
}: TransformConfig): string => {
  const result = ts.transform(sourceFile, [
    context => astTransformer(context, tagName),
  ])
  const transformedSource = result.transformed[0] as ts.SourceFile

  return printAst(transformedSource)
}
