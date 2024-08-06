import ts from "typescript"

// This function is used to parse a stringified JSX element into an AST
export const parseJsx = (jsx: string): ts.SourceFile =>
  ts.createSourceFile(
    "tempFile.tsx",
    jsx,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX
  )
