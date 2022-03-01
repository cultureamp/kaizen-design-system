import { DayOfWeek } from "../DatePicker/DatePicker"
import { calculateDisabledDays } from "./calculateDisabledDays"

const disabledDaysMock = [
  new Date("2022-04-24T00:00:00.000Z"),
  {
    daysOfWeek: [1, 5],
  },
  {
    from: new Date("2022-03-14T00:00:00.000Z"),
    to: new Date("2022-03-16T00:00:00.000Z"),
  },
  {
    before: new Date("2022-02-16T00:00:00.000Z"),
  },
  {
    after: new Date("2022-02-17T00:00:00.000Z"),
  },
  {
    after: new Date("2022-05-16T00:00:00.000Z"),
    before: new Date("2022-02-14T00:00:00.000Z"),
  },
]

describe("calculateDisabledDays", () => {
  it("returns correct object when passed disabledDays array", () => {
    const disabledDates = [new Date(2022, 3, 24)]
    const disabledDaysOfWeek = [DayOfWeek.Mon, DayOfWeek.Fri]
    const disabledBeforeAfter = {
      before: new Date(2022, 1, 14),
      after: new Date(2022, 4, 16),
    }
    const disabledRange = {
      from: new Date(2022, 2, 14),
      to: new Date(2022, 2, 16),
    }
    const disabledBefore = new Date(2022, 1, 16)
    const disabledAfter = new Date(2022, 1, 17)

    const disabledDays = calculateDisabledDays(
      disabledDates,
      disabledDaysOfWeek,
      disabledRange,
      disabledBeforeAfter,
      disabledBefore,
      disabledAfter
    )

    // Make sure our timezone offset is working and set to UTC
    expect(new Date().getTimezoneOffset()).toBe(0)
    expect(disabledDays).toEqual(disabledDaysMock)
  })
})
