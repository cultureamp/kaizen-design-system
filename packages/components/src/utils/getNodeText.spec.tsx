import React from "react"
import { getNodeText } from "./getNodeText"

describe("getNodeText()", () => {
  it("returns an empty string when given empty values", () => {
    expect(getNodeText(null)).toBe("")
    expect(getNodeText(undefined)).toBe("")
  })

  it("returns the same string when given a string", () => {
    expect(getNodeText("Bacon pancakes")).toBe("Bacon pancakes")
  })

  it("returns the same number when given a number", () => {
    expect(getNodeText(3)).toEqual(3)
  })

  it("concatenates elements of an array into a string", () => {
    expect(getNodeText([3, "bacon", "pancakes"])).toBe("3baconpancakes")
  })

  it("returns the text from a React element", () => {
    expect(
      getNodeText(
        <div>
          3 <span>bacon</span> pancakes
        </div>
      )
    ).toBe("3 bacon pancakes")
  })
})
