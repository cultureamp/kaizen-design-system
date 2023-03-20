import React from "react"
import { render, screen } from "@testing-library/react"
import { CheckboxGroup, CheckboxGroupProps } from "./CheckboxGroup"

const defaultCheckboxGroupProps: CheckboxGroupProps = {
  automationId: "CheckboxGroupAutomationId",
  labelText: "Label",
}

const renderCheckboxGroupProps = (
  props?: CheckboxGroupProps
): ReturnType<typeof render> => {
  const mergedCheckboxGroupProps = { ...defaultCheckboxGroupProps, ...props }

  return render(<CheckboxGroup {...mergedCheckboxGroupProps} />)
}

describe("<CheckboxGroup /> ", () => {
  it("renders a `data-automation-id` attribute", () => {
    const { container } = renderCheckboxGroupProps()
    expect(
      container.querySelector(
        `[data-automation-id="${defaultCheckboxGroupProps.automationId}-field-checkbox-group"]`
      )
    ).toBeInTheDocument()
  })

  it("renders a title", () => {
    const title = "Label"

    const { queryByText } = render(
      <CheckboxGroup labelText={title} children={null} />
    )
    expect(queryByText(title)).toBeTruthy()
  })

  describe("accessibilty", () => {
    it("has an accessible name when not provided a labelId", () => {
      render(<CheckboxGroup labelText="Label title" />)
      expect(
        screen.getByRole("group", { name: "Label title" })
      ).toBeInTheDocument()
    })
    it("has an accessible name when provided a labelId", () => {
      render(<CheckboxGroup labelText="Label title" labelId="some-custom-id" />)
      expect(
        screen.getByRole("group", { name: "Label title" })
      ).toBeInTheDocument()
    })
  })
})
