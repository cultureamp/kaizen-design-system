import { enUS, enAU } from "date-fns/locale"
import { formatDateRange } from "./formatDateRange"

describe("formatDateRange", () => {
  it("returns empty string if date range is not defined", () => {
    expect(formatDateRange(undefined, enAU)).toEqual("")
  })

  it("returns empty string if date range is partially defined", () => {
    expect(formatDateRange({ from: new Date("2022-05-01") }, enAU)).toEqual("")
    expect(
      formatDateRange({ from: undefined, to: new Date("2022-05-01") }, enAU)
    ).toEqual("")
  })

  describe("localisation - en-AU", () => {
    it("formats valid date range in en-AU text format", () => {
      expect(
        formatDateRange(
          { from: new Date("2022-05-01"), to: new Date("2022-11-25") },
          enAU
        )
      ).toEqual("1 May 2022 - 25 Nov 2022")
    })
  })

  describe("localisation - en-US", () => {
    it("formats valid date range in en-US text format", () => {
      expect(
        formatDateRange(
          { from: new Date("2022-05-01"), to: new Date("2022-11-25") },
          enUS
        )
      ).toEqual("May 1, 2022 - Nov 25, 2022")
    })
  })
})
