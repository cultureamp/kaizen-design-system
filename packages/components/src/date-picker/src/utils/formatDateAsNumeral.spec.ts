import { enUS, enAU } from "date-fns/locale"
import { formatDateAsNumeral } from "./formatDateAsNumeral"

describe("formatDateAsNumeral", () => {
  it("formats invalid date as error message", () => {
    expect(formatDateAsNumeral(new Date("potato"), enUS)).toEqual("")
  })

  describe("localisation - en-AU", () => {
    it("formats valid date in en-AU text format", () => {
      expect(formatDateAsNumeral(new Date("2022-01-16"), enAU)).toEqual(
        "16/01/2022"
      )
    })
  })

  describe("localisation - en-US", () => {
    it("formats valid date in en-US text format", () => {
      expect(formatDateAsNumeral(new Date("2022-01-16"), enUS)).toEqual(
        "01/16/2022"
      )
    })
  })
})
