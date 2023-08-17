const fs = require("fs")
const path = require("path")

const Utils = require("./wrapSVGUtils")

const reactTemplate = fs.readFileSync("./src/Icons/Template.tsx").toString()

// TODO: loop over all files in built-icons dir
const svgFilePaths = ["./built-icons/academy.icon.svg"]

svgFilePaths.forEach(svgPath => {
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
    (err: typeof Error) => console.log(err)
  )
})
