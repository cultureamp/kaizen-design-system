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

  it("Keeps all numeric keys", () => {
    expect(result).toEqual(numericKeyPairs)
  })
})
