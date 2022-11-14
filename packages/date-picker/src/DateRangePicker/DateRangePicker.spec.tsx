import React, { useEffect, useState } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { DateRange } from "react-day-picker"
import { formatDateRangeValue } from "./utils/formatDateRangeValue"
import { DateRangePicker, DateRangePickerProps } from "./DateRangePicker"

const DateRangePickerWrapper = ({
  ...restProps
}: Partial<DateRangePickerProps>) => {
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  })
  const [value, setValue] = useState("")

  const onDateRangeChange = (dateRange: DateRange) => {
    setSelectedDateRange(dateRange)
  }

  // TODO: Make formating built in
  useEffect(() => {
    setValue(formatDateRangeValue(selectedDateRange))
  }, [selectedDateRange])

  return (
    <DateRangePicker
      id="test__date-range-picker"
      labelText="Choose date"
      onChange={onDateRangeChange}
      value={value}
      defaultMonth={new Date("2022-03-01")}
      {...restProps}
    />
  )
}

describe("<DateRangePicker />", () => {
  it("renders DateRangePicker and shows/hides on button press", async () => {
    render(<DateRangePickerWrapper />)

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    const button = screen.getByRole("button")
    await userEvent.click(button)

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).toBeInTheDocument()
    })
  })

  it("shows/hides on button focus and keydown enter", async () => {
    render(<DateRangePickerWrapper />)

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    const button = screen.getByRole("button")
    await waitFor(async () => {
      button.focus()
      await userEvent.keyboard("{enter}")
    })

    expect(screen.queryByRole("dialog")).toBeInTheDocument()
  })

  it("is able to select date range and shows in button", async () => {
    render(<DateRangePickerWrapper />)

    const button = screen.getByRole("button")

    userEvent.click(button)

    await waitFor(() => {
      const selectedFromDate = screen.getByText("6th March (Sunday)")
      selectedFromDate.parentElement && selectedFromDate.parentElement.focus()
      userEvent.keyboard("{enter}")
    })

    await waitFor(() => {
      const selectedToDate = screen.getByText("16th March (Wednesday)")
      selectedToDate.parentElement && selectedToDate.parentElement.focus()
      userEvent.keyboard("{enter}")
    })

    expect(button.innerText === "Mar 6 – Mar 16, 2022")
  })

  it("updates the selected range when the user selects a new range", async () => {
    const selectedDateRange = {
      from: new Date(2022, 2, 1),
      to: new Date(2022, 2, 16),
    }
    render(<DateRangePickerWrapper selectedDateRange={selectedDateRange} />)

    const button = screen.getByRole("button")
    expect(button.innerText === "Mar 1 – Mar 16, 2022")

    userEvent.click(button)

    await waitFor(() => {
      const selectedFromDate = screen.getByText("6th March (Sunday)")
      selectedFromDate.parentElement && selectedFromDate.parentElement.focus()
      userEvent.keyboard("{enter}")
    })

    await waitFor(() => {
      const selectedToDate = screen.getByText("16th March (Wednesday)")
      selectedToDate.parentElement && selectedToDate.parentElement.focus()
      userEvent.keyboard("{enter}")
    })

    expect(button.innerText === "Mar 6 – Mar 16, 2022")
  })

  it("resets the selected from date when the user attempts to select a to date that is before the from date", async () => {
    render(<DateRangePickerWrapper />)

    const button = screen.getByRole("button")
    userEvent.click(button)

    await waitFor(() => {
      const selectedFromDate = screen.getByText("6th March (Sunday)")
      selectedFromDate.parentElement && selectedFromDate.parentElement.focus()
      userEvent.keyboard("{enter}")
    })

    await waitFor(() => {
      const selectedToDate = screen.getByText("1st March (Tuesday)")
      selectedToDate.parentElement && selectedToDate.parentElement.focus()
      userEvent.keyboard("{enter}")
      expect(screen.queryByRole("dialog")).toBeInTheDocument()
    })

    expect(button.innerText === "Mar 1, 2022")
  })

  it("has disabled attribute on button", () => {
    render(<DateRangePickerWrapper isDisabled />)

    const button = screen.getByRole("button")

    expect(button).toHaveAttribute("disabled")
  })
})
