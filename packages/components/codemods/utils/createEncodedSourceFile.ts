import ts from "typescript"
import { encodeEmptyLines } from "./emptyLineEncoder"

export const createEncodedSourceFile = (
  filePath: string,
  sourceCode: string
): ts.SourceFile => {
  const encodedSource = encodeEmptyLines(sourceCode)
  return ts.createSourceFile(
    filePath,
    encodedSource,
    ts.ScriptTarget.Latest,
    true
  )
}
