import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import { TextField } from "./TextField"

const defaultProps = {
  id: "text-field-test",
  labelText: "Label",
  description: "Description text",
}

describe("<TextField />", () => {
  it("renders a description when provided", () => {
    render(<TextField {...defaultProps} />)
    expect(screen.getByText("Description text")).toBeInTheDocument()
  })

  it("renders a validation message when provided", () => {
    render(
      <TextField
        {...defaultProps}
        validationMessage="Error message"
        status="error"
      />
    )
    expect(screen.getByText("Description text")).toBeInTheDocument()
  })

  it("validation message has the correct type", () => {
    const { container } = render(
      <TextField
        {...defaultProps}
        validationMessage="Error message"
        status="error"
      />
    )
    expect(
      container.querySelector(`#${defaultProps.id}-field-validation-message`)
    ).toHaveClass("error")
  })

  it("renders correct aria-describedby when only description provided", () => {
    render(<TextField {...defaultProps} description="Description text" />)
    const input = screen.getByRole("textbox", {
      description: "Description text",
    })

    expect(input).toBeInTheDocument()
  })

  it("renders correct aria-describedby when only validation message provided", () => {
    render(
      <TextField
        {...defaultProps}
        description={undefined}
        validationMessage="Error message"
      />
    )
    const input = screen.getByRole("textbox", {
      description: "Error message",
    })

    expect(input).toBeInTheDocument()
  })
  it("renders correct aria-describedby when both description and validation message provided", () => {
    render(
      <TextField
        {...defaultProps}
        description="Description text"
        validationMessage="Error message"
      />
    )
    const input = screen.getByRole("textbox", {
      description: "Description text Error message",
    })

    expect(input).toBeInTheDocument()
  })
  it("renders empty aria-describedby when no description or validation message provided", () => {
    render(
      <TextField
        {...defaultProps}
        description={undefined}
        validationMessage={undefined}
      />
    )
    const input = screen.getByRole("textbox", {
      description: "",
    })

    expect(input).toBeInTheDocument()
  })
})
