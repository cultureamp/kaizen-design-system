import { act, render, screen } from "@testing-library/react"
import React, { useState } from "react"
import { FieldMessageStatus } from "@kaizen/draft-form"
import userEvent from "@testing-library/user-event"
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
  it("should have an empty input value when a date is not provided", async () => {
    render(<DatePickerWrapper />)

    expect(screen.getByRole("combobox")).toHaveValue("")
  })

  it("should pre-fill the input when an initial date is provided", async () => {
    render(<DatePickerWrapper selectedDay={new Date("2022-03-1")} />)

    expect(screen.getByDisplayValue("Mar 1, 2022")).toBeInTheDocument()
  })

  it("shows/hides calendar on button press", async () => {
    render(<DatePickerWrapper />)

    const button = screen.getByRole("button")

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    await act(async () => button.click())
    expect(screen.getByRole("dialog")).toBeVisible()
  })

  it("shows/hides calendar on arrow down keydown", async () => {
    render(<DatePickerWrapper />)

    const input = screen.getByRole("combobox")

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    await act(async () => {
      input.focus()
      userEvent.keyboard("{arrowdown}")
    })
    expect(screen.getByRole("dialog")).toBeVisible()
  })

  it("is able to select date and shows in input", async () => {
    render(<DatePickerWrapper defaultMonth={new Date("2022-03-01")} />)

    const button = screen.getByRole("button")

    await act(async () => button.click())

    const selectedDate = screen.getByText("6th March (Sunday)")

    await act(async () => {
      selectedDate.parentElement && selectedDate.parentElement.focus()
      userEvent.keyboard("{enter}")
    })

    expect(screen.getByDisplayValue("Mar 6, 2022")).toBeInTheDocument()
  })

  it("returns focus to the button once date has been selected", async () => {
    render(<DatePickerWrapper defaultMonth={new Date("2022-03-01")} />)

    const button = screen.getByRole("button", {
      name: "Choose date",
    })

    await act(async () => button.click())

    const selectedDate = screen.getByText("6th March (Sunday)")
    await act(async () => {
      selectedDate.parentElement && selectedDate.parentElement.focus()
      userEvent.keyboard("{enter}")
    })

    expect(button).toHaveFocus()
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
})
