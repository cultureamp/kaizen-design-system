import React from "react"
import { render } from "@testing-library/react"
import { TextField } from "./TextField"

const defaultProps = {
  id: "text-field-test",
  labelText: "Label",
  description: "Description text",
}

describe("<TextField />", () => {
  it("renders correct aria-describedby when only description provided", () => {
    const { getByRole } = render(
      <TextField {...defaultProps} description="Description text" />
    )

    const input = getByRole("textbox", {
      description: "Description text",
    })

    expect(input).toBeInTheDocument()
  })

  it("renders correct aria-describedby when only validation message provided", () => {
    const { getByRole } = render(
      <TextField
        {...defaultProps}
        description={undefined}
        validationMessage="Error message"
      />
    )
    const input = getByRole("textbox", {
      description: "Error message",
    })

    expect(input).toBeInTheDocument()
  })
  it("renders correct aria-describedby when both description and validation message provided", () => {
    const { getByRole } = render(
      <TextField
        {...defaultProps}
        description="Description text"
        validationMessage="Error message"
      />
    )
    const input = getByRole("textbox", {
      description: "Description text Error message",
    })

    expect(input).toBeInTheDocument()
  })
  it("renders empty aria-describedby when no description or validation message provided", () => {
    const { getByRole } = render(
      <TextField
        {...defaultProps}
        description={undefined}
        validationMessage={undefined}
      />
    )
    const input = getByRole("textbox", {
      description: "",
    })

    expect(input).toBeInTheDocument()
  })

  it("renders a TextField with the correct input type", () => {
    const { getByLabelText } = render(
      <TextField {...defaultProps} labelText="Password input" type="password" />
    )
    const input = getByLabelText("Password input")
    expect(input).toHaveAttribute("type", "password")
  })

  it("will fall back to the `type` default value If deprecated inputType is undefined", () => {
    const { getByRole } = render(
      <TextField {...defaultProps} labelText="Default" />
    )
    expect(getByRole("textbox", { name: "Default" })).toBeInTheDocument()
  })
})
