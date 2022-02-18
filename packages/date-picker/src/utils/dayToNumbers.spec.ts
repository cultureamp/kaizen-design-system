import { DayOfWeek } from "../DatePicker/DatePicker"
import { daysToNumbers } from "./daysToNumbers"

describe("dayToNumbers", () => {
  it("returns correct number when passed disabledDay array", () => {
    const disabledDays = [DayOfWeek.Mon, DayOfWeek.Fri]

    expect(daysToNumbers(disabledDays)).toStrictEqual([1, 5])
  })

  it("returns empty array when passed no value", () => {
    const disabledDays = []

    expect(daysToNumbers(disabledDays)).toStrictEqual([])
  })
})
