import React, { useState } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { DateRange } from "../types"
import { FilterDateRangePicker, FilterDateRangePickerProps } from "."

// For testing within the open filter
const openFilter = async () => {
  const filterButton = screen.getByRole("button", { expanded: false })
  await userEvent.click(filterButton)
  await waitFor(() => {
    expect(screen.getByLabelText("Go to previous month")).toBeVisible()
  })
}

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
      await userEvent.click(filterButton)
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
      render(<FilterDateRangePickerWrapper />)
      await openFilter()

      const inputRangeStart = screen.getByLabelText("Date from")
      const inputRangeEnd = screen.getByLabelText("Date to")
      expect(inputRangeStart).toHaveValue("")
      expect(inputRangeEnd).toHaveValue("")
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
      await openFilter()

      const inputRangeStart = screen.getByLabelText("Date from")
      const inputRangeEnd = screen.getByLabelText("Date to")
      // Input Start is focused when filter is opened
      expect(inputRangeStart).toHaveValue("01/05/2022")
      expect(inputRangeEnd).toHaveValue("22 May 2022")
    })

    it("allows customising the input labels", async () => {
      render(
        <FilterDateRangePickerWrapper
          selectedRange={{
            from: new Date("2022-05-01"),
            to: new Date("2022-05-22"),
          }}
          inputRangeStartProps={{ labelText: "Start date" }}
          inputRangeEndProps={{ labelText: "End date" }}
        />
      )
      await openFilter()

      const inputRangeStart = screen.getByLabelText("Start date")
      const inputRangeEnd = screen.getByLabelText("End date")
      // Input Start is focused when filter is opened
      expect(inputRangeStart).toHaveValue("01/05/2022")
      expect(inputRangeEnd).toHaveValue("22 May 2022")
    })
  })
})
