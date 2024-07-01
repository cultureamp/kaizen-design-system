import fs from "fs"
import path from "path"
import glob from "fast-glob"
import ts from "typescript"

const walkThroughDirectories = (): string[] => {
  const directories: string[] = []
  const files: string[] = []

  const traverse = (dir: string): void => {
    const stat = fs.statSync(dir)

    if (stat.isDirectory()) {
      const dirFiles = fs.readdirSync(dir)

      dirFiles.forEach(file => {
        const filePath = path.join(dir, file)
        traverse(filePath)
      })

      directories.push(dir)
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
          const exportsFromFile: string[] = []
          // loops through AST and get the export
          exportedSourceFile.forEachChild(
            node => {
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
            }
            // collectExports(node, exportsFromFile)
          )
          console.log("exportsFromFile", exportsFromFile)

          // caution - we need to make sure that it is actually exported from the index and not just a internal component
        }
      })
    }
  }

  traverse(path.join(__dirname, "../src"))

  return directories
}

// /** will return an array of exported functions, named exports and variables */
// export const getExportsFromAstSourcefile = (sourceFile: ts.SourceFile) => {
//   const allExports: ValidExport[] = [];

//   visitNode(sourceFile);

//   function visitNode(node: ts.Node) {
//     // if its a named export
//     if (ts.isExportSpecifier(node)) {
//       const name = node.name.getText();
//       allExports.push({
//         name,
//         type: ts.SyntaxKind[node.kind],
//       });
//     }

//     if (ts.isClassDeclaration(node)) {
//       const name = node.name?.getText() || "";

//       allExports.push({
//         name,
//         type: ts.SyntaxKind[node.kind],
//       });
//     }

//     if (ts.isTypeAliasDeclaration(node) || ts.isInterfaceDeclaration(node)) {
//       const name = node.name?.getText();
//       allExports.push({
//         name,
//         type: ts.SyntaxKind[node.kind],
//       });
//     }

//     // if its another export (ie: variable or function)
//     if (node.kind === ts.SyntaxKind.ExportKeyword) {
//       const parent = node.parent;

//       if (ts.isFunctionDeclaration(parent)) {
//         const name = parent.name?.getText() || "";
//         allExports.push({
//           name,
//           type: ts.SyntaxKind[node.parent.kind],
//         });
//       }

//       // this also include exports JSX as constants ie: const Heading = () => {...}
//       if (ts.isVariableStatement(parent)) {
//         parent.declarationList.declarations.forEach((declaration) => {
//           const name = declaration.name.getText();
//           const variableType =
//             declaration.initializer?.kind &&
//             ts.SyntaxKind[declaration.initializer?.kind];

//           allExports.push({
//             name,
//             type: variableType || "variable",
//           });
//         });
//       }
//     }

//     ts.forEachChild(node, visitNode);
//   }

//   return allExports;
// };

const collectExports = (
  node: ts.Node,
  exportsFromFile: string[]
): void | undefined => {
  // Check if the node is a named export
  if (
    ts.isExportDeclaration(node) &&
    node.exportClause &&
    ts.isNamedExports(node.exportClause)
  ) {
    node.exportClause.elements.map(element => {
      const exportName = element.name.getText()
      // console.log("element", element)
      console.log("exportName", exportName)

      exportsFromFile.push(exportName)
    })
  }
}

const getFilePath = (resolvedPath: string): string | undefined => {
  if (!fs.existsSync(resolvedPath)) {
    if (fs.existsSync(`${resolvedPath}.ts`)) {
      return `${resolvedPath}.ts`
    }
    if (fs.existsSync(`${resolvedPath}.tsx`)) {
      return `${resolvedPath}.tsx`
    }
  }

  return undefined
}

walkThroughDirectories()

export const splitIntoFamilies = (sourceFile: ts.SourceFile): ts.SourceFile => {
  const families: { [key: string]: string[] } = {
    actions: ["IconButton", "Menu", "MenuItem"],
    overlays: ["Tooltip", "Modal"],
    content: ["Tag"],
  }

  const transformer =
    <T extends ts.Node>(context: ts.TransformationContext) =>
    (rootNode: T) => {
      function visit(node: ts.Node): ts.NodeArray<ts.Node> | ts.Node {
        if (
          ts.isImportDeclaration(node) &&
          ts.isStringLiteral(node.moduleSpecifier)
        ) {
          const importPath = node.moduleSpecifier.text

          if (importPath === "@kaizen/components") {
            const updatedNodes: ts.Node[] = []

            Object.keys(families).forEach(family => {
              const components = families[family]

              const familyImports = node.importClause?.namedBindings
                ? (
                    node.importClause.namedBindings as ts.NamedImports
                  ).elements.filter(el =>
                    components.includes(el.propertyName?.text ?? el.name.text)
                  )
                : []

              if (familyImports.length > 0) {
                updatedNodes.push(
                  ts.factory.createImportDeclaration(
                    undefined,
                    ts.factory.createImportClause(
                      false,
                      undefined,
                      ts.factory.createNamedImports(familyImports)
                    ),
                    ts.factory.createStringLiteral(
                      `@kaizen/components/v2/${family}`
                    )
                  )
                )
              }
            })

            return ts.factory.createNodeArray(updatedNodes)
          }
        }
        return ts.visitEachChild(node, visit, context)
      }
      return ts.visitNode(rootNode, visit) || rootNode
    }
  const finalFile = ts.transform(sourceFile, [transformer])
    .transformed[0] as ts.SourceFile
  return finalFile
}

const printSourceFile = (sourceFile: ts.SourceFile): string => {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })
  return printer.printFile(sourceFile)
}

const processFile = (filePath: string): void => {
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" })
  const sourceFile = ts.createSourceFile(
    filePath,
    fileContent,
    ts.ScriptTarget.Latest,
    true
  )
  const updatedSourceFile = splitIntoFamilies(sourceFile)
  const updatedContent = printSourceFile(updatedSourceFile)
  fs.writeFileSync(path.join(__dirname, "output.tsx"), updatedContent)
}
// Adjust the glob pattern to match your project structure
const files = glob.sync("**/*.tsx", {
  ignore: ["node_modules/**", "**/*.d.ts"],
})

files.forEach(processFile)
