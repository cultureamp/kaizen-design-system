import ts from "typescript"
// This function is used to print the AST as a string and is only used for testing
export const printAst = (ast: ts.SourceFile): string => {
  const printer = ts.createPrinter()
  return printer.printFile(ast).trim()
}
