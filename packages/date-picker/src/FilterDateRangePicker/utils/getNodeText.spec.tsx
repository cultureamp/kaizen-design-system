import React from "react"
import { getNodeText } from "./getNodeText"

describe("getNodeText", () => {
  test("empty values", () => {
    expect(getNodeText(null)).toBe("")
    expect(getNodeText(undefined)).toBe("")
  })

  test("string", () => {
    expect(getNodeText("Bacon pancakes")).toBe("Bacon pancakes")
  })

  test("number", () => {
    expect(getNodeText(3)).toBe(3)
  })

  test("array", () => {
    expect(getNodeText([3, "bacon", "pancakes"])).toBe("3baconpancakes")
  })

  test("React element", () => {
    expect(
      getNodeText(
        <div>
          3 <span>bacon</span> pancakes
        </div>
      )
    ).toBe("3 bacon pancakes")
  })
})
