import { getValidValue } from "./getValidValue"

describe("getValidValue()", () => {
  describe("Object", () => {
    it("returns value when not empty", () => {
      const value = { coffee: "latte" }
      expect(getValidValue(value)).toEqual(value)
    })

    it("returns undefined when object is empty", () => {
      expect(getValidValue({})).toBeUndefined()
    })
  })

  describe("Array", () => {
    it("returns value when not empty", () => {
      const value = ["coffee"]
      expect(getValidValue(value)).toEqual(value)
    })

    it("returns undefined when array is empty", () => {
      expect(getValidValue([])).toBeUndefined()
    })
  })

  it("returns value when not an object or array", () => {
    expect(getValidValue(undefined)).toBe(undefined)
    expect(getValidValue(null)).toBe(null)
    expect(getValidValue("")).toBe("")
    expect(getValidValue(0)).toBe(0)
  })
})
