import { parseJsx } from "../__tests__/utils"
import { getKaioTagName } from "./getKaioTagName"

describe("getKaioTagName", () => {
  it("returns the import name if it matches the target specifier", () => {
    const input = parseJsx('import { Well } from "@kaizen/components"')
    const tagName = getKaioTagName(input, "Well")
    expect(tagName).toBe("Well")
  })

  it("returns the import alias if it matches the target specifier", () => {
    const input = parseJsx(
      'import { Well as KaizenWell } from "@kaizen/components"'
    )
    const tagName = getKaioTagName(input, "Well")
    expect(tagName).toBe("KaizenWell")
  })

  it("returns undefined if there is no match to the target specifier", () => {
    const input = parseJsx('import { Well } from "@kaizen/well"')
    const tagName = getKaioTagName(input, "Well")
    expect(tagName).toBe(undefined)
  })
})
