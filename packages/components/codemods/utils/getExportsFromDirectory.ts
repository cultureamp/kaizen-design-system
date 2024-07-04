import fs from "fs"
import path from "path"
import ts from "typescript"
import { getFilePath } from "../utils/getFilePath"

export const getExportsFromDirectory = (dirPath: string): string[] => {
  const files: string[] = []
  const exportsFromFile: string[] = []

  const traverse = (dir: string): void => {
    const stat = fs.statSync(dir)

    if (stat.isDirectory()) {
      const dirFiles = fs.readdirSync(dir)

      dirFiles.forEach(file => {
        const filePath = path.join(dir, file)
        traverse(filePath)
      })
    } else {
      const fileContent = fs.readFileSync(dir, { encoding: "utf8" })

      const sourceFile = ts.createSourceFile(
        dir,
        fileContent,
        ts.ScriptTarget.Latest,
        true
      )

      // Find export statements
      const exportStatements: string[] = []

      ts.forEachChild(sourceFile, node => {
        if (ts.isExportDeclaration(node) && node.moduleSpecifier) {
          const exportPath = node.moduleSpecifier.getText(sourceFile)
          exportStatements.push(exportPath)
        }
      })

      // Process the exported files
      exportStatements.forEach(exportPath => {
        const resolvedPath = path.resolve(
          path.dirname(dir),
          exportPath.slice(1, -1)
        )

        const exportedFilePath = getFilePath(resolvedPath)

        // create AST from the file list
        // loop through that file and get all exports

        if (exportedFilePath) {
          files.push(exportedFilePath)

          // Read the file content
          const exportedFileContent = fs.readFileSync(exportedFilePath, "utf8")

          // Create a SourceFile (AST)
          const exportedSourceFile = ts.createSourceFile(
            exportedFilePath,
            exportedFileContent,
            ts.ScriptTarget.ES2015,
            true
          )

          // loops through AST and get the export
          exportedSourceFile.forEachChild(node => {
            if (
              (ts.isExportDeclaration(node) &&
                node.exportClause &&
                ts.isNamedExports(node.exportClause)) ||
              ts.isExportSpecifier(node) ||
              ts.isClassDeclaration(node) ||
              ts.isTypeAliasDeclaration(node) ||
              ts.isFunctionDeclaration(node) ||
              ts.isVariableStatement(node)
            ) {
              switch (node.kind) {
                case ts.SyntaxKind.ExportDeclaration:
                  if (node.exportClause) {
                    exportsFromFile.push(node.exportClause.getText())
                  }
                  break
                case ts.SyntaxKind.ExportSpecifier:
                  exportsFromFile.push(node.name.getText())
                  break
                case ts.SyntaxKind.ClassDeclaration:
                  if (node.name) {
                    exportsFromFile.push(node.name.getText())
                  }
                  break
                case ts.SyntaxKind.TypeAliasDeclaration:
                  if (node.name) {
                    exportsFromFile.push(node.name.getText())
                  }
                  break
                case ts.SyntaxKind.FunctionDeclaration:
                  if (node.name) {
                    exportsFromFile.push(node.name.getText())
                  }
                  break
                default:
                  if (ts.isVariableStatement(node)) {
                    node.declarationList.declarations.forEach(declaration => {
                      if (ts.isIdentifier(declaration.name)) {
                        exportsFromFile.push(declaration.name.text)
                      }
                    })
                  }
                  break
              }
            }
          })
        }
      })
    }
  }

  traverse(dirPath)

  return exportsFromFile
}
