import ts from "typescript"
import { ImportModuleNameTagsMap } from "./getKaioTagName"
import { printAst } from "./printAst"

export type TransformConfig<
  TagName extends string | ImportModuleNameTagsMap = string,
> = {
  sourceFile: ts.SourceFile
  astTransformer: (
    context: ts.TransformationContext,
    tagName: TagName
  ) => (rootNode: ts.Node) => ts.Node
  tagName: TagName
}

/** Transforms the source file with the transformer and target import alias provided */
export const transformSource = <
  TagName extends string | ImportModuleNameTagsMap,
>({
  sourceFile,
  astTransformer,
  tagName,
}: TransformConfig<TagName>): string => {
  const result = ts.transform(sourceFile, [
    context => astTransformer(context, tagName),
  ])
  const transformedSource = result.transformed[0] as ts.SourceFile

  return printAst(transformedSource)
}
