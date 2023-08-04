import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { CheckboxProps } from "./Checkbox"
import { Checkbox } from "."

const user = userEvent.setup()

const defaultProps = {
  id: "someCheckboxId",
  automationId: "someCheckboxAutomationId",
  checkedStatus: "off",
  disabled: false,
  name: "someCheckboxName",
  onCheck: vi.fn(),
} satisfies CheckboxProps

const renderCheckbox = (props?: CheckboxProps): ReturnType<typeof render> => {
  const mergedInputProps = { ...defaultProps, ...props }

  return render(<Checkbox {...mergedInputProps} />)
}

describe("<Checkbox />", () => {
  it("calls the `onCheck` event when clicked", async () => {
    const { getByTestId } = render(<Checkbox {...defaultProps} />)
    const checkbox = getByTestId(defaultProps.automationId)

    await user.click(checkbox)
    await waitFor(() => {
      expect(defaultProps.onCheck).toBeCalledTimes(1)
    })
  })

  it("renders a disabled checkbox", () => {
    const { container } = renderCheckbox({ disabled: true })
    expect(container.querySelector("[disabled]")).toBeTruthy()
  })

  it("renders a `checked` checkbox", () => {
    const { container } = renderCheckbox({ checkedStatus: "on" })
    expect(container.querySelector("[checked]")).toBeTruthy()
  })

  it("renders a `mixed` checkbox", () => {
    const { container } = renderCheckbox({ checkedStatus: "mixed" })
    expect(container.querySelector("[data-indeterminate]")).toBeTruthy()
  })

  it("renders an `id` attribute", () => {
    const { container } = renderCheckbox()
    expect(container.querySelector(`[id="${defaultProps.id}"]`)).toBeTruthy()
  })

  it("renders a `name` attribute", () => {
    const { container } = renderCheckbox()
    expect(
      container.querySelector(`[name="${defaultProps.name}"]`)
    ).toBeTruthy()
  })

  it("renders a `data-automation-id` attribute", () => {
    const { container } = renderCheckbox()
    expect(
      container.querySelector(
        `[data-automation-id="${defaultProps.automationId}"]`
      )
    ).toBeTruthy()
  })
})
