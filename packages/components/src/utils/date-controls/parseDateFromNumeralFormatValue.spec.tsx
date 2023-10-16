import { enUS, enAU } from "date-fns/locale"
import { parseDateFromNumeralFormatValue } from "./parseDateFromNumeralFormatValue"

describe("parseDateFromNumeralFormatValue", () => {
  it("parses invalid date as error message", () => {
    expect(parseDateFromNumeralFormatValue("potato", enUS).toString()).toEqual(
      "Invalid Date"
    )
  })

  describe("localisation - en-AU", () => {
    it("parses valid date in en-AU text format", () => {
      expect(parseDateFromNumeralFormatValue("15/01/2022", enAU)).toEqual(
        new Date("2022-01-15")
      )
    })
  })

  describe("localisation - en-US", () => {
    it("parses valid date in en-US text format", () => {
      expect(parseDateFromNumeralFormatValue("01/15/2022", enUS)).toEqual(
        new Date("2022-01-15")
      )
    })
  })
})
