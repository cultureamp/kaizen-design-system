import React from "react"
import { render, screen } from "@testing-library/react"
import { TextAreaField } from "./"

describe("<TextAreaField />", () => {
  it("renders the label", () => {
    render(<TextAreaField id="reply" labelText="Text area label" />)
    expect(screen.getByText("Text area label")).toBeTruthy()
  })

  it("renders the provided description", () => {
    render(
      <TextAreaField
        id="reply"
        labelText="Your reply"
        description="Your reply will only be seen by you"
      />
    )

    expect(screen.getByText("Your reply will only be seen by you")).toBeTruthy()
  })

  it("renders the provided validation message", () => {
    render(
      <TextAreaField
        id="reply"
        labelText="Your reply"
        validationMessage="Incorrect message"
      />
    )

    expect(screen.getByText("Incorrect message")).toBeTruthy()
  })

  describe("Prominent Variant", () => {
    // TO DO: These look like they should be stories and tested by Chromatic - likely are already -CK
    it("renders a prominent label", () => {
      const { container } = render(
        <TextAreaField
          id="reply"
          labelText="Prominent label"
          validationMessage="Incorrect message"
          variant="prominent"
        />
      )

      expect(container.getElementsByClassName("prominent").length).toBe(1)
    })

    it("renders descriptions as the first sibling of the prominent labels", () => {
      const { container } = render(
        <TextAreaField
          id="reply"
          labelText="Prominent label"
          description="This should be the immediate sibling to the label"
          variant="prominent"
        />
      )

      const prominentLabel = container.getElementsByClassName(
        "textareaLabelProminent"
      )[0]
      const siblingNode = prominentLabel?.nextElementSibling

      expect(siblingNode?.className === "message").toBeTruthy()
    })
  })
  describe("Validation message", () => {
    describe("When a validation message is provided", () => {
      it("renders the validation message", () => {
        render(
          <TextAreaField
            id="reply"
            labelText="Prominent label"
            validationMessage="This should render"
          />
        )
        screen.getByText("This should render")
      })
    })

    describe("When the textarea field is disabled", () => {
      it("does not render a validation message", () => {
        render(
          <TextAreaField
            id="reply"
            labelText="Prominent label"
            validationMessage="This should not render"
            disabled
          />
        )
        expect(screen.queryByText("This should not render")).toBeFalsy()
      })
    })
  })

  describe("Aria-describedby attribute", () => {
    const defaultProps = {
      id: "text-area-field-test",
      labelText: "Label",
    }

    it("renders correct aria-describedby when only description provided", () => {
      render(<TextAreaField {...defaultProps} description="Description text" />)
      screen.getByRole("textbox", {
        description: "Description text",
      })
    })

    it("renders correct aria-describedby when only validation message provided", () => {
      render(
        <TextAreaField
          {...defaultProps}
          description={undefined}
          validationMessage="Error message"
        />
      )
      screen.getByRole("textbox", {
        description: "Error message",
      })
    })

    it("renders correct aria-describedby when both description and validation message provided", () => {
      render(
        <TextAreaField
          {...defaultProps}
          description="Description text"
          validationMessage="Error message"
        />
      )
      screen.getByRole("textbox", {
        description: "Description text Error message",
      })
    })

    it("renders empty aria-describedby when no description or validation message provided", () => {
      render(
        <TextAreaField
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
