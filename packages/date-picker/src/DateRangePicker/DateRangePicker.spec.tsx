import React, { useEffect, useState } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { DateRange } from "react-day-picker"
import { DateRangePicker, DateRangePickerProps, formatDateRangeValue } from "./"

const user = userEvent.setup()

const DateRangePickerWrapper = (
  props: Partial<DateRangePickerProps>
): JSX.Element => {
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange>({
    from: props.selectedDateRange?.from,
    to: props.selectedDateRange?.to,
  })
  const { value: propValue, ...restProps } = props
  const [value, setValue] = useState(propValue || "")

  const onDateRangeChange = (dateRange: DateRange): void => {
    setSelectedDateRange(dateRange)
  }

  // TODO: Make formatting built in
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
      selectedDateRange={selectedDateRange}
      {...restProps}
    />
  )
}

describe("<DateRangePicker />", () => {
  it("renders DateRangePicker and shows/hides on button press", async () => {
    render(<DateRangePickerWrapper />)

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    const button = screen.getByRole("button")
    await user.click(button)

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).toBeInTheDocument()
    })
  })

  it("shows/hides on button focus and keydown enter", async () => {
    render(<DateRangePickerWrapper />)

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    const button = screen.getByRole("button")
    button.focus()
    await user.keyboard("{enter}")

    expect(screen.queryByRole("dialog")).toBeInTheDocument()
  })

  it("has disabled attribute on button", () => {
    render(<DateRangePickerWrapper isDisabled />)

    const button = screen.getByRole("button")

    expect(button).toHaveAttribute("disabled")
  })
})
