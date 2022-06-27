import React, { useState } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import format from "date-fns/format"
import { FieldMessageStatus } from "@kaizen/draft-form"
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
      locale="en-US"
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
    const input = screen.getByLabelText("Input label")
    expect(input).toHaveValue("")
  })

  it("should pre-fill the input when an initial date is provided", () => {
    render(<DatePickerWrapper selectedDay={new Date("2022-03-1")} />)
    expect(screen.getByDisplayValue("Mar 1, 2022")).toBeInTheDocument()
  })

  it("allows you to tab through input, button and calendar", () => {
    render(<DatePickerWrapper />)
    const input = screen.getByLabelText("Input label")

    userEvent.tab()
    expect(input).toHaveFocus()

    userEvent.keyboard("{arrowDown}")

    waitFor(() => {
      expect(screen.getByRole("dialog")).toBeVisible()
    })

    userEvent.tab()
    expect(input).toHaveFocus()

    userEvent.tab()
    const calendarButton = screen.getByRole("button", { name: "Choose date" })
    expect(calendarButton).toHaveFocus()

    userEvent.tab()
    const arrowButton = screen.getByRole("button", {
      name: "Go to previous month",
    })
    expect(arrowButton).toHaveFocus()
  })
})

describe("<DatePicker /> - Selecting a date using the calendar", () => {
  beforeEach(() => {
    render(<DatePickerWrapper defaultMonth={new Date("2022-03-01")} />)

    const calendarButton = screen.getByRole("button", { name: "Choose date" })

    userEvent.click(calendarButton)

    waitFor(() => {
      expect(screen.getByRole("dialog")).toBeVisible()
    })

    const dateToSelect = screen.getByRole("button", {
      name: "6th March (Sunday)",
    })
    dateToSelect.focus()
    userEvent.keyboard("{enter}")
  })

  it("shows the selected date in the input", () => {
    expect(screen.getByDisplayValue("Mar 6, 2022")).toBeInTheDocument()
  })

  it("returns focus to the button once date has been selected", () => {
    const calendarButton = screen.getByRole("button", {
      name: "Change date, Mar 6, 2022",
    })
    expect(calendarButton).toHaveFocus()
  })
})

// @todo: Move this to be tests for utils/setFocusInCalendar
describe("<DatePicker /> - Focus within calendar", () => {
  it("shows focus on today when no date is selected", () => {
    const today = new Date()
    const todayFormatted = format(today, "do MMMM (eeee)") // e.g 6th June (Monday)

    render(<DatePickerWrapper />)

    const calendarButton = screen.getByRole("button", {
      name: "Choose date",
    })
    userEvent.click(calendarButton)
    waitFor(() => {
      expect(screen.queryByRole("dialog")).toBeVisible()
    })

    const dateToSelect = screen.getByRole("button", { name: todayFormatted })
    expect(dateToSelect).toHaveFocus()
  })
})

describe("<DatePicker /> - Focus element", () => {
  describe("Click on input", () => {
    it("shows focus on input and opens the calendar", () => {
      render(<DatePickerWrapper selectedDay={new Date("2022-03-1")} />)

      const input = screen.getByLabelText("Input label")
      userEvent.click(input)

      waitFor(() => {
        expect(screen.queryByRole("dialog")).toBeVisible()
        expect(input).toHaveFocus()
      })
    })

    it("returns focus to the input when the user clicks a valid day on the calendar", () => {
      render(<DatePickerWrapper selectedDay={new Date("2022-03-1")} />)

      const input = screen.getByLabelText("Input label")
      userEvent.click(input)

      waitFor(() => {
        expect(screen.queryByRole("dialog")).toBeVisible()
      })

      const dateToSelect = screen.getByRole("button", {
        name: "6th March (Sunday)",
      })
      expect(dateToSelect).toBeInstanceOf(HTMLElement)
      userEvent.click(dateToSelect)

      expect(input).toHaveFocus()
      expect(input).toHaveValue("03/06/2022")
    })
  })

  describe("Keydown arrow on input", () => {
    beforeEach(async () => {
      render(<DatePickerWrapper selectedDay={new Date("2022-03-1")} />)

      const input = screen.getByLabelText("Input label")
      await waitFor(() => {
        input.focus()
      })
      userEvent.keyboard("{ArrowDown}")

      waitFor(() => {
        expect(screen.queryByRole("dialog")).toBeVisible()
      })
    })

    it("shows focus within the calendar", () => {
      const selectedDate = screen.getByRole("button", {
        name: "1st March (Tuesday)",
      })
      expect(selectedDate).toHaveFocus()
    })

    it("returns focus to the input when the user escapes from the calendar", () => {
      const selectedDate = screen.getByRole("button", {
        name: "1st March (Tuesday)",
      })
      expect(selectedDate).toHaveFocus()

      userEvent.keyboard("{Escape}")

      const input = screen.getByLabelText("Input label")
      expect(input).toHaveFocus()
    })
  })

  describe("Click on calendar button", () => {
    beforeEach(() => {
      render(<DatePickerWrapper selectedDay={new Date("2022-03-1")} />)

      const calendarButton = screen.getByRole("button", {
        name: "Change date, Mar 1, 2022",
      })
      userEvent.click(calendarButton)

      waitFor(() => {
        expect(screen.getByRole("dialog")).toBeVisible()
      })
    })

    it("shows focus within the calendar", () => {
      const selectedDate = screen.getByRole("button", {
        name: "1st March (Tuesday)",
      })
      expect(selectedDate).toHaveFocus()
    })

    it("returns focus to the input when the user escapes from the calendar", () => {
      const selectedDate = screen.getByRole("button", {
        name: "1st March (Tuesday)",
      })
      expect(selectedDate).toHaveFocus()

      userEvent.keyboard("{Escape}")

      const calendarButton = screen.getByRole("button", {
        name: "Change date, Mar 1, 2022",
      })
      expect(calendarButton).toHaveFocus()
    })
  })

  describe("Keydown enter on calendar button", () => {
    beforeEach(async () => {
      render(<DatePickerWrapper selectedDay={new Date("2022-03-1")} />)

      const calendarButton = screen.getByRole("button", {
        name: "Change date, Mar 1, 2022",
      })
      await waitFor(() => {
        calendarButton.focus()
      })
      expect(calendarButton).toHaveFocus()

      userEvent.keyboard("{Enter}")

      waitFor(() => {
        expect(screen.getByRole("dialog")).toBeVisible()
      })
    })

    it("shows focus within the calendar", async () => {
      const selectedDate = screen.getByRole("button", {
        name: "1st March (Tuesday)",
      })
      expect(selectedDate).toHaveFocus()
    })

    it("returns focus to the input when the user escapes from the calendar", () => {
      userEvent.keyboard("{Escape}")

      const calendarButton = screen.getByRole("button", {
        name: "Change date, Mar 1, 2022",
      })
      expect(calendarButton).toHaveFocus()
    })
  })
})

describe("<DatePicker /> - Input format", () => {
  it("formats values when focus is on the input", async () => {
    render(<DatePickerWrapper selectedDay={new Date("2022-03-01")} />)

    const input = screen.getByLabelText("Input label")
    expect(input).toHaveValue("Mar 1, 2022")

    userEvent.tab()

    expect(input).toHaveValue("03/01/2022")
  })

  it("formats values when the input loses focus - onBlur", async () => {
    render(<DatePickerWrapper selectedDay={new Date("2022-03-01")} />)

    const input = screen.getByLabelText("Input label")
    expect(input).toHaveValue("Mar 1, 2022")

    userEvent.tab()

    expect(input).toHaveValue("03/01/2022")

    userEvent.tab()

    waitFor(() => {
      expect(input).toHaveValue("Mar 1, 2022")
    })
  })
})

describe("<DatePicker /> - Validation", () => {
  describe("Custom Validation", () => {
    it("displays the message when status is error", async () => {
      render(
        <DatePickerWrapper status="error" validationMessage="Invalid Date." />
      )
      expect(screen.getByText("Invalid Date.")).toBeVisible()
    })
  })

  describe("Inbuilt Validation", () => {
    it("displays error message when selected day is invalid", async () => {
      render(<DatePickerWrapper selectedDay={new Date("potato")} />)

      expect(screen.getByText("Date is invalid")).toBeVisible()
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
      ).toBeVisible()
    })

    it("displays error message when input date is invalid", () => {
      render(<DatePickerWrapper />)

      const input = screen.getByLabelText("Input label")
      userEvent.type(input, "05/05/2022Blah")

      userEvent.tab()

      waitFor(() => {
        expect(
          screen.getByText("05/05/2022Blah is an invalid date")
        ).toBeVisible()
      })
    })

    it("displays error message when input date is disabled", () => {
      render(<DatePickerWrapper disabledBefore={new Date("2022-05-15")} />)

      const input = screen.getByLabelText("Input label")
      userEvent.type(input, "05/05/2022")

      userEvent.tab()

      waitFor(() => {
        expect(
          screen.getByText("05/05/2022 is not available, try another date")
        ).toBeVisible()
      })
    })
  })
})
