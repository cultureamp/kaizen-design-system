import { parseJsx } from "../__tests__"
import { getImportAlias } from "./getImportAlias"

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
