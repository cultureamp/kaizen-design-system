import { DayOfWeek } from "../enums"
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
  after: new Date(2022, 1, 14),
  before: new Date(2022, 2, 16),
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

  it("calculates only days of the week", () => {
    const disabledDays = calculateDisabledDays({
      disabledDaysOfWeek: [
        DayOfWeek.Mon,
        DayOfWeek.Tue,
        DayOfWeek.Wed,
        DayOfWeek.Thu,
        DayOfWeek.Fri,
        DayOfWeek.Sat,
        DayOfWeek.Sun,
      ],
    })

    const expectedResult = [{ dayOfWeek: [1, 2, 3, 4, 5, 6, 0] }]

    expect(disabledDays).toEqual(expectedResult)
  })

  it("calculates only a date range", () => {
    const disabledDays = calculateDisabledDays({
      disabledRange: DISABLED_RANGE,
    })

    const expectedResult = [DISABLED_RANGE]

    expect(disabledDays).toEqual(expectedResult)
  })

  it("calculates only a before and after dates", () => {
    const disabledDays = calculateDisabledDays({
      disabledBeforeAfter: DISABLED_BEFORE_AFTER,
    })

    const expectedResult = [DISABLED_BEFORE_AFTER]

    expect(disabledDays).toEqual(expectedResult)
  })

  it("calculates only a before dates", () => {
    const disabledDays = calculateDisabledDays({
      disabledBefore: DISABLED_BEFORE,
    })

    const expectedResult = [{ before: DISABLED_BEFORE }]

    expect(disabledDays).toEqual(expectedResult)
  })

  it("calculates only a after dates", () => {
    const disabledDays = calculateDisabledDays({
      disabledAfter: DISABLED_AFTER,
    })

    const expectedResult = [{ after: DISABLED_AFTER }]

    expect(disabledDays).toEqual(expectedResult)
  })
})
