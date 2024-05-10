import fs from "fs"
import path from "path"
import util from "util"
import { getArgs } from "./getArgs.js"

const args = getArgs()

const readFileAsync = util.promisify(fs.readFile)

const getPackageName = async (): Promise<string | null> => {
  // Assuming the package.json file is in the root directory of the consuming repo
  // const packageJsonPath = path.resolve(process.cwd(), "package.json")
  const packageJsonPath = path.resolve(args.packagePath, "package.json")

  try {
    const data = await readFileAsync(packageJsonPath, "utf8")
    const packageJson = JSON.parse(data)
    return packageJson.name
  } catch (error) {
    // eslint-disable-next-line
    console.error("Error reading package.json:", error)
    return null
  }
}

const addGlobalStylesImport = async (
  stylesPath: string,
  dirOrFile: string
): Promise<void> => {
  if (fs.statSync(dirOrFile).isDirectory()) {
    const dirContent = await fs.promises.readdir(dirOrFile)

    dirContent.forEach(content => {
      const contentPath = path.join(dirOrFile, content)
      addGlobalStylesImport(stylesPath, contentPath)
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
      const packageName = await getPackageName()
      const distStylesPath = `${packageName}/dist/tailwind.css.js`
      addGlobalStylesImport(distStylesPath, `${args.packagePath}/${dir}`)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("Directory not found", e)
    }
  })()
})
