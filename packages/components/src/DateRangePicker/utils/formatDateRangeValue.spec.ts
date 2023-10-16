import { DateRange } from "react-day-picker"
import { formatDateRangeValue } from "./formatDateRangeValue"

describe("formatDateRangeValue", () => {
  it("displays a from date by itself", () => {
    const dateRangeFromOnly: DateRange = {
      from: new Date(2022, 1, 1),
      to: undefined,
    }

    expect(formatDateRangeValue(dateRangeFromOnly)).toEqual("Feb 1, 2022")
  })

  it("displays a from date by itself", () => {
    const dateRangeBothValues: DateRange = {
      from: new Date(2022, 1, 1),
      to: new Date(2022, 2, 2),
    }

    expect(formatDateRangeValue(dateRangeBothValues)).toEqual(
      "Feb 1 – Mar 2, 2022"
    )
  })

  it("displays a from date by itself", () => {
    const dateRangeOvertoNewYear: DateRange = {
      from: new Date(2022, 1, 1),
      to: new Date(2023, 1, 1),
    }

    expect(formatDateRangeValue(dateRangeOvertoNewYear)).toEqual(
      "Feb 1, 2022 – Feb 1, 2023"
    )
  })
})
