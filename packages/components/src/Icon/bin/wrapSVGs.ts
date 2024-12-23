import fs from 'fs'
import path from 'path'
import { insertSvgData } from './utils/insertSvgData'
import { svgToComponentTitle } from './utils/svgToComponentTitle'

const deleteSourceDir = process.argv.includes('--delete-source-dir')

const sourceDirIndex = process.argv.indexOf('--source-dir')
const sourceDir = process.argv[sourceDirIndex + 1]
if (!sourceDir) {
  throw Error(`
    No source dir provided. Provide a source dir with '--source-dir'
`)
}

const outputDirIndex = process.argv.indexOf('--output-dir')
const outputDir = process.argv[outputDirIndex + 1]
if (!outputDir) {
  throw Error(`
    No output dir provided. Provide an output dir with '--output-dir'
`)
}

const autogeneratedWarning = `
  // This file is autogenerated by ${path.basename(__filename)}
  // Changes to this file will be overwritten

`

const reactTemplate = autogeneratedWarning + fs.readFileSync(`${__dirname}/Template.tsx`).toString()
const svgFileNames = fs.readdirSync(sourceDir)

svgFileNames.forEach((svgName: string) => {
  const svgPath = path.join(sourceDir, svgName)
  const svgContent = fs.readFileSync(svgPath).toString()
  const svgFileName = path.parse(svgPath).name
  const pascalFileName = svgToComponentTitle(svgFileName)

  const newComponentContent = insertSvgData(reactTemplate, pascalFileName, svgContent)

  fs.writeFile(`${outputDir}/${pascalFileName}.tsx`, newComponentContent, (err) => {
    if (err) throw err
  })
})

const filesToExportFromIndex: string[] = []
fs.readdirSync(outputDir).forEach((file: string) => {
  // To only export React components
  if (!file.includes('.tsx')) {
    return
  }
  filesToExportFromIndex.push(path.parse(file).name)
})

filesToExportFromIndex.push('types')

const importStatements = filesToExportFromIndex.map((fileName) => `export * from "./${fileName}";`)

const indexFileContents = [autogeneratedWarning, ...importStatements].join(' ')

fs.writeFile(`${outputDir}/index.ts`, indexFileContents, (err) => {
  if (err) throw err
})

if (deleteSourceDir) fs.rmdirSync(sourceDir, { recursive: true })
