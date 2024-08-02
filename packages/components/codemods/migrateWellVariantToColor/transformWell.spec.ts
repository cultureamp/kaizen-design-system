import fs from "fs"
import path from "path"
import ts from "typescript"
import {
  transformSource,
  wellTransformer,
  updateFileContents,
  getImportAlias,
} from "./transformWell"

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

describe("getImportAlias", () => {
  it("should return the import name if it matches the target specifier", () => {
    const input = parseJsx(`
      import { Well } from "@kaizen/components"
      export const TestComponent = () => <div><Well>Test</Well></div>`)
    const importAlias = getImportAlias(input, "Well")
    expect(importAlias).toBe("Well")
  })
  it("should return the import alias if it matches the target specifier", () => {
    const input = parseJsx(`
      import { Well as KaizenWell } from "@kaizen/components"
      export const TestComponent = () => <div><Well>Test</Well></div>`)
    const importAlias = getImportAlias(input, "Well")
    expect(importAlias).toBe("KaizenWell")
  })
  it("should return the undefined if there is no match to the target specifier", () => {
    const input = parseJsx(`
      import { Tag } from "@kaizen/components"
      import { Well } from "@kaizen/well"
      export const TestComponent = () => <div><Well>Test</Well></div>`)
    const importAlias = getImportAlias(input, "Well")
    expect(importAlias).toBe(undefined)
  })
})

describe("updateFileContents", () => {
  it("should update Well components imported from @kaizen/components", () => {
    const filePath = path.resolve(
      path.join(__dirname, "./__fixtures__/Well.tsx")
    )
    const fileContent = fs.readFileSync(filePath, "utf8")
    const sourceFile = parseJsx(fileContent)

    expect(updateFileContents(sourceFile, "Well")).toMatchSnapshot()
  })
  it("should update Well components imported from @kaizen/component/path", () => {
    const filePath = path.resolve(
      path.join(__dirname, "./__fixtures__/WellV3.tsx")
    )
    const fileContent = fs.readFileSync(filePath, "utf8")
    const sourceFile = parseJsx(fileContent)

    expect(updateFileContents(sourceFile, "Well")).toMatchSnapshot()
  })
  it("should update aliased Well components imported from @kaizen/component", () => {
    const filePath = path.resolve(
      path.join(__dirname, "./__fixtures__/WellAlias.tsx")
    )
    const fileContent = fs.readFileSync(filePath, "utf8")
    const sourceFile = parseJsx(fileContent)

    expect(updateFileContents(sourceFile, "KaizenWell")).toMatchSnapshot()
  })
})
