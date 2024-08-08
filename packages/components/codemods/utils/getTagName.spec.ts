import { parseJsx } from "../__tests__/utils"
import { getTagName } from "./getTagName"

describe("getTagName", () => {
  it("returns the import name if it matches the target specifier", () => {
    const input = parseJsx('import { Well } from "@kaizen/components"')
    const tagName = getTagName(input, "Well")
    expect(tagName).toBe("Well")
  })

  it("returns the import alias if it matches the target specifier", () => {
    const input = parseJsx(
      'import { Well as KaizenWell } from "@kaizen/components"'
    )
    const tagName = getTagName(input, "Well")
    expect(tagName).toBe("KaizenWell")
  })

  it("returns undefined if there is no match to the target specifier", () => {
    const input = parseJsx('import { Well } from "@kaizen/well"')
    const tagName = getTagName(input, "Well")
    expect(tagName).toBe(undefined)
  })
})
