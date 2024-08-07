import ts from "typescript"
import { printAst } from "./printAst"

export type TransformConfig = {
  sourceFile: ts.SourceFile
  astTransformer: (
    context: ts.TransformationContext,
    importAlias: string
  ) => (rootNode: ts.Node) => ts.Node
  importAlias: string
}

/** Transforms the source file with the transformer and target import alias provided */
export const transformSource = ({
  sourceFile,
  astTransformer,
  importAlias,
}: TransformConfig): string => {
  const result = ts.transform(sourceFile, [
    context => astTransformer(context, importAlias),
  ])
  const transformedSource = result.transformed[0] as ts.SourceFile

  return printAst(transformedSource)
}
