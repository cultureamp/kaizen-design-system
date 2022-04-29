import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"

import { DateInput } from "./DateInput"

const defaultProps = {
  id: "text-field-test",
  labelText: "Label",
  description: "Description text",
  icon: dateStart,
  isOpen: false,
  onButtonClick: () => jest.fn(),
  onKeyDown: () => jest.fn(),
}

describe("<DateInput />", () => {
  it("renders a description when provided", () => {
    render(<DateInput {...defaultProps} />)
    screen.getByText("Description text")
  })
})
