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
  ...restProps
}: Partial<DatePickerProps>) => {
  const [status, setStatus] = useState<FieldMessageStatus>(
    propsStatus || "default"
  )
  const [validationMessage, setValidationMessage] = useState<React.ReactNode>(
    propsValidationMessage
  )
  const [selectedDate, setValueDate] = useState<Date | undefined>(
    restProps.selectedDay
  )

  const handleValidation = (validationResponse: ValidationResponse) => {
    validationResponse.status && setStatus(validationResponse.status)
    validationResponse.validationMessage &&
      setValidationMessage(validationResponse.validationMessage)
  }
  return (
    <DatePicker
      id="test__date-picker"
      labelText="Choose date"
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
  it("should have an empty input value when a date is not provided", async () => {
    render(<DatePickerWrapper />)

    expect(screen.getByRole("combobox")).toHaveValue("")
  })

  it("should pre-fill the input when an initial date is provided", async () => {
    render(<DatePickerWrapper selectedDay={new Date("2022-03-1")} />)

    expect(screen.getByDisplayValue("Mar 1, 2022")).toBeInTheDocument()
  })

  describe("Selecting a date using the calendar", () => {
    beforeEach(() => {
      render(<DatePickerWrapper defaultMonth={new Date("2022-03-01")} />)
      const calendarButton = screen.getByLabelText("Choose date", {
        selector: "button",
      })
      userEvent.click(calendarButton)
      const dateToSelect = screen.getByText("6th March (Sunday)").parentElement
      act(() => {
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

  describe("Validation", () => {
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

  describe("Keydown arrow on input", () => {
    it("show focus on selected day", async () => {
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

    it("show focus on today when no date is selected", async () => {
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

  describe("Click on input", () => {
    it("show focus on input", async () => {
      render(<DatePickerWrapper selectedDay={new Date("2022-03-1")} />)
      const input = screen.getByRole("combobox")

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      waitFor(() => {
        userEvent.click(input)
        expect(screen.queryByRole("dialog")).toBeInTheDocument()
      })

      expect(input).toHaveFocus()
    })

    it("show focus on the input when a new date is selected from the calendar", async () => {
      render(<DatePickerWrapper selectedDay={new Date("2022-03-1")} />)
      const input = screen.getByRole("combobox")

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

      waitFor(() => {
        userEvent.click(input)
        expect(screen.queryByRole("dialog")).toBeInTheDocument()
        const dateToSelect =
          screen.getByText("6th March (Sunday)").parentElement

        dateToSelect && userEvent.click(dateToSelect)
      })
      expect(input).toHaveFocus()
    })
  })

  describe("Click on calendar button", () => {
    it("show focus on selected day", async () => {
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

    it("show focus on today when no date is selected", async () => {
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

      const dateToSelect = screen.getByText(todayFormatted).parentElement

      expect(dateToSelect).toHaveFocus()
    })
  })

  describe("Keydown enter on calendar button", () => {
    it("show focus on selected day", async () => {
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

    it("show focus on today when no date is selected", async () => {
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

      const dateToSelect = screen.getByText(todayFormatted).parentElement

      expect(dateToSelect).toHaveFocus()
    })
  })

  it("allows you to tab through input, button and calendar", async () => {
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
