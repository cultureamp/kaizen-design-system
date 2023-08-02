import React from "react"
import { render } from "@testing-library/react"
import { RadioField, RadioFieldProps } from "./RadioField"

const defaultRadioFieldProps: RadioFieldProps = {
  id: "testRadioId",
  automationId: "RadioAutomationId",
  selectedStatus: false,
  labelText: "Label",
  disabled: false,
  name: "RadioName",
  onChange: jest.fn(),
  inline: false,
  value: "radio-1",
}
const renderRadio = (props?: RadioFieldProps): ReturnType<typeof render> => {
  const mergedRadioFieldProps = { ...defaultRadioFieldProps, ...props }

  return render(<RadioField {...mergedRadioFieldProps} />)
}

describe("<Radio />", () => {
  it("has the disabled attribute applied if the disabled prop is true", () => {
    const { container } = renderRadio({
      id: "testId",
      name: "someRadioName",
      labelText: "Label",
      disabled: true,
      value: "radio-1",
    })
    expect(container.querySelector("[disabled]")).toBeTruthy()
  })

  it("has a true .checked property when the selectedStatus is true", () => {
    const { container } = renderRadio({
      id: "testId",
      name: "RadioName",
      labelText: "Label",
      selectedStatus: true,
      value: "radio-1",
    })
    expect(container.querySelector("input")!.checked).toBeTruthy()
  })

  it("can be both checked and disabled at the same time", () => {
    const { container } = renderRadio({
      id: "testId",
      name: "RadioName",
      labelText: "Label",
      selectedStatus: true,
      disabled: true,
      value: "radio-1",
    })
    expect(container.querySelector("input")!.checked).toBeTruthy()
    expect(container.querySelector("[disabled]")).toBeTruthy()
  })

  it("doesnt have the `.checked` property if the selectedStatus prop is not present", () => {
    const { container } = renderRadio({
      id: "testId",
      name: "RadioName",
      labelText: "Label",
      value: "radio-1",
    })
    expect(container.querySelector("input")!.checked).toBeFalsy()
  })

  it("renders an `id` attribute", () => {
    const { container } = renderRadio()
    expect(
      container.querySelector(`[id="${defaultRadioFieldProps.id}"]`)
    ).toBeTruthy()
  })

  it("renders a `name` attribute", () => {
    const { container } = renderRadio()
    expect(
      container.querySelector(`[name="${defaultRadioFieldProps.name}"]`)
    ).toBeTruthy()
  })

  it("renders a `data-automation-id` attribute", () => {
    const { container } = renderRadio()
    expect(
      container.querySelector(
        `[data-automation-id="${defaultRadioFieldProps.automationId}"]`
      )
    ).toBeTruthy()
  })

  it("renders a `value` attribute", () => {
    const { container } = renderRadio()
    expect(
      container.querySelector(`[value="${defaultRadioFieldProps.value}"]`)
    ).toBeTruthy()
  })
})
