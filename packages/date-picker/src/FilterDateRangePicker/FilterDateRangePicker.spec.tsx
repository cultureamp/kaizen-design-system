import React, { useState, FocusEvent } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { DateRange } from "../types"
import { FilterDateRangePicker, FilterDateRangePickerProps } from "."

// For testing within the open filter
const openFilter = async (): Promise<void> => {
  const filterButton = screen.getByRole("button", { expanded: false })
  await userEvent.click(filterButton)
  await waitFor(() => {
    expect(screen.getByLabelText("Go to previous month")).toBeVisible()
  })
}

const FilterDateRangePickerWrapper = ({
  selectedRange,
  status,
  ...restProps
}: Partial<FilterDateRangePickerProps>): JSX.Element => {
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
        name: "Dates : 1 May 2022 - 25 Nov 2022",
      })
      expect(filterButton).toBeVisible()
    })

    it("should not show a selected value in the button if there is only a partial date range", () => {
      render(
        <FilterDateRangePickerWrapper
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
      render(
        <FilterDateRangePickerWrapper onRemoveFilter={(): void => undefined} />
      )
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

    describe("onBlur", () => {
      it("updates start date input and calendar values correctly on blur", async () => {
        const rangeStartOnBlur = jest.fn<void, [FocusEvent]>()
        const rangeEndOnBlur = jest.fn<void, [FocusEvent]>()

        render(
          <FilterDateRangePickerWrapper
            selectedRange={{
              from: new Date("2022-05-02"),
              to: new Date("2022-05-22"),
            }}
            inputRangeStartProps={{ onBlur: rangeStartOnBlur }}
            inputRangeEndProps={{ onBlur: rangeEndOnBlur }}
          />
        )
        await openFilter()

        const inputRangeStart = screen.getByLabelText("Date from")
        const inputRangeEnd = screen.getByLabelText("Date to")
        // Input Start is focused when filter is opened
        expect(inputRangeStart).toHaveValue("02/05/2022")
        expect(inputRangeEnd).toHaveValue("22 May 2022")

        const targetDay = screen.getByRole("button", {
          name: "1st May (Sunday)",
        })
        expect(targetDay).not.toHaveAttribute("aria-pressed")

        await userEvent.clear(inputRangeStart)
        await userEvent.type(inputRangeStart, "01/05/2022")

        await userEvent.tab({ shift: true })

        await waitFor(() => {
          expect(inputRangeStart).toHaveValue("1 May 2022")
          expect(rangeStartOnBlur).toHaveBeenCalled()
          expect(inputRangeEnd).toHaveValue("22 May 2022")
          expect(rangeEndOnBlur).not.toHaveBeenCalled()
          expect(targetDay).toHaveAttribute("aria-pressed", "true")
        })
      }, 10000)

      it("updates end date input and calendar values correctly on blur", async () => {
        const rangeStartOnBlur = jest.fn<void, [FocusEvent]>()
        const rangeEndOnBlur = jest.fn<void, [FocusEvent]>()

        render(
          <FilterDateRangePickerWrapper
            selectedRange={{
              from: new Date("2022-05-01"),
              to: new Date("2022-05-22"),
            }}
            inputRangeStartProps={{ onBlur: rangeStartOnBlur }}
            inputRangeEndProps={{ onBlur: rangeEndOnBlur }}
          />
        )
        await openFilter()

        const inputRangeStart = screen.getByLabelText("Date from")
        const inputRangeEnd = screen.getByLabelText("Date to")
        // Input Start is focused when filter is opened
        expect(inputRangeStart).toHaveValue("01/05/2022")
        expect(inputRangeEnd).toHaveValue("22 May 2022")

        const targetDay = screen.getByRole("button", {
          name: "31st May (Tuesday)",
        })
        expect(targetDay).not.toHaveAttribute("aria-pressed")

        await userEvent.tab()
        rangeStartOnBlur.mockClear()

        await userEvent.clear(inputRangeEnd)
        await userEvent.type(inputRangeEnd, "31/05/2022")

        await userEvent.tab()

        await waitFor(() => {
          expect(inputRangeStart).toHaveValue("1 May 2022")
          expect(rangeStartOnBlur).not.toHaveBeenCalled()
          expect(inputRangeEnd).toHaveValue("31 May 2022")
          expect(rangeEndOnBlur).toHaveBeenCalled()
          expect(targetDay).toHaveAttribute("aria-pressed", "true")
        })
      }, 10000)
    })

    it("updates the calendar month to match the new start date input", async () => {
      render(
        <FilterDateRangePickerWrapper
          selectedRange={{
            from: new Date("2022-05-02"),
            to: new Date("2022-12-17"),
          }}
        />
      )
      await openFilter()

      const inputRangeStart = screen.getByLabelText("Date from")
      // Input Start is focused when filter is opened
      expect(inputRangeStart).toHaveValue("02/05/2022")

      expect(screen.getByText("May 2022")).toBeVisible()
      expect(screen.getByText("June 2022")).toBeVisible()

      await userEvent.clear(inputRangeStart)
      await userEvent.type(inputRangeStart, "19/02/2020")

      await userEvent.tab({ shift: true })

      await waitFor(() => {
        expect(screen.queryByText("May 2022")).not.toBeInTheDocument()
        expect(screen.getByText("February 2020")).toBeVisible()
        expect(screen.getByText("March 2020")).toBeVisible()
      })
    }, 10000)

    it("resets the input values if cleared from the outside", async () => {
      const Wrapper = (): JSX.Element => {
        const [selectedDateRange, setSelectedDateRange] = useState<
          DateRange | undefined
        >({
          from: new Date("2022-05-01"),
          to: new Date("2022-05-22"),
        })
        return (
          <div>
            <button
              type="button"
              onClick={(): void => setSelectedDateRange(undefined)}
            >
              Clear the filter
            </button>

            <FilterDateRangePicker
              id="test__filter-date-range-picker"
              label="Dates"
              selectedRange={selectedDateRange}
              onRangeChange={setSelectedDateRange}
              locale="en-AU"
            />
          </div>
        )
      }

      render(<Wrapper />)

      await openFilter()

      const inputRangeStart = screen.getByLabelText("Date from")
      const inputRangeEnd = screen.getByLabelText("Date to")
      // Input Start is focused when filter is opened
      expect(inputRangeStart).toHaveValue("01/05/2022")
      expect(inputRangeEnd).toHaveValue("22 May 2022")

      await userEvent.keyboard("{Escape}")

      const clearButton = screen.getByRole("button", {
        name: "Clear the filter",
      })

      await userEvent.click(clearButton)

      await openFilter()

      const inputRangeAfterStart = screen.getByLabelText("Date from")
      const inputRangeAfterEnd = screen.getByLabelText("Date to")
      expect(inputRangeAfterStart).toHaveValue("")
      expect(inputRangeAfterEnd).toHaveValue("")
    }, 10000)
  })

  describe("Calendar", () => {
    it("shows the default month as the start month when there isn't a selected value", async () => {
      render(
        <FilterDateRangePickerWrapper defaultMonth={new Date("2022-05-02")} />
      )
      await openFilter()

      expect(screen.getByText("May 2022")).toBeVisible()
      expect(screen.getByText("June 2022")).toBeVisible()
    })

    it("shows the selected start date month as the start month when provided", async () => {
      render(
        <FilterDateRangePickerWrapper
          selectedRange={{
            from: new Date("2022-05-01"),
            to: new Date("2022-12-17"),
          }}
        />
      )
      await openFilter()

      expect(screen.getByText("May 2022")).toBeVisible()
      expect(screen.getByText("June 2022")).toBeVisible()
    })

    it("updates the range start input when changing the start date", async () => {
      render(
        <FilterDateRangePickerWrapper
          selectedRange={{
            from: new Date("2022-05-15"),
            to: new Date("2022-06-15"),
          }}
        />
      )
      await openFilter()

      // Remove focus from input range start
      await userEvent.tab()
      const inputRangeStart = screen.getByLabelText("Date from")
      expect(inputRangeStart).toHaveValue("15 May 2022")

      const targetDay = screen.getByRole("button", {
        name: "12th May (Thursday)",
      })
      expect(targetDay).not.toHaveAttribute("aria-pressed")
      await userEvent.click(targetDay)

      await waitFor(() => {
        expect(targetDay).toHaveAttribute("aria-pressed", "true")
        expect(inputRangeStart).toHaveValue("12 May 2022")
      })
    }, 8000)

    it("updates the range end input when changing the end date", async () => {
      render(
        <FilterDateRangePickerWrapper
          selectedRange={{
            from: new Date("2022-05-15"),
            to: new Date("2022-06-15"),
          }}
        />
      )
      await openFilter()

      const inputRangeEnd = screen.getByLabelText("Date to")
      expect(inputRangeEnd).toHaveValue("15 Jun 2022")

      const targetDay = screen.getByRole("button", {
        name: "23rd June (Thursday)",
      })
      expect(targetDay).not.toHaveAttribute("aria-pressed")
      await userEvent.click(targetDay)

      await waitFor(() => {
        expect(targetDay).toHaveAttribute("aria-pressed", "true")
        expect(inputRangeEnd).toHaveValue("23 Jun 2022")
      })
    })

    it("clears the inputs when clearing the calendar value", async () => {
      render(
        <FilterDateRangePickerWrapper
          selectedRange={{
            from: new Date("2022-05-15"),
            to: new Date("2022-05-22"),
          }}
        />
      )
      await openFilter()

      const inputRangeStart = screen.getByLabelText("Date from")
      const inputRangeEnd = screen.getByLabelText("Date to")
      // Input Start is focused when filter is opened
      expect(inputRangeStart).toHaveValue("15/05/2022")
      expect(inputRangeEnd).toHaveValue("22 May 2022")

      const firstSelectedDay = screen.getByRole("button", {
        name: "15th May (Sunday)",
      })
      await userEvent.click(firstSelectedDay)

      await waitFor(() => {
        expect(inputRangeStart).toHaveValue("")
        expect(inputRangeEnd).toHaveValue("")
      })
    })
  })
})
