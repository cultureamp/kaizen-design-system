import { filterDenyListValues } from "./kz-spacing"

describe("filterDenyListValues", () => {
  it("Keeps all numeric keys", () => {
    const result = filterDenyListValues({
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
  it("Keeps valid tailwind defaults", () => {
    const result = filterDenyListValues({
      0: "0",
      xs: "0.375rem",
      1: ".0625rem",
      sm: "0.75rem",
      2: ".125rem",
      "w-1/2": "50%",
      "w-full": "100%",
    })

    expect(result).toEqual({
      0: "0",
      1: ".0625rem",
      2: ".125rem",
      "w-1/2": "50%",
      "w-full": "100%",
    })
  })
})
