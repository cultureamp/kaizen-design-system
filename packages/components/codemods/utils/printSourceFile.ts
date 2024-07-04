import ts from "typescript"

export const printSourceFile = (sourceFile: ts.SourceFile): string => {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })
  return printer.printFile(sourceFile)
}
