import { parseJsx } from "../__tests__/utils"
import {
  getKaioTagName,
  getKaioTagNamesMapByRegex,
  getKaioTagNamesMapByString,
} from "./getKaioTagName"

describe("getKaioTagName()", () => {
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

describe("getKaioTagNamesMapByString()", () => {
  it("returns the import names if it matches the string target specifier", () => {
    const input = parseJsx('import { Button } from "@kaizen/components"')
    const tagNames = getKaioTagNamesMapByString(input, "Button")
    expect(tagNames).toEqual(
      new Map([
        ["@kaizen/components", { tagName: "Button", originalName: "Button" }],
      ])
    )
  })

  it("returns the import alias if it matches the target specifier", () => {
    const input = parseJsx(
      'import { Button as KzButton } from "@kaizen/components"'
    )
    const tagNames = getKaioTagNamesMapByString(input, "Button")
    expect(tagNames).toEqual(
      new Map([
        ["@kaizen/components", { tagName: "KzButton", originalName: "Button" }],
      ])
    )
  })

  it("returns matching import names from different KAIO imports", () => {
    const input = parseJsx(`
      import { Button as KzButton } from "@kaizen/components"
      import { Button as FutureButton } from "@kaizen/components/future"
    `)
    const tagNames = getKaioTagNamesMapByString(input, "Button")
    expect(tagNames).toEqual(
      new Map([
        ["@kaizen/components", { tagName: "KzButton", originalName: "Button" }],
        [
          "@kaizen/components/future",
          { tagName: "FutureButton", originalName: "Button" },
        ],
      ])
    )
  })

  it("returns undefined if there is no match to the target specifier", () => {
    const input = parseJsx(`
      import { Well } from "@kaizen/components"
      import { Button } from "@kaizen/button"
    `)
    const tagNames = getKaioTagNamesMapByString(input, "Button")
    expect(tagNames).toBe(undefined)
  })
})

describe("getKaioTagNamesMapByRegex()", () => {
  it("returns the import names if it matches the regex target specifier", () => {
    const input = parseJsx(
      'import { AddIcon, ArrowDownIcon, Well } from "@kaizen/components"'
    )
    const tagNames = getKaioTagNamesMapByRegex(input, "Icon")
    expect(tagNames).toEqual(
      new Map([
        [
          "@kaizen/components",
          new Map([
            ["AddIcon", "AddIcon"],
            ["ArrowDownIcon", "ArrowDownIcon"],
          ]),
        ],
      ])
    )
  })

  it("returns the import alias if it matches the target specifier", () => {
    const input = parseJsx(
      'import { AddIcon as KzAddIcon, ArrowDownIcon, Well } from "@kaizen/components"'
    )
    const tagNames = getKaioTagNamesMapByRegex(input, "Icon")
    expect(tagNames).toEqual(
      new Map([
        [
          "@kaizen/components",
          new Map([
            ["KzAddIcon", "AddIcon"],
            ["ArrowDownIcon", "ArrowDownIcon"],
          ]),
        ],
      ])
    )
  })

  it("returns matching import names from different KAIO imports", () => {
    const input = parseJsx(`
      import { AddIcon, Well } from "@kaizen/components"
      import { Icon } from "@kaizen/components/future"
    `)
    const tagNames = getKaioTagNamesMapByRegex(input, "Icon$")
    expect(tagNames).toEqual(
      new Map([
        ["@kaizen/components", new Map([["AddIcon", "AddIcon"]])],
        ["@kaizen/components/future", new Map([["Icon", "Icon"]])],
      ])
    )
  })

  it("returns undefined if there is no match to the target specifier", () => {
    const input = parseJsx(`
      import { Well } from "@kaizen/components"
      import { AddIcon } from "@kaizen/icons"
    `)
    const tagNames = getKaioTagNamesMapByRegex(input, "Icon")
    expect(tagNames).toBe(undefined)
  })
})
