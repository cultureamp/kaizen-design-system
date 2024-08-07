import { parseJsx } from "../__tests__/utils"
import { getImportAlias } from "./getImportAlias"

describe("getImportAlias", () => {
  it("returns the import name if it matches the target specifier", () => {
    const input = parseJsx(`
      import { Well } from "@kaizen/components"
      export const TestComponent = () => <div><Well>Test</Well></div>`)
    const importAlias = getImportAlias(input, "Well")
    expect(importAlias).toBe("Well")
  })
  it("returns the import alias if it matches the target specifier", () => {
    const input = parseJsx(`
      import { Well as KaizenWell } from "@kaizen/components"
      export const TestComponent = () => <div><KaizenWell>Test</KaizenWell></div>`)
    const importAlias = getImportAlias(input, "Well")
    expect(importAlias).toBe("KaizenWell")
  })
  it("returns undefined if there is no match to the target specifier", () => {
    const input = parseJsx(`
      import { Tag } from "@kaizen/components"
      import { Well } from "@kaizen/well"
      export const TestComponent = () => <div><Well>Test</Well></div>`)
    const importAlias = getImportAlias(input, "Well")
    expect(importAlias).toBe(undefined)
  })
})
