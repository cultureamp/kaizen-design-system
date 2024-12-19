import ts from 'typescript'
import { decodeEmptyLines } from './emptyLineEncoder'
import { printAst } from './printAst'

export type TransformSourceArgs = {
  sourceFile: ts.SourceFile
  transformers: ts.TransformerFactory<ts.SourceFile>[]
}

export const transformSource = ({ sourceFile, transformers }: TransformSourceArgs): string => {
  const result = ts.transform(sourceFile, transformers)
  const transformedSource = printAst(result.transformed[0])
  return decodeEmptyLines(transformedSource)
}
