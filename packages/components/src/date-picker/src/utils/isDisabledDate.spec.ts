import { isDisabledDate } from "./isDisabledDate"

describe("isDisabledDate", () => {
  it("is true when given date is disabled", () => {
    const disabledDays = [new Date(2022, 3, 24)]
    expect(isDisabledDate(new Date(2022, 3, 24), disabledDays)).toEqual(true)
  })

  it("is false when given date is not disabled", () => {
    const disabledDays = [new Date(2022, 3, 24)]
    expect(isDisabledDate(new Date(2022, 1, 24), disabledDays)).toEqual(false)
  })

  it("is false when no dates are disabled", () => {
    expect(isDisabledDate(new Date(2022, 1, 24), undefined)).toEqual(false)
    expect(isDisabledDate(new Date(2022, 1, 24), [])).toEqual(false)
  })

  it("correctly checks if a date is disabled before a specified date", () => {
    const disabledDays = [
      {
        before: new Date(2022, 1, 24),
      },
    ]

    expect(isDisabledDate(new Date(2022, 1, 23), disabledDays)).toEqual(true)
    expect(isDisabledDate(new Date(2022, 1, 24), disabledDays)).toEqual(false)
  })

  it("correctly checks if a date is disabled after a specified date", () => {
    const disabledDays = [
      {
        after: new Date(2022, 1, 24),
      },
    ]

    expect(isDisabledDate(new Date(2022, 1, 24), disabledDays)).toEqual(false)
    expect(isDisabledDate(new Date(2022, 1, 25), disabledDays)).toEqual(true)
  })
})
