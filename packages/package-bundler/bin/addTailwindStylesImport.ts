import fs from "fs"
import path from "path"

const DIST_STYLES_PATH = path.resolve(__dirname, "../dist/tailwind.css")

const addGlobalStylesImport = async (dirOrFile: string): Promise<void> => {
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

    const stylesPath = path.relative(path.dirname(filePath), DIST_STYLES_PATH)
    const fileContent = fs.readFileSync(filePath).toString()

    const isESM = dirOrFile.includes("dist/esm")
    if (isESM) {
      fs.writeFile(
        filePath,
        `import "${stylesPath}"\n${fileContent}`,
        err => err
      )
      return
    }

    const isCJS = dirOrFile.includes("dist/cjs")
    if (isCJS) {
      const fileSplit = fileContent.split("\n")
      fileSplit.splice(1, 0, `require("${stylesPath}")`)
      const newContent = fileSplit.join("\n")
      fs.writeFile(filePath, newContent, err => err)
      return
    }
  }
}

const DIST_DIRS = ["dist/cjs", "dist/esm"]

DIST_DIRS.forEach(dir => {
  ;(async () => {
    try {
      addGlobalStylesImport(dir)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("Directory not found", e)
    }
  })()
})
