import { isDisabledDate } from "./isDisabledDate"

describe("isDisabledDate", () => {
  it("is true when given date is disabled", () => {
    const disabledDays = new Date(2022, 3, 24)
    expect(isDisabledDate(new Date(2022, 3, 24), disabledDays)).toEqual(true)
  })

  it("is false when given date is not disabled", () => {
    const disabledDays = new Date(2022, 3, 24)
    expect(isDisabledDate(new Date(2022, 1, 24), disabledDays)).toEqual(false)
  })

  it("is false when no dates are disabled", () => {
    expect(isDisabledDate(new Date(2022, 1, 24), undefined)).toEqual(false)
    expect(isDisabledDate(new Date(2022, 1, 24), [])).toEqual(false)
  })

  it("correctly checks if a date is disabled before a specified date", () => {
    const disabledDays = { before: new Date(2022, 1, 24) }

    expect(isDisabledDate(new Date(2022, 1, 23), disabledDays)).toEqual(true)
    expect(isDisabledDate(new Date(2022, 1, 24), disabledDays)).toEqual(false)
  })

  it("correctly checks if a date is disabled after a specified date", () => {
    const disabledDays = { after: new Date(2022, 1, 24) }

    expect(isDisabledDate(new Date(2022, 1, 24), disabledDays)).toEqual(false)
    expect(isDisabledDate(new Date(2022, 1, 25), disabledDays)).toEqual(true)
  })

  it("is true when all dates are disabled", () => {
    const disabledDays = true
    expect(isDisabledDate(new Date(2022, 3, 24), disabledDays)).toEqual(true)
  })

  it("correctly checks multiple conditions", () => {
    const disabledDays = [
      new Date("2022-04-03"),
      { from: new Date("2022-05-01"), to: new Date("2022-05-05") },
    ]
    expect(isDisabledDate(new Date("2022-04-03"), disabledDays)).toEqual(true)
    expect(isDisabledDate(new Date("2022-04-04"), disabledDays)).toEqual(false)
    expect(isDisabledDate(new Date("2022-04-30"), disabledDays)).toEqual(false)
    expect(isDisabledDate(new Date("2022-05-01"), disabledDays)).toEqual(true)
    expect(isDisabledDate(new Date("2022-05-03"), disabledDays)).toEqual(true)
    expect(isDisabledDate(new Date("2022-05-05"), disabledDays)).toEqual(true)
    expect(isDisabledDate(new Date("2022-05-06"), disabledDays)).toEqual(false)
  })
})
