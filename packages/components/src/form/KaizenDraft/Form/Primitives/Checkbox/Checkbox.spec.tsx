import React from "react"
import { fireEvent } from "@testing-library/dom"
import { cleanup, render } from "@testing-library/react"

import { CheckboxProps } from "./Checkbox"
import { Checkbox } from "."

afterEach(cleanup)

const defaultProps: CheckboxProps = {
  id: "someCheckboxId",
  automationId: "someCheckboxAutomationId",
  checkedStatus: "off",
  disabled: false,
  name: "someCheckboxName",
  onCheck: jest.fn(),
}

const renderCheckbox = (props?: CheckboxProps): ReturnType<typeof render> => {
  const mergedInputProps = { ...defaultProps, ...props }

  return render(<Checkbox {...mergedInputProps} />)
}

describe("<Checkbox />", () => {
  it("should call the `onCheck` event when clicked", () => {
    const { container } = render(<Checkbox {...defaultProps} />)
    const checkbox = container.querySelector(
      `[data-automation-id="${defaultProps.automationId}"]`
    )

    if (checkbox) {
      fireEvent.click(checkbox)

      expect(defaultProps.onCheck).toBeCalledTimes(1)
    }
  })

  it("should render a disabled checkbox", () => {
    const { container } = renderCheckbox({ disabled: true })
    expect(container.querySelector("[disabled]")).toBeTruthy()
  })

  it("should render a `checked` checkbox", () => {
    const { container } = renderCheckbox({ checkedStatus: "on" })
    expect(container.querySelector("[checked]")).toBeTruthy()
  })

  it("should render a `mixed` checkbox", () => {
    const { container } = renderCheckbox({ checkedStatus: "mixed" })
    expect(container.querySelector("[data-indeterminate]")).toBeTruthy()
  })

  it("should render an `id` attribute", () => {
    const { container } = renderCheckbox()
    expect(container.querySelector(`[id="${defaultProps.id}"]`)).toBeTruthy()
  })

  it("should render a `name` attribute", () => {
    const { container } = renderCheckbox()
    expect(
      container.querySelector(`[name="${defaultProps.name}"]`)
    ).toBeTruthy()
  })

  it("should render a `data-automation-id` attribute", () => {
    const { container } = renderCheckbox()
    expect(
      container.querySelector(
        `[data-automation-id="${defaultProps.automationId}"]`
      )
    ).toBeTruthy()
  })
})
