import { checkArraysMatch } from "./checkArraysMatch"

describe("checkArraysMatch()", () => {
  it("returns false if the arrays do not have the same length", () => {
    const result = checkArraysMatch(["a"], ["a", "b"])
    expect(result).toBe(false)
  })

  it("returns false if the arrays do not have the same values", () => {
    const result = checkArraysMatch(["a"], ["b"])
    expect(result).toBe(false)
  })

  it("returns true if the arrays have the same values", () => {
    const result = checkArraysMatch(["a"], ["a"])
    expect(result).toBe(true)
  })
})
