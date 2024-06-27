import fs from "fs"
import path from "path"
import ts from "typescript"

export const codemodRunner = (fileName: string): ts.SourceFile => {
  const newSource = fs.readFileSync(path.join(__dirname, fileName), "utf-8")

  const newSourceAST = ts.createSourceFile(
    "mockRoot.ts",
    newSource,
    ts.ScriptTarget.ES2015,
    true
  )

  return newSourceAST
}

type ValidImport = {
  name: string | undefined
  alias: string | undefined
  type: string
  parent: string
}

/** will return an array of exported functions, named exports and variables */
export const getImportFromAstSourcefile = (sourceFile: ts.SourceFile): any => {
  const allImports: ValidImport[] = []

  visitNode(sourceFile)

  function visitNode(node: ts.Node): any {
    // if (ts.isImportDeclaration(node)) {
    //   const importedFrom = node.moduleSpecifier.getText()

    //   if (importedFrom === '"@kaizen/components"') {
    //     // console.log("children", node.getChildren())
    //     const children: ts.Node[] = node.getChildren()

    //     children.forEach(child => {
    //       if (ts.isImportClause(child)) {
    //         console.log("child", child)
    //         const grandChildren = child.getChildren()

    //         console.log("grandchildren", grandChildren)
    //       }
    //       // if (ts.isImportSpecifier(child)) {
    //       //   const childText = child.name.getText()
    //       //   // console.log("child text", childText)
    //       // }
    //     })
    //   }
    //   // const importSrc = node
    // }
    if (ts.isImportSpecifier(node)) {
      const grandparent = node.parent.parent.parent

      console.log("grandparent", grandparent.moduleSpecifier.getText())

      const kaioName = node.propertyName?.getText() ?? node.name.getText()
      const alias = node.propertyName?.getText()
        ? node.name.getText()
        : undefined
      const parent = node.parent.getText()

      allImports.push({
        name: kaioName,
        alias,
        type: ts.SyntaxKind[node.kind],
        parent,
      })
    }

    // if its a named export

    ts.forEachChild(node, visitNode)
  }

  console.log("allImports", allImports)

  return allImports
}
