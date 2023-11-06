import { isCompleteDateRange } from "./isCompleteDateRange"

describe("isCompleteDateRange", () => {
  it("is not a complete date range if it is not defined", () => {
    expect(isCompleteDateRange(undefined)).toBe(false)
  })

  it("is not a complete date range if it is partially defined", () => {
    expect(isCompleteDateRange({ from: new Date("2022-05-01") })).toBe(false)
    expect(
      isCompleteDateRange({ from: undefined, to: new Date("2022-05-01") })
    ).toBe(false)
  })

  it("is a complete date range if both from/to dates are defined", () => {
    expect(
      isCompleteDateRange({
        from: new Date("2022-05-01"),
        to: new Date("2022-12-17"),
      })
    ).toBe(true)
  })
})
