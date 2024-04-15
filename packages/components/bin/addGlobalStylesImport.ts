import fs from "fs"
import path from "path"

const DIST_STYLES_PATH = path.resolve(__dirname, "../dist/styles.css")

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
    // Only prepend the import to to .tsx files
    const sourceFile = dirOrFile
      .replace(/dist\/(esm|cjs)/, "src")
      .replace(/(c|m)js$/, "tsx")
    if (!fs.existsSync(sourceFile)) {
      return
    }

    const stylesPath = path.relative(path.dirname(filePath), DIST_STYLES_PATH)
    const fileContent = fs.readFileSync(filePath).toString()

    fs.writeFile(filePath, `import "${stylesPath}"\n${fileContent}`, err => err)
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
