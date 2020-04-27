#!/usr/bin/env node
import * as path from "path"
import * as prettier from "prettier"
const { readdir, readFile, writeFile } = require("fs").promises
import { detokenise, tokenise, transformDrafts } from "./transform"

async function getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    dirents.map(dirent => {
      const res = path.resolve(dir, dirent.name)
      return dirent.isDirectory() ? getFiles(res) : res
    })
  )
  return Array.prototype.concat(...files)
}

const main = async (locations: string, logger: any) => {
  logger("verbose", `Checking file location: ${locations}`)

  try {
    const files = await getFiles(locations)
    files.forEach(async file => {
      const data = await readFile(file)
      logger("verbose", `---\nReading: ${file}`)

      let target = ""
      if (file.includes(".elm")) {
        target = "elm"
      } else if (file.includes(".js")) {
        target = "js"
      } else {
        logger("verbose", "not a .elm or .js file, skipping")
        return // skip this file
      }

      let newFile = transform(target, data)

      // write to file if there are changes
      if (data.toString() !== newFile) {
        logger("verbose", `transforms, writing to file`)

        if (target === "js") {
          newFile = prettier.format(newFile, {
            semi: false,
            singleQuote: false,
            trailingComma: "es5",
            parser: "typescript",
          })
        }

        writeFile(file, newFile)
      } else {
        logger("verbose", "no transforms, skip writing file")
      }
    })
  } catch (e) {
    logger("info", "bless - not yet implements")
  }
}

const transform = (target: string, data: Buffer) => {
  const { tokens, endIndex, startIndex } = tokenise(target, data)

  const theStartOfTheFile = data.toString().slice(0, startIndex)

  // split the rest of the file from the imports
  const theRestOfTheFile = data.toString("utf-8").slice(endIndex)

  // do stuff to the imports and convert it back to a string
  // In the future, this could be more extensible, but for now we're keeping it simple
  const transformedTokens = transformDrafts(target, tokens)

  // convert imports back to string
  const transformedImports = detokenise(target, transformedTokens)

  return theStartOfTheFile + transformedImports + theRestOfTheFile
}

export default main
export { transform }
