import ts from "typescript"

/** A util that prints that is used to print the AST as a string */
export const printAst = (ast: ts.SourceFile): string => {
  const printer = ts.createPrinter()
  return printer.printFile(ast)
}
