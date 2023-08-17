import React from "react"
import { kebabToPascalCase } from "./wrapSVGUtils"

describe("kebabToPascalCase", () => {
  it("turns a single lower case name into Pascal case", () => {
    const original = "academy"
    const expected = "Academy"
    expect(kebabToPascalCase(original)).toEqual(expected)
  })
  it("turns kebab with multiple dashes to Pascal case", () => {
    const original = "action-off-white"
    const expected = "ActionOffWhite"
    expect(kebabToPascalCase(original)).toEqual(expected)
  })
})
