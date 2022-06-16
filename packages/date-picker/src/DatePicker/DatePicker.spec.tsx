import React, { useState } from "react"
import { act, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FieldMessageStatus } from "@kaizen/draft-form"
import format from "date-fns/format"
import { DatePicker, ValidationResponse } from "./DatePicker"
import { DatePickerProps } from "."

const DatePickerWrapper = ({
  status: propsStatus,
  validationMessage: propsValidationMessage,
  selectedDay,
  ...restProps
}: Partial<DatePickerProps>) => {
  const [status, setStatus] = useState<FieldMessageStatus>(
    propsStatus || "default"
  )
  const [validationMessage, setValidationMessage] = useState<React.ReactNode>(
    propsValidationMessage
  )
  const [selectedDate, setValueDate] = useState<Date | undefined>(selectedDay)

  const handleValidation = (validationResponse: ValidationResponse) => {
    validationResponse.status && setStatus(validationResponse.status)
    validationResponse.validationMessage &&
      setValidationMessage(validationResponse.validationMessage)
  }

  return (
    <DatePicker
      id="test__date-picker"
      labelText="Input label"
      onValidate={handleValidation}
      onDayChange={setValueDate}
      status={status}
      validationMessage={validationMessage}
      selectedDay={selectedDate}
      {...restProps}
    />
  )
}

describe("<DatePicker />", () => {
  it("should not show the calendar initially", () => {
    render(<DatePickerWrapper />)
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  it("should have an empty input value when a date is not provided", () => {
    render(<DatePickerWrapper />)
    expect(screen.getByRole("combobox")).toHaveValue("")
  })

  it("should pre-fill the input when an initial date is provided", () => {
    render(<DatePickerWrapper selectedDay={new Date("2022-03-1")} />)
    expect(screen.getByDisplayValue("Mar 1, 2022")).toBeInTheDocument()
  })

  it("allows you to tab through input, button and calendar", () => {
    render(<DatePickerWrapper />)
    const input = screen.getByRole("combobox")
    const calendarButton = screen.getByLabelText("Choose date", {
      selector: "button",
    })

    userEvent.tab()
    waitFor(() => {
      userEvent.keyboard("{arrowDown}")
      expect(screen.queryByRole("dialog")).toBeInTheDocument()
    })

    userEvent.tab()
    expect(input).toHaveFocus()

    userEvent.tab()
    expect(calendarButton).toHaveFocus()

    userEvent.tab()
    waitFor(() => {
      const arrowButton = screen.getByLabelText("Go to previous month", {
        selector: "button",
      })
      expect(arrowButton).toHaveFocus()
    })
  })
})

describe("<DatePicker /> - Input", () => {
  xit("updates the calendar month as the user types", () => {
    expect(true).toBe(false)
  })
})

describe("<DatePicker /> - Click on input", () => {
  it("shows focus on input and opens the calendar", () => {
    render(<DatePickerWrapper selectedDay={new Date("2022-03-1")} />)

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    const input = screen.getByLabelText("Input label", { selector: "input" })
    userEvent.click(input)

    waitFor(() => {
      expect(screen.queryByRole("dialog")).toBeInTheDocument()
      expect(input).toHaveFocus()
    })
  })

  it("returns focus to the input when the user clicks a valid day on the calendar", async () => {
    render(<DatePickerWrapper selectedDay={new Date("2022-03-1")} />)

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    const input = screen.getByLabelText("Input label", { selector: "input" })
    userEvent.click(input)

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).toBeInTheDocument()
    })

    await waitFor(async () => {
      const dateToSelect = screen.getByText("6th March (Sunday)").parentElement
      if (dateToSelect) {
        userEvent.click(dateToSelect)
      }
    })

    await waitFor(() => {
      expect(input).toHaveFocus()
      expect(input).toHaveValue("03/06/2022")
    })
  })
})

describe("<DatePicker /> - Keydown arrow on input", () => {
  it("shows focus on selected day", async () => {
    render(<DatePickerWrapper selectedDay={new Date("2022-03-1")} />)
    const input = screen.getByRole("combobox")

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    await act(async () => {
      input.focus()
      userEvent.keyboard("{arrowdown}")
    })
    expect(screen.queryByRole("dialog")).toBeInTheDocument()

    const selectedDate = screen.getByText("1st March (Tuesday)")

    expect(selectedDate.parentElement).toHaveFocus()
  })

  it("shows focus on today when no date is selected", async () => {
    const today = new Date()
    const todayFormatted = format(today, "do LLLL (eeee)") // e.g 6th June (Monday)

    render(<DatePickerWrapper selectedDay={undefined} />)
    const input = screen.getByRole("combobox")

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    await act(async () => {
      input.focus()
      userEvent.keyboard("{arrowdown}")
    })
    expect(screen.queryByRole("dialog")).toBeInTheDocument()

    const dateToSelect = screen.getByText(todayFormatted).parentElement

    expect(dateToSelect).toHaveFocus()
  })
})

describe("<DatePicker /> - Click on calendar button", () => {
  it("shows focus on selected day", async () => {
    render(<DatePickerWrapper selectedDay={new Date("2022-03-1")} />)

    const calendarButton = screen.getByLabelText("Change date, Mar 1, 2022", {
      selector: "button",
    })

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    waitFor(() => {
      userEvent.click(calendarButton)
      expect(screen.queryByRole("dialog")).toBeInTheDocument()
    })

    const selectedDate = screen.getByText("1st March (Tuesday)").parentElement

    expect(selectedDate).toHaveFocus()
  })

  it("shows focus on today when no date is selected", async () => {
    const today = new Date()
    const todayFormatted = format(today, "do LLLL (eeee)") // e.g 6th June (Monday)

    render(<DatePickerWrapper selectedDay={undefined} />)

    const calendarButton = screen.getByLabelText("Choose date", {
      selector: "button",
    })

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    waitFor(() => {
      userEvent.click(calendarButton)
      expect(screen.queryByRole("dialog")).toBeInTheDocument()
    })

    const todayDate = screen.getByText(todayFormatted).parentElement

    expect(todayDate).toHaveFocus()
  })
})

describe("<DatePicker /> - Keydown enter on calendar button", () => {
  it("shows focus on selected day", async () => {
    render(<DatePickerWrapper selectedDay={new Date("2022-03-1")} />)
    const calendarButton = screen.getByLabelText("Change date, Mar 1, 2022", {
      selector: "button",
    })
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    waitFor(() => {
      userEvent.click(calendarButton)
      expect(screen.queryByRole("dialog")).toBeInTheDocument()
    })

    const selectedDate = screen.getByText("1st March (Tuesday)")

    expect(selectedDate.parentElement).toHaveFocus()
  })

  it("shows focus on today when no date is selected", async () => {
    const today = new Date()
    const todayFormatted = format(today, "do LLLL (eeee)") // e.g 6th June (Monday)

    render(<DatePickerWrapper selectedDay={undefined} />)
    const calendarButton = screen.getByLabelText("Choose date", {
      selector: "button",
    })

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    waitFor(() => {
      userEvent.click(calendarButton)
      expect(screen.queryByRole("dialog")).toBeInTheDocument()
    })

    const todayDate = screen.getByText(todayFormatted).parentElement

    expect(todayDate).toHaveFocus()
  })
})

describe("<DatePicker /> - Selecting a date using the calendar", () => {
  beforeEach(async () => {
    render(<DatePickerWrapper defaultMonth={new Date("2022-03-01")} />)

    const calendarButton = screen.getByLabelText("Choose date", {
      selector: "button",
    })

    userEvent.click(calendarButton)

    waitFor(() => {
      const dateToSelect = screen.getByText("6th March (Sunday)").parentElement
      dateToSelect?.focus()
      userEvent.keyboard("{enter}")
    })
  })

  it("shows the selected date in the input", () => {
    expect(screen.getByDisplayValue("Mar 6, 2022")).toBeInTheDocument()
  })

  it("returns focus to the button once date has been selected", () => {
    const calendarButton = screen.getByLabelText("Change date, Mar 6, 2022", {
      selector: "button",
    })
    expect(calendarButton).toHaveFocus()
  })
})

describe("<DatePicker /> - Validation", () => {
  describe("Custom Validation", () => {
    it("displays the message when status is error", async () => {
      render(
        <DatePickerWrapper status="error" validationMessage="Invalid Date." />
      )
      expect(screen.getByText("Invalid Date.")).toBeInTheDocument()
    })
  })

  describe("Inbuilt Validation", () => {
    it("displays error message when selected day is invalid", async () => {
      render(<DatePickerWrapper selectedDay={new Date("potato")} />)

      expect(screen.getByText("Date is invalid")).toBeInTheDocument()
    })

    it("displays error message when selected day is disabled", async () => {
      render(
        <DatePickerWrapper
          disabledBefore={new Date("2022-05-15")}
          selectedDay={new Date("2022-05-05")}
        />
      )

      expect(
        screen.getByText("05/05/2022 is not available, try another date")
      ).toBeInTheDocument()
    })

    it("displays error message when input date is invalid", async () => {
      render(<DatePickerWrapper />)

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
      render(<DatePickerWrapper disabledBefore={new Date("2022-05-15")} />)

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

describe("<DatePicker /> - Formatting", () => {
  it("formats values when focus is on the input", async () => {
    render(<DatePickerWrapper selectedDay={new Date("2022-03-01")} />)

    expect(screen.getByDisplayValue("Mar 1, 2022")).toBeInTheDocument()

    const input = screen.getByRole("combobox")

    await act(async () => {
      input.focus()
    })
    expect(screen.getByDisplayValue("03/01/2022")).toBeInTheDocument()
  })

  it("formats values when the input loses focus - onBlur", async () => {
    render(<DatePickerWrapper selectedDay={new Date("2022-03-01")} />)

    expect(screen.getByDisplayValue("Mar 1, 2022")).toBeInTheDocument()

    const input = screen.getByRole("combobox")

    await act(async () => {
      input.focus()
    })
    expect(screen.getByDisplayValue("03/01/2022")).toBeInTheDocument()

    // tab to next focusable element
    await act(async () => {
      userEvent.tab()
    })

    expect(screen.getByDisplayValue("Mar 1, 2022")).toBeInTheDocument()
  })
})
