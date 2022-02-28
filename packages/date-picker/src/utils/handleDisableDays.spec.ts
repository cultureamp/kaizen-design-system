import { DayOfWeek } from "../DatePicker/DatePicker"
import { handleDisabledDays } from "./handleDisabledDays"

beforeEach(() => {
  // Temporarily allow us to alter timezone calculation for testing
  Date.prototype.getTimezoneOffset = jest.fn(() => 0)
})

afterEach(() => {
  jest.resetAllMocks()
})

const disabledDaysMock = [
  new Date("2022-04-23T14:00:00.000Z"),
  {
    daysOfWeek: [1, 5],
  },
  {
    from: new Date("2022-03-13T13:00:00.000Z"),
    to: new Date("2022-03-15T13:00:00.000Z"),
  },
  {
    before: new Date("2022-02-15T13:00:00.000Z"),
  },
  {
    after: new Date("2022-02-16T13:00:00.000Z"),
  },
  {
    after: new Date("2022-05-15T14:00:00.000Z"),
    before: new Date("2022-02-13T13:00:00.000Z"),
  },
]

describe("handleDisabledDays", () => {
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

    const disabledDays = handleDisabledDays(
      disabledDates,
      disabledDaysOfWeek,
      disabledRange,
      disabledBeforeAfter,
      disabledBefore,
      disabledAfter
    )

    expect(disabledDays).toEqual(disabledDaysMock)
  })
})
