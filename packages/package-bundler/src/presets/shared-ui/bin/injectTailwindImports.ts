import fs from "fs"
import path from "path"
import { getArgs } from "./getArgs.js"

const args = getArgs()

const addGlobalStylesImport = async (dirOrFile: string): Promise<void> => {
  const DIST_STYLES_PATH_CJS = path.resolve(
    args.packagePath,
    "./dist/cjs/tailwind.css.cjs"
  )
  const DIST_STYLES_PATH_ESM = path.resolve(
    args.packagePath,
    "./dist/esm/tailwind.css.mjs"
  )

  if (fs.statSync(dirOrFile).isDirectory()) {
    const dirContent = await fs.promises.readdir(dirOrFile)

    dirContent.forEach(content => {
      const contentPath = path.join(dirOrFile, content)
      addGlobalStylesImport(contentPath)
    })
    return
  }

  const filePath = path.resolve(dirOrFile)
  if (fs.statSync(filePath).isFile()) {
    const sourceFile = dirOrFile
      .replace(/dist\/(esm|cjs)/, "src")
      .replace(/(c|m)js$/, "tsx")
    if (!fs.existsSync(sourceFile)) {
      return
    }

    const fileContent = fs.readFileSync(filePath).toString()

    const isESM = dirOrFile.includes("dist/esm")
    if (isESM) {
      const stylesPath = path.relative(
        path.dirname(filePath),
        DIST_STYLES_PATH_ESM
      )
      fs.writeFile(
        filePath,
        `import "${stylesPath}"\n${fileContent}`,
        err => err
      )
      return
    }

    const isCJS = dirOrFile.includes("dist/cjs")
    if (isCJS) {
      const stylesPath = path.relative(
        path.dirname(filePath),
        DIST_STYLES_PATH_CJS
      )
      const fileSplit = fileContent.split("\n")
      fileSplit.splice(1, 0, `require("${stylesPath}")`)
      const newContent = fileSplit.join("\n")
      fs.writeFile(filePath, newContent, err => err)
      return
    }
  }
}

const run = (): void => {
  const hasTailwind = fs.existsSync(
    path.resolve(args.packagePath, "./tailwind.config.js")
  )
  if (!hasTailwind) return

  const DIST_DIRS = ["dist/cjs", "dist/esm"]

  DIST_DIRS.forEach(dir =>
    addGlobalStylesImport(`${args.packagePath}/${dir}`).catch(e =>
      console.error("Directory not found", e)
    )
  )
}

run()
