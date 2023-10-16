import { enUS, enAU } from "date-fns/locale"
import { formatDateAsText } from "./formatDateAsText"

describe("formatDateAsText", () => {
  it("formats invalid date as error message", () => {
    expect(formatDateAsText(new Date("potato"), undefined, enUS)).toEqual(
      "Invalid Date"
    )
  })

  describe("localisation - en-AU", () => {
    it("formats valid date in en-AU text format", () => {
      expect(formatDateAsText(new Date("2022-01-16"), undefined, enAU)).toEqual(
        "16 Jan 2022"
      )
    })

    it("formats disabled date and remains in a in numeral format", () => {
      const disabledDays = { before: new Date("2022-02-16") }

      expect(
        formatDateAsText(new Date("2022-01-16"), disabledDays, enAU)
      ).toEqual("16/01/2022")
    })
  })

  describe("localisation - en-US", () => {
    it("formats valid date in en-US text format", () => {
      expect(formatDateAsText(new Date("2022-01-16"), undefined, enUS)).toEqual(
        "Jan 16, 2022"
      )
    })
    it("formats disabled date in and remains in a numeral format", () => {
      const disabledDays = { before: new Date("2022-02-16") }

      expect(
        formatDateAsText(new Date("2022-01-16"), disabledDays, enUS)
      ).toEqual("01/16/2022")
    })
  })
})
