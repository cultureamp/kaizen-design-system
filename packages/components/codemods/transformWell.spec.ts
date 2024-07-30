import path from "path"
import ts from "typescript"
import { transformWellSource, updateFileContents } from "./transformWell"

// This function is used to parse a stringified JSX element into an AST
function parseJsx(jsx: string): ts.SourceFile {
  return ts.createSourceFile(
    "tempFile.tsx",
    jsx,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX
  )
}

// This function is used to print the AST as a string and is only used for testing
function printAst(ast: ts.SourceFile): string {
  const printer = ts.createPrinter()
  return printer.printFile(ast)
}

// describe("transformWellSource", () => {
//   it("should only transform when Well is imported from @kaizen/components", () => {
//     const input = parseJsx(`
//       import { Well } from "@kaizen/draft-well"
//       export const TestComponent = () => <div><Well>Test</Well></div>`)
//     const output = parseJsx(`
//       import { Well } from "@kaizen/draft-well"
//       export const TestComponent = () => <div><Well>Test</Well></div>`)
//     const transformed = transformWellSource(input)
//     expect(printAst(transformed).trim()).toBe(printAst(output).trim())
//   })

//   it('should replace variant="default" with color="gray"', () => {
//     const inputAst = parseJsx(`
//       import {Well} from "@kaizen/components"
//       export const TestComponent = () => <Well variant="default">Test</Well>
//       `)
//     const outputAst = parseJsx(`
//       import {Well} from "@kaizen/components"
//       export const TestComponent = () => <Well color="gray">Test</Well>
//     `)
//     const transformed = transformWellSource(inputAst)
//     expect(printAst(transformed).trim()).toBe(printAst(outputAst).trim())
//   })

//   it('should replace variant="informative" with color="blue"', () => {
//     const inputAst = parseJsx(`
//       import {Well} from "@kaizen/components"
//       export const TestComponent = () => <Well variant="informative">Test</Well>
//     `)
//     const outputAst = parseJsx(`
//       import {Well} from "@kaizen/components"
//       export const TestComponent = () => <Well color="blue">Test</Well>
//     `)
//     const transformed = transformWellSource(inputAst)
//     expect(printAst(transformed).trim()).toBe(printAst(outputAst).trim())
//   })

//   it('should add color="gray" if variant is not specified', () => {
//     const inputAst = parseJsx(`
//       import {Well} from "@kaizen/components"
//       export const TestComponent = () => <Well>Test</Well>
//     `)
//     const outputAst = parseJsx(`
//       import {Well} from "@kaizen/components"
//       export const TestComponent = () => <Well color="gray">Test</Well>
//     `)
//     const transformed = transformWellSource(inputAst)
//     expect(printAst(transformed).trim()).toBe(printAst(outputAst).trim())
//   })

//   it("should handle multiple attributes and replace only variant", () => {
//     const inputAst = parseJsx(`
//       import {Well} from "@kaizen/components"
//       export const TestComponent = () => <Well variant="informative" id="123">Test</Well>
//     `)
//     const outputAst = parseJsx(`
//       import {Well} from "@kaizen/components"
//       export const TestComponent = () => <Well color="blue" id="123">Test</Well>
//     `)
//     const transformed = transformWellSource(inputAst)
//     expect(printAst(transformed).trim()).toBe(printAst(outputAst).trim())
//   })

//   it("should handle multiple attributes and add color if variant is not specified", () => {
//     const inputAst = parseJsx(`
//       import {Well} from "@kaizen/components"
//       export const TestComponent = () => <Well id="123">Test</Well>
//     `)
//     const outputAst = parseJsx(`
//       import {Well} from "@kaizen/components"
//       export const TestComponent = () => <Well id="123"  color="gray">Test</Well>
//     `)
//     const transformed = transformWellSource(inputAst)
//     expect(printAst(transformed).trim()).toBe(printAst(outputAst).trim())
//   })

//   it("should handle nested Well components", () => {
//     const inputAst = parseJsx(`
//       import {Well} from "@kaizen/components"
//       export const TestComponent = () => <div><Well id="123">Test</Well></div>
//     `)
//     const outputAst = parseJsx(`
//       import {Well} from "@kaizen/components"
//       export const TestComponent = () => <div><Well id="123" color="gray">Test</Well></div>
//     `)
//     const transformed = transformWellSource(inputAst)
//     expect(printAst(transformed).trim()).toBe(printAst(outputAst).trim())
//   })

//   it("should transform multiple Wells", () => {
//     const inputAst = parseJsx(`
//       import {Well} from "@kaizen/components"
//       export const TestComponent = () => <div><Well variant="informative">Test</Well><Well>Test 2</Well></div>
//     `)
//     const outputAst = parseJsx(`
//       import {Well} from "@kaizen/components"
//       export const TestComponent = () => <div><Well color="blue">Test</Well><Well color="gray">Test 2</Well></div>
//     `)
//     const transformed = transformWellSource(inputAst)
//     expect(printAst(transformed).trim()).toBe(printAst(outputAst).trim())
//   })
// })

describe("updateFileContents", () => {
  it("should update Well components imported from @kaizen/components", async () => {
    const filePath = path.resolve(path.join(__dirname, "./fixtures/Well.tsx"))

    const updatedFileContent = updateFileContents(filePath)

    expect(updatedFileContent).toMatchSnapshot()
  })
  it("should not update Well components imported from @kaizen/draft-well or legacy packages", async () => {
    const legacyFilePath = path.resolve(
      path.join(__dirname, "./fixtures/LegacyWell.tsx")
    )

    const updatedFileContent = updateFileContents(legacyFilePath)
    expect(updatedFileContent).toMatchSnapshot()
  })
  it("should update Well components imported from @kaizen/component/path", async () => {
    const legacyFilePath = path.resolve(
      path.join(__dirname, "./fixtures/WellV3.tsx")
    )

    const updatedFileContent = updateFileContents(legacyFilePath)
    expect(updatedFileContent).toMatchSnapshot()
  })
})
