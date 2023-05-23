import React, { useState } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FilterButton } from "~components/FilterButton"
import { DateRange, FilterDatePicker, FilterDatePickerProps } from "."

const user = userEvent.setup()

const FilterDatePickerWrapper = ({
  selectedRange,
  ...restProps
}: Partial<FilterDatePickerProps>): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedDateRange, setSelectedDateRange] = useState<
    DateRange | undefined
  >(selectedRange)

  return (
    <FilterDatePicker
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

describe("<FilterDatePicker />", () => {
  it("should not show the calendar initially", () => {
    render(<FilterDatePickerWrapper />)
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  describe("Filter button", () => {
    it("should show the selected range in the button", () => {
      render(
        <FilterDatePickerWrapper
          selectedRange={{
            from: new Date("2022-05-01"),
            to: new Date("2022-11-25"),
          }}
        />
      )
      const filterButton = screen.getByRole("button", {
        name: "Dates : 1 May 2022 - 25 Nov 2022",
      })
      expect(filterButton).toBeVisible()
    })

    it("should not show a selected value in the button if there is only a partial date range", () => {
      render(
        <FilterDatePickerWrapper
          selectedRange={{
            from: new Date("2022-05-01"),
          }}
        />
      )
      const filterButton = screen.getByRole("button", {
        name: "Dates",
      })
      expect(filterButton).toBeVisible()
    })

    it("should show the calendar when the filter button is clicked", async () => {
      render(<FilterDatePickerWrapper defaultMonth={new Date("2022-05-01")} />)
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

      const filterButton = screen.getByRole("button", {
        name: "Dates",
      })
      await user.click(filterButton)
      await waitFor(() => {
        expect(screen.getByText("May 2022")).toBeVisible()
      })
    })
  })
})
