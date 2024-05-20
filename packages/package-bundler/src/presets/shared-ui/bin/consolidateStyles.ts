import fs from "fs"
import path from "path"
import { getArgs } from "./getArgs.js"

const args = getArgs()
const { packagePath } = args

const PATH_CSS_MODULES_CJS = `${packagePath}/dist/cjs/styles.css`
const PATH_CSS_MODULES_ESM = `${packagePath}/dist/esm/styles.css`
const PATH_TAILWIND = `${packagePath}/dist/tailwind.css`
// Rollup creates an empty JS file when building Tailwind styles
const PATH_TAILWIND_JS = `${packagePath}/dist/tailwind.css`
const PATH_DIST_STYLES = `${packagePath}/dist/styles.css`

const pathsToCombine = [PATH_TAILWIND, PATH_CSS_MODULES_ESM]
const pathsToDelete = [PATH_CSS_MODULES_CJS, PATH_CSS_MODULES_ESM, PATH_TAILWIND, PATH_TAILWIND_JS]

const combineFiles = async (): Promise<void> => {
  pathsToCombine.forEach(async filePath => {
    const file = path.resolve(filePath)
    if (fs.statSync(file).isFile()) {
      console.log("WRITE", file)
      const fileContent = fs.readFileSync(file).toString()

      fs.appendFileSync(
        PATH_DIST_STYLES,
        `${fileContent}\n`,
      )
      // fs.appendFile(
      //   PATH_DIST_STYLES,
      //   `${fileContent}\n`,
      //   e => e
      // )
    }
  })
}

const deleteFiles = async (): Promise<void> => {
  pathsToDelete.forEach(filePath => {
    const file = path.resolve(filePath)
    console.log("DELETE", file)
    if (fs.statSync(file).isFile()) {
      fs.unlinkSync(file)
    }
  })
}

const run = (): void => {
  (async (): Promise<void> => {
  await combineFiles()
    .then(() => deleteFiles())
  })()
}

run()
