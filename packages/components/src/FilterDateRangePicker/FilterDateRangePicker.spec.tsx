import React, { useState } from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { DateRange } from "~components/Calendar"
import { FilterButton } from "~components/FilterButton"
import { FilterDateRangePicker, FilterDateRangePickerProps } from "./index"

const user = userEvent.setup()

const FilterDateRangePickerWrapper = ({
  selectedRange,
  ...restProps
}: Partial<FilterDateRangePickerProps>): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedDateRange, setSelectedDateRange] = useState<
    DateRange | undefined
  >(selectedRange)

  return (
    <FilterDateRangePicker
      id="test__filter-date-range-picker"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      renderTrigger={(triggerProps): JSX.Element => (
        <FilterButton {...triggerProps} />
      )}
      label="Dates"
      selectedRange={selectedDateRange}
      onRangeChange={setSelectedDateRange}
      locale="en-AU"
      {...restProps}
    />
  )
}

describe("<FilterDateRangePicker />", () => {
  it("should not show the calendar initially", () => {
    const { queryByRole } = render(<FilterDateRangePickerWrapper />)
    expect(queryByRole("dialog")).not.toBeInTheDocument()
  })

  describe("Filter button", () => {
    it("should show the selected range in the button", () => {
      const { getByRole } = render(
        <FilterDateRangePickerWrapper
          selectedRange={{
            from: new Date("2022-05-01"),
            to: new Date("2022-11-25"),
          }}
        />
      )
      const filterButton = getByRole("button", {
        name: "Dates : 1 May 2022 - 25 Nov 2022",
      })
      expect(filterButton).toBeVisible()
    })

    it("should not show the selected range in the button if the range is not valid", () => {
      const { getByRole } = render(
        <FilterDateRangePickerWrapper
          selectedRange={{
            from: new Date("2022-05-01"),
            to: new Date("2022-04-01"),
          }}
        />
      )
      const filterButton = getByRole("button", { name: "Dates" })
      expect(filterButton).toBeVisible()
    })

    it("should not show a selected value in the button if there is only a partial date range", () => {
      const { getByRole } = render(
        <FilterDateRangePickerWrapper
          selectedRange={{
            from: new Date("2022-05-01"),
          }}
        />
      )
      const filterButton = getByRole("button", { name: "Dates" })
      expect(filterButton).toBeVisible()
    })

    it("should show the calendar when the filter button is clicked", async () => {
      const { queryByRole, getByRole, getByText } = render(
        <FilterDateRangePickerWrapper defaultMonth={new Date("2022-05-01")} />
      )
      expect(queryByRole("dialog")).not.toBeInTheDocument()

      const filterButton = getByRole("button", { name: "Dates" })
      await user.click(filterButton)

      await waitFor(() => {
        expect(getByText("May 2022")).toBeVisible()
      })
    })

    it("should not show a date range in the button if the selected range is not valid", async () => {
      const { getByRole, getByLabelText } = render(
        <FilterDateRangePickerWrapper
          selectedRange={{ from: new Date("2022-05-01") }}
        />
      )

      const filterButton = getByRole("button", { name: "Dates" })

      await user.click(filterButton)
      await waitFor(() => {
        expect(getByRole("dialog")).toBeVisible()
      })

      const inputEndDate = getByLabelText("Date to")
      await user.clear(inputEndDate)
      await user.type(inputEndDate, "01/04/2022")
      await user.tab()

      await waitFor(() => {
        expect(inputEndDate).not.toHaveFocus()
        expect(filterButton.textContent).toEqual("Dates")
      })
    }, 10000)
  })
})
