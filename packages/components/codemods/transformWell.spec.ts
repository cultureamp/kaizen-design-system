import ts from "typescript"
import { TestWellComponent } from "./testInput"
import { transformAst } from "./transformWell"

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

describe("wellTransformer", () => {
  it('should replace variant="default" with color="gray"', () => {
    const inputAst = parseJsx('<Well variant="default">Test</Well>')
    const outputAst = parseJsx('<Well color="gray">Test</Well>')
    const transformed = transformAst(inputAst)
    expect(transformed.trim()).toBe(printAst(outputAst).trim())
  })

  it('should replace variant="informative" with color="blue"', () => {
    const inputAst = parseJsx('<Well variant="informative">Test</Well>')
    const outputAst = parseJsx('<Well color="blue">Test</Well>')
    const transformed = transformAst(inputAst)
    expect(transformed.trim()).toBe(printAst(outputAst).trim())
  })

  it('should add color="gray" if variant is not specified', () => {
    const input = parseJsx("<Well>Test</Well>")
    const output = parseJsx('<Well color="gray">Test</Well>')
    const transformed = transformAst(input)
    expect(transformed.trim()).toBe(printAst(output).trim())
  })

  it("should handle multiple attributes and replace variant", () => {
    const input = parseJsx(
      '<Well variant="informative" someProp="value">Test</Well>'
    )
    const output = parseJsx('<Well color="blue" someProp="value">Test</Well>')
    const transformed = transformAst(input)
    expect(transformed.trim()).toBe(printAst(output).trim())
  })

  it("should handle multiple attributes and add color if variant is not specified", () => {
    const input = parseJsx('<Well someProp="value">Test</Well>')
    const output = parseJsx('<Well someProp="value" color="gray">Test</Well>')
    const transformed = transformAst(input)
    expect(transformed.trim()).toBe(printAst(output).trim())
  })

  it("should handle nested Well components", () => {
    const input = parseJsx('<div><Well variant="informative">Test</Well></div>')
    const output = parseJsx('<div><Well color="blue">Test</Well></div>')
    const transformed = transformAst(input)
    expect(transformed.trim()).toBe(printAst(output).trim())
  })

  it("should transform multiple Wells", () => {
    const input = parseJsx(
      '<div><Well variant="informative">Test</Well><Well>Test 2</Well></div>'
    )
    const output = parseJsx(
      '<div><Well color="blue">Test</Well><Well color="gray">Test 2</Well></div>'
    )
    const transformed = transformAst(input)
    expect(transformed.trim()).toBe(printAst(output).trim())
  })
})
