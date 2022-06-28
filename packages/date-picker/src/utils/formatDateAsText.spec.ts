import { enUS, enAU } from "date-fns/locale"
import { formatDateAsText } from "./formatDateAsText"

const onFormat = jest.fn<void, [string]>()

describe("formatDateAsText", () => {
  it("formats invalid date as error message", () => {
    formatDateAsText(new Date("potato"), undefined, enUS, onFormat)
    expect(onFormat).toHaveBeenCalledWith("Invalid Date")
  })

  describe("localisation - en-AU", () => {
    it("formats valid date in en-AU text format", () => {
      formatDateAsText(new Date("2022-01-16"), undefined, enAU, onFormat)
      expect(onFormat).toHaveBeenCalledWith("16 Jan 2022")
    })

    it("formats disabled date in numeral format", () => {
      const disabledDays = [{ before: new Date("2022-02-16") }]
      formatDateAsText(new Date("2022-01-16"), disabledDays, enAU, onFormat)
      expect(onFormat).toHaveBeenCalledWith("16/01/2022")
    })
  })

  describe("localisation - en-US", () => {
    it("formats valid date in en-US text format", () => {
      formatDateAsText(new Date("2022-01-16"), undefined, enUS, onFormat)
      expect(onFormat).toHaveBeenCalledWith("Jan 16, 2022")
    })
    it("formats disabled date in numeral format", () => {
      const disabledDays = [{ before: new Date("2022-02-16") }]
      formatDateAsText(new Date("2022-01-16"), disabledDays, enUS, onFormat)
      expect(onFormat).toHaveBeenCalledWith("01/16/2022")
    })
  })
})
