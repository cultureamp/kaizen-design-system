import React from "react"
import { render, screen } from "@testing-library/react"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import { DateInput } from "./DateInput"

const defaultProps = {
  id: "text-field-test",
  labelText: "Label",
  description: "Description text",
  icon: dateStart,
  isOpen: false,
  onButtonClick: jest.fn<void, []>(),
  onKeyDown: jest.fn<void, [React.KeyboardEvent<HTMLInputElement>]>(),
  onBlur: jest.fn,
  onChange: jest.fn,
  calendarId: "calendar-dialog",
  value: undefined,
}

describe("<DateInput />", () => {
  it("renders a description and aria-describeBy when provided", () => {
    const ariaDescribedBy = "text-field-test-field-message"

    const { container } = render(<DateInput {...defaultProps} />)
    expect(
      container.querySelector(`[aria-describedby="${ariaDescribedBy}"]`)
    ).toBeInTheDocument()

    expect(
      screen.getByText("Description text (Format: mm/dd/yyyy)")
    ).toBeInTheDocument()
  })

  it("updates calendar button aria-label with selected day", async () => {
    render(<DateInput {...defaultProps} value={"Mar 1, 2022"} />)

    expect(
      screen.getByLabelText("Change date, Mar 1, 2022")
    ).toBeInTheDocument()
  })

  it("updates calendar button to be disabled when input is disabled", async () => {
    render(<DateInput {...defaultProps} disabled />)

    const calendarButton = screen
      .getByLabelText("Choose date")
      .closest("button")

    expect(calendarButton).toBeDisabled()
  })
})
