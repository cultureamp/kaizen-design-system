const fs = require("fs")
const path = require("path")

const Utils = require("./wrapSVGUtils")

const reactTemplate = fs.readFileSync("./src/Icons/Template.tsx").toString()

const svgFileNames = fs.readdirSync("./built-icons/")

svgFileNames.forEach((svgName: string) => {
  const svgPath = path.join("./built-icons", svgName)
  const svgContent = fs.readFileSync(svgPath).toString()
  const svgFileName = path.parse(svgPath).name
  const pascalFileName = Utils.svgToComponentTitle(svgFileName)

  const newComponentContent = Utils.insertSvgData(
    reactTemplate,
    pascalFileName,
    svgContent
  )

  fs.writeFile(
    `./IconComponents/${pascalFileName}.tsx`,
    newComponentContent,
    (err: typeof Error) => {
      if (err) console.log(err)
    }
  )
})
