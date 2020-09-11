import { cleanup, render } from "@testing-library/react"
import { fireEvent } from "@testing-library/dom"
import * as React from "react"
import RadioInput, { RadioInputProps } from "./RadioInput"

afterEach(cleanup)

const defaultRadioInputProps: RadioInputProps = {
  id: "testRadioInputId",
  automationId: "RadioInputAutomationId",
  selectedStatus: false,
  disabled: false,
  name: "RadioInputName",
  onChange: jest.fn(),
  value: "radio-1",
}
const renderRadioInput = (props?: RadioInputProps) => {
  const mergedRadioInputProps = { ...defaultRadioInputProps, ...props }

  return render(<RadioInput {...mergedRadioInputProps} />)
}
describe("<RadioInput /> ", () => {
  it("should call the `onChange` event when clicked", () => {
    const { container } = render(<RadioInput {...defaultRadioInputProps} />)
    const radioInput = container.querySelector(
      `[data-automation-id="${defaultRadioInputProps.automationId}"]`
    )

    if (radioInput) {
      fireEvent.click(radioInput)

      expect(defaultRadioInputProps.onChange).toBeCalledTimes(1)
    }
  })

  it("has the disabled attribute applied if the disabled prop is true", () => {
    const { container } = renderRadioInput({
      id: "testId",
      name: "someRadioName",
      disabled: true,
      value: "radio-1",
    })
    expect(container.querySelector("[disabled]")).toBeTruthy()
  })

  it("has a true .checked property when the selectedStatus is true", () => {
    const { container } = renderRadioInput({
      id: "testId",
      name: "someRadioName",
      selectedStatus: true,
      value: "radio-1",
    })
    expect(container.querySelector("input")!.checked).toBeTruthy()
  })

  it("can be both checked and disabled at the same time", () => {
    const { container } = renderRadioInput({
      id: "testId",
      name: "someRadioName",
      selectedStatus: true,
      disabled: true,
      value: "radio-1",
    })
    expect(container.querySelector("input")!.checked).toBeTruthy()
    expect(container.querySelector("[disabled]")).toBeTruthy()
  })

  it("doesnt have the `.checked` property if the selectedStatus prop is not present", () => {
    const { container } = renderRadioInput({
      id: "testId",
      name: "someRadioName",
      value: "radio-1",
    })
    expect(container.querySelector("input")!.checked).toBeFalsy()
  })

  it("should render an `id` attribute", () => {
    const { container } = renderRadioInput()
    expect(
      container.querySelector(`[id="${defaultRadioInputProps.id}"]`)
    ).toBeTruthy()
  })

  it("should render a `name` attribute", () => {
    const { container } = renderRadioInput()
    expect(
      container.querySelector(`[name="${defaultRadioInputProps.name}"]`)
    ).toBeTruthy()
  })

  it("should render a `data-automation-id` attribute", () => {
    const { container } = renderRadioInput()
    expect(
      container.querySelector(
        `[data-automation-id="${defaultRadioInputProps.automationId}"]`
      )
    ).toBeTruthy()
  })

  it("should render a `value` attribute", () => {
    const { container } = renderRadioInput()
    expect(
      container.querySelector(`[value="${defaultRadioInputProps.value}"]`)
    ).toBeTruthy()
  })
})
