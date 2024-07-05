import fs from "fs"
import path from "path"
import ts from "typescript"
import { getExportsFromDirectory, printSourceFile } from "../utils"

const generateFamilyExportsFile = (
  familyPaths: string[],
  outFile: string
): void => {
  const sourceFile = ts.createSourceFile(
    outFile,
    "",
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS
  )

  // Create new object to house families as keys and exports as values
  const familyObject = ts.factory.createObjectLiteralExpression()

  // Get the properties of the object
  const properties =
    familyObject.properties as ts.NodeArray<ts.ObjectLiteralElementLike>

  // Loop through the families and get the exports
  familyPaths.map(familyPath => {
    const exportDeclarations = getExportsFromDirectory(
      path.join(__dirname, `../../src/${familyPath}`)
    )

    const exportsArrayNode = ts.factory.createArrayLiteralExpression(
      exportDeclarations.map(declaration =>
        ts.factory.createStringLiteral(declaration)
      )
    )
    // Add the properties to the object
    // @ts-ignore
    properties.push(
      ts.factory.createPropertyAssignment(familyPath, exportsArrayNode)
    )
  })

  // Create the export node with the the family object
  const exportNode = ts.factory.createExportAssignment(
    undefined,
    undefined,
    familyObject
  )

  // Add the exportNode below the synthetic leading comment
  // @ts-ignore
  sourceFile.statements.push(exportNode)

  const updatedSourceFile = printSourceFile(sourceFile)

  const directory = path.dirname(outFile)
  fs.mkdirSync(directory, { recursive: true })
  fs.writeFileSync(outFile, updatedSourceFile)
}

generateFamilyExportsFile(
  ["__overlays__"],
  path.join(__dirname, "./data/familyExportDeclarations.ts")
)
