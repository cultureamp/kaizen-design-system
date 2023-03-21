import React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom"

import { TextField } from "./TextField"

const defaultProps = {
  id: "text-field-test",
  labelText: "Label",
  description: "Description text",
}

describe("<TextField />", () => {
  afterEach(cleanup)

  it("renders the provided description", () => {
    render(<TextField {...defaultProps} />)
    screen.getByText("Description text")
  })

  it("renders the provided validation message", () => {
    render(
      <TextField
        {...defaultProps}
        validationMessage="An unexpected error has occurred!"
        status="error"
      />
    )
    screen.getByText("An unexpected error has occurred!")
  })

  it("validation message has the correct type", () => {
    const { container } = render(
      <TextField
        {...defaultProps}
        validationMessage="An unexpected error has occurred!"
        status="error"
      />
    )
    expect(
      container.querySelector(`#${defaultProps.id}-field-validation-message`)
    ).toHaveClass("error")
  })

  it("renders correct aria-describedby when only description provided", () => {
    render(<TextField {...defaultProps} description="Description text" />)
    screen.getByRole("textbox", {
      description: "Description text",
    })
  })

  describe("when only validation message provided", () => {
    it("renders correct aria-describedby ", () => {
      render(
        <TextField
          {...defaultProps}
          description={undefined}
          validationMessage="Error message"
        />
      )
      screen.getByRole("textbox", {
        description: "Error message",
      })
    })
  })

  describe("when both description and validation message provided", () => {
    it("renders correct aria-describedby", () => {
      render(
        <TextField
          {...defaultProps}
          description="Description text"
          validationMessage="Error message"
        />
      )
      screen.getByRole("textbox", {
        description: "Description text Error message",
      })
    })
  })

  describe("when no description or validation message provided", () => {
    it("renders an empty aria-describedby", () => {
      render(
        <TextField
          {...defaultProps}
          description={undefined}
          validationMessage={undefined}
        />
      )
      screen.getByRole("textbox", {
        description: "",
      })
    })
  })
})
