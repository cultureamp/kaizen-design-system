import fs from "fs"
import path from "path"
import ts from "typescript"
import { transformImportsIntoFamilies } from "./groupImportsByFamily/transformImportsIntoFamilies"
import { printSourceFile, traverseKAIOImports } from "./utils"

const processFile = (filePath: string, outFile: string): void => {
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" })
  const sourceFile = ts.createSourceFile(
    filePath,
    fileContent,
    ts.ScriptTarget.Latest,
    true
  )

  const updatedSourceFile = traverseKAIOImports({
    sourceFile,
    transformers: [transformImportsIntoFamilies],
  })

  const updatedContent = printSourceFile(updatedSourceFile)
  fs.writeFileSync(outFile, updatedContent)
}

processFile(
  path.join(__dirname, "./mockFile.tsx"),
  path.join(__dirname, "./output.tsx")
)
