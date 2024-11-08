import { DateRange } from "~components/Calendar"
import { formatDateRangeValue } from "./formatDateRangeValue"

describe("formatDateRangeValue", () => {
  it("displays a from date by itself", () => {
    const dateRangeFromOnly: DateRange = {
      from: new Date(2022, 1, 1),
      to: undefined,
    }

    expect(formatDateRangeValue(dateRangeFromOnly)).toEqual("Feb 1, 2022")
  })

  it("displays the year once when both dates share the same year", () => {
    const dateRangeBothValues: DateRange = {
      from: new Date(2022, 1, 1),
      to: new Date(2022, 2, 2),
    }

    expect(formatDateRangeValue(dateRangeBothValues)).toEqual(
      "Feb 1 – Mar 2, 2022",
    )
  })

  it("displays the year for both dates when they are not the same", () => {
    const dateRangeOvertoNewYear: DateRange = {
      from: new Date(2022, 1, 1),
      to: new Date(2023, 1, 1),
    }

    expect(formatDateRangeValue(dateRangeOvertoNewYear)).toEqual(
      "Feb 1, 2022 – Feb 1, 2023",
    )
  })
})
