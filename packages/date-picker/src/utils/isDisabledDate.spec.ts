import { isDisabledDate } from "./isDisabledDate"

const disabledDaysMock = [new Date("2022-04-24T00:00:00.000Z")]

describe("isDisabledDate", () => {
  it("returns true when given date is disabled", () => {
    const date = new Date(2022, 3, 24)

    expect(isDisabledDate(date, disabledDaysMock)).toEqual(true)
  })

  it("returns false when given date is not disabled", () => {
    const date = new Date(2022, 1, 24)

    expect(isDisabledDate(date, disabledDaysMock)).toEqual(false)
  })
})
