#!/usr/bin/env node
import * as fs from "fs"
import * as path from "path"
import * as prettier from "prettier"
import util from "util"
import { detokenise, tokenise, transformDrafts } from "./transform"

const readdir = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

// @TODO - surface elm.json
async function getFiles(dir) {
  // @TODO - exclude node_modules
  const dirents = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name)
      return dirent.isDirectory() ? getFiles(res) : res
    })
  )
  return Array.prototype.concat(...files)
}

const main = async (locations: string, isDryRun: boolean, logger: any) => {
  logger("verbose", `Checking file location: ${locations}`)

  try {
    const files = await getFiles(locations)
    files.forEach(async (file) => {
      const data = await readFile(file)
      logger("verbose", `---\nReading: ${file}`)

      let target = ""
      if (file.includes(".elm")) {
        target = "elm"
      } else if (file.includes(".js")) {
        // @TODO - add jsx/tsx and possibly ts support
        target = "js"
      } else {
        logger("verbose", "not a .elm or .js file, skipping")
        return // skip this file
      }

      let newFile = transform(target, data)

      // write to file if there are changes
      if (data.toString() !== newFile) {
        logger(
          "verbose",
          `${isDryRun && "dry run - "}transforms found, writing to file`
        )

        if (!isDryRun) {
          if (target === "js") {
            newFile = prettier.format(newFile, {
              semi: false,
              singleQuote: false,
              trailingComma: "es5",
              parser: "typescript",
            })
          }

          writeFile(file, newFile)
        }
      } else {
        logger(
          "verbose",
          `${isDryRun && "dry run - "}no transforms, skip writing file`
        )
      }
    })
  } catch (e) {
    logger("info", e)
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
