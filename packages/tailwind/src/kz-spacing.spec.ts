import { filterOutNonPixelTokens } from "./kz-spacing"

const numericKeyPairs = {
  0: "0",
  1: ".0625rem",
  2: ".125rem",
}
const nonNumericKeyPairs = {
  xs: "0.375rem",
  sm: "0.75rem",
}

const dummyData = {
  ...numericKeyPairs,
  ...nonNumericKeyPairs,
}

describe("filterOutNonPixelTokens", () => {
  const result = filterOutNonPixelTokens(dummyData)

  it("It removes pairs with non-numeric keys", () => {
    Object.keys(nonNumericKeyPairs).forEach(key => {
      expect(result).not.toHaveProperty(key)
    })
  })
  it("Keeps all numeric keys", () => {
    expect(result).toEqual(numericKeyPairs)
  })
})
