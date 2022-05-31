import { DayOfWeek } from "../DatePicker/DatePicker"
import { calculateDisabledDays } from "./calculateDisabledDays"

const DISABLED_DATE__1 = new Date(2022, 3, 24)
const DISABLED_DATE__2 = new Date(2022, 3, 25)

const DISABLED_RANGE = {
  from: new Date(2022, 2, 14),
  to: new Date(2022, 2, 16),
}

const DISABLED_BEFORE = new Date(2022, 1, 16)
const DISABLED_AFTER = new Date(2022, 1, 17)

const DISABLED_BEFORE_AFTER = {
  before: new Date(2022, 1, 14),
  after: new Date(2022, 4, 16),
}

describe("calculateDisabledDays", () => {
  it("only contains selected disabled dates", () => {
    expect(
      calculateDisabledDays({
        disabledDates: [DISABLED_DATE__1, DISABLED_DATE__2],
      })
    ).toEqual([DISABLED_DATE__1, DISABLED_DATE__2])
  })

  it("correctly combines multiple disabled days", () => {
    const disabledDays = calculateDisabledDays({
      disabledDates: [DISABLED_DATE__1, DISABLED_DATE__2],
      disabledDaysOfWeek: [DayOfWeek.Mon, DayOfWeek.Fri],
      disabledRange: DISABLED_RANGE,
      disabledBeforeAfter: DISABLED_BEFORE_AFTER,
      disabledBefore: DISABLED_BEFORE,
      disabledAfter: DISABLED_AFTER,
    })

    const expectedResult = [
      DISABLED_DATE__1,
      DISABLED_DATE__2,
      { dayOfWeek: [1, 5] },
      DISABLED_RANGE,
      { before: DISABLED_BEFORE },
      { after: DISABLED_AFTER },
      DISABLED_BEFORE_AFTER,
    ]

    expect(disabledDays).toEqual(expectedResult)
  })

  // @TODO Add test for each matcher
})
