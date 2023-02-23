import { filterOutNonPixelTokens } from "./kz-spacing"

describe("filterOutNonPixelTokens", () => {
  it("Keeps all numeric keys", () => {
    const result = filterOutNonPixelTokens({
      0: "0",
      xs: "0.375rem",
      1: ".0625rem",
      sm: "0.75rem",
      2: ".125rem",
    })

    expect(result).toEqual({
      0: "0",
      1: ".0625rem",
      2: ".125rem",
    })
  })
})
