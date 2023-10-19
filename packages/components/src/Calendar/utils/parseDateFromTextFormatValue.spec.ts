import { enUS, enAU } from "date-fns/locale"
import { parseDateFromTextFormatValue } from "./parseDateFromTextFormatValue"

describe("parseDateFromTextFormatValue", () => {
  it("parses empty string as error string", () => {
    expect(parseDateFromTextFormatValue("", enUS).toString()).toEqual(
      "Invalid Date"
    )
  })

  it("parses invalid date as error string", () => {
    expect(parseDateFromTextFormatValue("potato", enUS).toString()).toEqual(
      "Invalid Date"
    )
  })

  describe("localisation - en-AU", () => {
    it("parses valid date in en-AU text format", () => {
      expect(parseDateFromTextFormatValue("15 Jan 2022", enAU)).toEqual(
        new Date("2022-01-15")
      )
    })
  })

  describe("localisation - en-US", () => {
    it("parses valid date in en-US text format", () => {
      expect(parseDateFromTextFormatValue("Jan 15, 2022", enUS)).toEqual(
        new Date("2022-01-15")
      )
    })
  })
})
