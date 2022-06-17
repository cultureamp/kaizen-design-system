import { formatDateAsText } from "./formatDateAsText"

const onFormat = jest.fn<void, [string]>()

describe("formatDateAsText", () => {
  it("formats valid date in text format", () => {
    formatDateAsText(new Date("2022-01-16"), undefined, onFormat)
    expect(onFormat).toHaveBeenCalledWith("Jan 16, 2022")
  })

  it("formats disabled date in numeral format", () => {
    const disabledDays = [{ before: new Date("2022-02-16") }]
    formatDateAsText(new Date("2022-01-16"), disabledDays, onFormat)
    expect(onFormat).toHaveBeenCalledWith("Jan 16, 2022")
  })

  it("formats invalid date as error message", () => {
    formatDateAsText(new Date("potato"), undefined, onFormat)
    expect(onFormat).toHaveBeenCalledWith("Invalid Date")
  })
})
