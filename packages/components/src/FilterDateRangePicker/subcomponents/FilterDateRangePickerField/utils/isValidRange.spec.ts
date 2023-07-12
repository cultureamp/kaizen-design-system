import { isValidRange } from "./isValidRange"

describe("isValidRange()", () => {
  it("returns true when the start date is before the end date", () => {
    const startDate = new Date("2022-05-15")
    const endDate = new Date("2022-05-20")
    const result = isValidRange(startDate, endDate)

    expect(result).toEqual(true)
  })

  it("returns false when the start date is after the end date", () => {
    const startDate = new Date("2022-05-25")
    const endDate = new Date("2022-05-20")
    const result = isValidRange(startDate, endDate)

    expect(result).toEqual(false)
  })

  it("returns false when the start date is undefined", () => {
    const startDate = undefined
    const endDate = new Date("2022-05-20")
    const result = isValidRange(startDate, endDate)

    expect(result).toEqual(false)
  })

  it("returns false when the end date is undefined", () => {
    const startDate = new Date("2022-05-20")
    const endDate = undefined
    const result = isValidRange(startDate, endDate)

    expect(result).toEqual(false)
  })

  it("returns false when both the end and start dates are undefined", () => {
    const startDate = undefined
    const endDate = undefined
    const result = isValidRange(startDate, endDate)

    expect(result).toEqual(false)
  })
})
