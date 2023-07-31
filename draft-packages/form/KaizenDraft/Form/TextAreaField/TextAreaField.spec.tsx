import React from "react"
import { render, screen } from "@testing-library/react"
import { TextAreaField } from "./"

describe("<TextAreaField />", () => {
  it("renders the label", () => {
    render(<TextAreaField id="reply" labelText="Text area label" />)
    expect(screen.getByText("Text area label")).toBeVisible()
  })

  it("renders a description when provided", () => {
    render(
      <TextAreaField
        id="reply"
        labelText="Your reply"
        description="Your reply will only be seen by you"
      />
    )

    expect(
      screen.getByText("Your reply will only be seen by you")
    ).toBeVisible()
  })

  it("renders a validation message when provided", () => {
    render(
      <TextAreaField
        id="reply"
        labelText="Your reply"
        validationMessage="Incorrect message"
      />
    )

    expect(screen.getByText("Incorrect message")).toBeVisible()
  })

  describe("Validation message", () => {
    describe("When the textarea field is provided a validation message", () => {
      it("renders the validation message", () => {
        render(
          <TextAreaField
            id="reply"
            labelText="Prominent label"
            validationMessage="This should render"
          />
        )
        expect(screen.getByText("This should render")).toBeInTheDocument()
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
        expect(
          screen.queryByText("This should not render")
        ).not.toBeInTheDocument()
      })
    })
  })

  describe("aria-describedby value", () => {
    const defaultProps = {
      id: "text-area-field-test",
      labelText: "Label",
    }

    it("renders correct aria-describedby when only description provided", () => {
      render(<TextAreaField {...defaultProps} description="Description text" />)
      const ariaDescribedBy = screen.getByRole("textbox", {
        description: "Description text",
      })

      expect(ariaDescribedBy).toBeInTheDocument()
    })

    it("renders correct aria-describedby when only validation message provided", () => {
      render(
        <TextAreaField
          {...defaultProps}
          description={undefined}
          validationMessage="Error message"
        />
      )
      const ariaDescribedBy = screen.getByRole("textbox", {
        description: "Error message",
      })

      expect(ariaDescribedBy).toBeInTheDocument()
    })

    it("renders correct aria-describedby when both description and validation message provided", () => {
      render(
        <TextAreaField
          {...defaultProps}
          description="Description text"
          validationMessage="Error message"
        />
      )
      const ariaDescribedBy = screen.getByRole("textbox", {
        description: "Description text Error message",
      })

      expect(ariaDescribedBy).toBeInTheDocument()
    })

    it("renders empty aria-describedby when no description or validation message provided", () => {
      render(
        <TextAreaField
          {...defaultProps}
          description={undefined}
          validationMessage={undefined}
        />
      )
      const ariaDescribedBy = screen.getByRole("textbox", {
        description: "",
      })

      expect(ariaDescribedBy).toBeInTheDocument()
    })
  })
})
