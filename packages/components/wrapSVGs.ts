console.log("RUNNING")
const fs = require("fs")
const path = require("path")

const Utils = require("./src/Icons/bin/wrapSVGUtils")

const sourceDirIndex = process.argv.indexOf("--source-dir")
const sourceDir = process.argv[sourceDirIndex + 1]
if (!sourceDir) {
  throw Error(`
    No source dir provided. Provide a source dir with '--source-dir'
`)
}

const outputDirIndex = process.argv.indexOf("--output-dir")
const outputDir = process.argv[outputDirIndex + 1]
if (!outputDir) {
  throw Error(`
    No output dir provided. Provide an output dir with '--output-dir'
`)
}

const reactTemplate = fs
  .readFileSync("./src/Icons/subComponents/Template.tsx")
  .toString()
const svgFileNames = fs.readdirSync(sourceDir)

svgFileNames.forEach((svgName: string) => {
  const svgPath = path.join(sourceDir, svgName)
  const svgContent = fs.readFileSync(svgPath).toString()
  const svgFileName = path.parse(svgPath).name
  const pascalFileName = Utils.svgToComponentTitle(svgFileName)

  const newComponentContent = Utils.insertSvgData(
    reactTemplate,
    pascalFileName,
    svgContent
  )

  fs.writeFile(
    `${outputDir}/${pascalFileName}.tsx`,
    newComponentContent,
    (err: typeof Error) => {
      if (err) console.log(err)
    }
  )
})
