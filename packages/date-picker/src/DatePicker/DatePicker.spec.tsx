import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import React, { useState } from "react"
import { FieldMessageStatus } from "@kaizen/draft-form"
import userEvent from "@testing-library/user-event"
import { DatePicker, ValidationResponse } from "./DatePicker"
import "@testing-library/jest-dom"
import { DatePickerProps } from "."

const defaultProps = {
  id: "date-picker",
  labelText: "Choose date",
  selectedDay: undefined,
  initialMonth: new Date(2022, 2),
  onDayChange: jest.fn(),
  onValidate: jest.fn(),
}

const MockDatePicker = ({
  selectedDay,
  ...restProps
}: Partial<DatePickerProps>) => {
  const [status, setStatus] = useState<FieldMessageStatus>("default")
  const [validationMessage, setValidationMessage] = useState<string>()
  const [selectedDate, setValueDate] = useState<Date | undefined>(selectedDay)

  const handleValidation = (validationResponse: ValidationResponse) => {
    validationResponse.status && setStatus(validationResponse.status)
    validationResponse.validationMessage &&
      setValidationMessage(validationResponse.validationMessage)
  }
  return (
    <DatePicker
      {...defaultProps}
      {...restProps}
      onValidate={handleValidation}
      onDayChange={setValueDate}
      status={status}
      validationMessage={validationMessage}
      selectedDay={selectedDate}
    />
  )
}

describe("<DatePicker />", () => {
  it("renders DatePicker with an empty input value", async () => {
    render(<MockDatePicker {...defaultProps} />)

    expect(screen.getByRole("combobox")).toHaveValue("")
  })

  it("renders DatePicker and displays inital date within input", async () => {
    render(
      <MockDatePicker {...defaultProps} selectedDay={new Date(2022, 2, 1)} />
    )

    // Make sure date renders in the button
    expect(screen.getByDisplayValue("Mar 1, 2022")).toBeInTheDocument()
  })

  it("renders DatePicker and shows/hides calendar on button press", async () => {
    render(<MockDatePicker {...defaultProps} />)

    const button = screen.getByRole("button")

    // Make sure calendar popup is not in the DOM
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    // Click button and test calendar popup is showing
    await act(async () => button.click())
    expect(screen.getByRole("dialog")).toBeVisible()
  })

  it("renders DatePicker and shows/hides calendar on arrow down keydown", async () => {
    render(<MockDatePicker {...defaultProps} />)

    const input = screen.getByRole("combobox")

    // Make sure calendar popup is not in the DOM
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    // Click button and test calendar popup is showing
    await act(async () => {
      input.focus()
      userEvent.keyboard("{arrowdown}")
    })
    expect(screen.getByRole("dialog")).toBeVisible()
  })

  it("is able to select date and shows in input", async () => {
    render(<MockDatePicker {...defaultProps} />)

    const button = screen.getByRole("button")

    await act(async () => button.click())

    // Focus on date and select
    const selectedDate = screen.getByRole("gridcell", {
      name: "Sun Mar 06 2022",
    })
    await act(async () => {
      selectedDate.focus()
      userEvent.keyboard("{enter}")
    })

    expect(screen.getByDisplayValue("Mar 6, 2022")).toBeInTheDocument()
  })

  it("returns focus to the button once date has been selected", async () => {
    render(<MockDatePicker {...defaultProps} />)

    const button = screen.getByRole("button")

    await act(async () => button.click())

    // Focus on date and select
    const selectedDate = screen.getByRole("gridcell", {
      name: "Sun Mar 06 2022",
    })
    await act(async () => {
      selectedDate.focus()
      userEvent.keyboard("{enter}")
    })

    expect(button).toHaveFocus()
  })

  describe("Validation", () => {
    it("displays error message when status is error", async () => {
      render(
        <DatePicker
          {...defaultProps}
          status="error"
          validationMessage="Invalid Date."
        />
      )

      expect(screen.getByText("Invalid Date.")).toBeInTheDocument()
    })

    it("displays error message when selected day is invalid", async () => {
      render(<MockDatePicker selectedDay={new Date("potato")} />)

      expect(screen.getByText("Date is invalid")).toBeInTheDocument()
    })

    it("displays error message when selected day is disabled", async () => {
      render(
        <MockDatePicker
          disabledBefore={new Date()}
          selectedDay={new Date(2022, 4, 5)}
        />
      )

      expect(
        screen.getByText("05/05/2022 is not available, try another date")
      ).toBeInTheDocument()
    })

    it("displays error message when input date is invalid", async () => {
      render(<MockDatePicker />)

      const input = screen.getByRole("combobox")
      userEvent.type(input, "05/05/2022Blah")

      await act(async () => {
        userEvent.tab()
      })

      expect(
        screen.getByText("05/05/2022Blah is an invalid date")
      ).toBeInTheDocument()
    })

    it("displays error message when input date is disabled", async () => {
      render(<MockDatePicker disabledBefore={new Date()} />)

      const input = screen.getByRole("combobox")
      userEvent.type(input, "05/05/2022")

      await act(async () => {
        userEvent.tab()
      })

      expect(
        screen.getByText("05/05/2022 is not available, try another date")
      ).toBeInTheDocument()
    })
  })
})
