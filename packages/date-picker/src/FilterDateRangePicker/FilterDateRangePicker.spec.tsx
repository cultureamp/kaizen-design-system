import React, { useState } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { DateRange } from "../types"
import { FilterDateRangePicker, FilterDateRangePickerProps } from "."

const FilterDateRangePickerWrapper = ({
  selectedRange,
  ...restProps
}: Partial<FilterDateRangePickerProps>) => {
  const [selectedDateRange, setSelectedDateRange] = useState<
    DateRange | undefined
  >(selectedRange)

  return (
    <FilterDateRangePicker
      id="test__filter-date-range-picker"
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
    render(<FilterDateRangePickerWrapper />)
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  describe("Filter button", () => {
    it("should show the selected range in the button", () => {
      render(
        <FilterDateRangePickerWrapper
          selectedRange={{
            from: new Date("2022-05-01"),
            to: new Date("2022-11-25"),
          }}
        />
      )
      const filterButton = screen.getByRole("button", {
        name: "Dates: 1 May 2022 - 25 Nov 2022",
      })
      expect(filterButton).toBeVisible()
    })

    it("should show the calendar when the filter button is clicked", async () => {
      render(
        <FilterDateRangePickerWrapper defaultMonth={new Date("2022-05-01")} />
      )
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

      const filterButton = screen.getByRole("button", {
        name: "Dates",
      })
      userEvent.click(filterButton)
      await waitFor(() => {
        expect(screen.getByText("May 2022")).toBeVisible()
      })
    })
  })

  describe("Remove filter button", () => {
    it("should not show the remove button when remove filter callback is not provided", () => {
      render(<FilterDateRangePickerWrapper />)
      const removeButton = screen.queryByRole("button", {
        name: "Remove filter - Dates",
      })
      expect(removeButton).not.toBeInTheDocument()
    })

    it("should show the remove button when remove filter callback is provided", () => {
      render(<FilterDateRangePickerWrapper onRemoveFilter={() => undefined} />)
      const removeButton = screen.getByRole("button", {
        name: "Remove filter - Dates",
      })
      expect(removeButton).toBeVisible()
    })
  })

  describe("Inputs", () => {
    it("should have empty inputs when a date range is not provided", async () => {
      render(
        <FilterDateRangePickerWrapper defaultMonth={new Date("2022-05-01")} />
      )

      const filterButton = screen.getByRole("button", {
        name: "Dates",
      })
      userEvent.click(filterButton)
      await waitFor(() => {
        expect(screen.getByText("May 2022")).toBeVisible()
      })

      const inputFrom = screen.getByLabelText("Date from")
      const inputTo = screen.getByLabelText("Date to")
      expect(inputFrom).toHaveValue("")
      expect(inputTo).toHaveValue("")
    })

    it("should pre-fill the inputs when date range is provided", async () => {
      render(
        <FilterDateRangePickerWrapper
          selectedRange={{
            from: new Date("2022-05-01"),
            to: new Date("2022-05-22"),
          }}
        />
      )

      const filterButton = screen.getByRole("button", {
        name: "Dates: 1 May 2022 - 22 May 2022",
      })
      userEvent.click(filterButton)
      await waitFor(() => {
        expect(screen.getByText("May 2022")).toBeVisible()
      })

      const inputFrom = screen.getByLabelText("Date from")
      const inputTo = screen.getByLabelText("Date to")
      expect(inputFrom).toHaveValue("1 May 2022")
      expect(inputTo).toHaveValue("22 May 2022")

      expect(screen.getByText("May 2022")).toBeVisible()
    })
  })
})
