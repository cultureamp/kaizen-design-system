import ts from 'typescript'
import { decodeEmptyLines } from './emptyLineEncoder'
import { printAst } from './printAst'

export type TransformSourceArgs = {
  sourceFile: ts.SourceFile
  transformers: Array<ts.TransformerFactory<ts.SourceFile>>
}

export const transformSource = ({ sourceFile, transformers }: TransformSourceArgs): string => {
  const result = ts.transform(sourceFile, transformers)
  const transformedSource = printAst(result.transformed[0])
  return decodeEmptyLines(transformedSource)
}

/**
 * @deprecated - use transformSource instead of transformSourceForTagName
 */
export type TransformSourceForTagNameArgs = {
  sourceFile: ts.SourceFile
  astTransformer: (
    context: ts.TransformationContext,
    tagName: string,
  ) => (rootNode: ts.SourceFile) => ts.SourceFile
  tagName: string
}

/**
 * @deprecated - use transformSource instead
 * Transforms the source file with the transformer and target import alias provided
 */
export const transformSourceForTagName = ({
  sourceFile,
  astTransformer,
  tagName,
}: TransformSourceForTagNameArgs): string =>
  transformSource({
    sourceFile,
    transformers: [(context) => astTransformer(context, tagName)],
  })
