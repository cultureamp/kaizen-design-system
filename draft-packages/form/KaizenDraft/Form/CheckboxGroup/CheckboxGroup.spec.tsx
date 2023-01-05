import React from "react"
import { cleanup, render } from "@testing-library/react"
import { CheckboxGroup, CheckboxGroupProps } from "./CheckboxGroup"

afterEach(cleanup)

const defaultCheckboxGroupProps: CheckboxGroupProps = {
  automationId: "CheckboxGroupAutomationId",
  labelText: "Label",
  noBottomMargin: true,
}
const renderCheckboxGroupProps = (
  props?: CheckboxGroupProps
): ReturnType<typeof render> => {
  const mergedCheckboxGroupProps = { ...defaultCheckboxGroupProps, ...props }

  return render(<CheckboxGroup {...mergedCheckboxGroupProps} />)
}

describe("<CheckboxGroup /> ", () => {
  it("should render a `data-automation-id` attribute", () => {
    const { container } = renderCheckboxGroupProps()
    expect(
      container.querySelector(
        `[data-automation-id="${defaultCheckboxGroupProps.automationId}-field-checkbox-group"]`
      )
    ).toBeTruthy()
  })

  it("should render a title", () => {
    const title = "Label"

    const { queryByText } = render(
      <CheckboxGroup labelText={title} children={null} />
    )
    expect(queryByText(title)).toBeTruthy()
  })

  test("renders Checkbox Group with noBottomMargin attribute", () => {
    const { container } = render(
      <CheckboxGroup
        automationId="CheckboxGroupAutomationId"
        labelText="CheckboxGroup Label"
        noBottomMargin
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
  test("renders Checkbox Group without noBottomMargin attribute", () => {
    const { container } = render(
      <CheckboxGroup
        automationId="CheckboxGroupAutomationId"
        labelText="CheckboxGroup Label"
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
