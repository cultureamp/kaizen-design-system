import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"

import { DateInput } from "./DateInput"

const validationMessages = {
  success: "This is a success message",
  caution: "This is a cautionary message",
  error: "This is an error message",
}

const defaultProps = {
  id: "text-field-test",
  labelText: "Label",
  description: "Description text",
  icon: dateStart,
  validationMessages,
  isOpen: false,
  onButtonClick: () => jest.fn(),
  onKeyDown: () => jest.fn(),
}

describe("<DateInput />", () => {
  it("renders a description when provided", () => {
    render(<DateInput {...defaultProps} />)
    screen.getByText("Description text")
  })

  it("renders a error validation message when provided", () => {
    render(<DateInput {...defaultProps} status="error" />)
    screen.getByText("This is an error message")
  })

  it("renders the correc validation message class", () => {
    const { container } = render(<DateInput {...defaultProps} status="error" />)
    expect(
      container.querySelector(`#${defaultProps.id}-field-message`)
    ).toHaveClass("error")
  })
})
