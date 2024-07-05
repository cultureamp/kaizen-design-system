import fs from "fs"
import fg from "fast-glob"
import ts from "typescript"
import { printSourceFile, traverseKAIOImports } from "./utils"

export const getArgs = (): Record<string, any> =>
  process.argv.reduce<Record<string, any>>((args, arg) => {
    if (arg.slice(0, 2) === "--") {
      const longArg = arg.split("=")
      const longArgFlag = longArg[0].slice(2)
      const longArgValue = longArg.length > 1 ? longArg[1] : true
      args[longArgFlag] = longArgValue
    } else if (arg[0] === "-") {
      const flags = arg.slice(1).split("")
      flags.forEach(flag => {
        args[flag] = true
      })
    }
    return args
  }, {})

const { directory } = getArgs()

const processFile = (filePath: string): void => {
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" })
  const sourceFile = ts.createSourceFile(
    filePath,
    fileContent,
    ts.ScriptTarget.Latest,
    true
  )

  const updatedSourceFile = traverseKAIOImports(sourceFile)

  const updatedContent = printSourceFile(updatedSourceFile)
  fs.writeFileSync(filePath, updatedContent)
}

const processFiles = async (): Promise<void> => {
  const files = await fg([directory])
  for (const file of files) {
    processFile(file)
  }
}

processFiles()
