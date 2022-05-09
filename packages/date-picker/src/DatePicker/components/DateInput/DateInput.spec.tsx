import React from "react"
import { act, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"

import userEvent from "@testing-library/user-event"
import { DateInput } from "./DateInput"

const defaultProps = {
  id: "text-field-test",
  labelText: "Label",
  description: "Description text",
  icon: dateStart,
  isOpen: false,
  onButtonClick: () => jest.fn(),
  onKeyDown: () => jest.fn(),
  onBlur: () => jest.fn(),
  calendarId: "calendar-dialog",
  valueDate: undefined,
}

describe("<DateInput />", () => {
  it("renders a description when provided", () => {
    render(<DateInput {...defaultProps} />)
    screen.getByText("Description text")
  })

  it("formats values when focus is on the input", async () => {
    render(<DateInput {...defaultProps} valueDate={new Date(2022, 2, 1)} />)

    expect(screen.getByDisplayValue("Mar 1, 2022")).toBeInTheDocument()

    const input = screen.getByRole("combobox")

    await act(async () => {
      input.focus()
    })
    expect(screen.getByDisplayValue("03/01/2022")).toBeInTheDocument()
  })

  it("formats values when the input loses focus - onBlur", async () => {
    render(<DateInput {...defaultProps} valueDate={new Date(2022, 2, 1)} />)

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

  it("updates calendar button aria-label with selected day", async () => {
    render(<DateInput {...defaultProps} valueDate={new Date(2022, 2, 1)} />)

    expect(
      screen.getByLabelText("Change date, Mar 1, 2022")
    ).toBeInTheDocument()
  })

  it("updates calendar button to be disabled when input is disabled", async () => {
    render(<DateInput {...defaultProps} disabled />)
    expect(
      screen.getByLabelText("Choose date").closest("button")
    ).toBeDisabled()
  })
})
