import { cleanup, render } from "@testing-library/react"
import { fireEvent } from "@testing-library/dom"
import * as React from "react"
import Radio, { RadioProps } from "./Radio"

afterEach(cleanup)

const defaultRadioProps: RadioProps = {
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
const renderRadio = (props?: RadioProps) => {
  const mergedRadioProps = { ...defaultRadioProps, ...props }

  return render(<Radio {...mergedRadioProps} />)
}
describe("<Radio /> ", () => {
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

  it("should render an `id` attribute", () => {
    const { container } = renderRadio()
    expect(
      container.querySelector(`[id="${defaultRadioProps.id}"]`)
    ).toBeTruthy()
  })

  it("should render a `name` attribute", () => {
    const { container } = renderRadio()
    expect(
      container.querySelector(`[name="${defaultRadioProps.name}"]`)
    ).toBeTruthy()
  })

  it("should render a `data-automation-id` attribute", () => {
    const { container } = renderRadio()
    expect(
      container.querySelector(
        `[data-automation-id="${defaultRadioProps.automationId}"]`
      )
    ).toBeTruthy()
  })

  it("should render a `value` attribute", () => {
    const { container } = renderRadio()
    expect(
      container.querySelector(`[value="${defaultRadioProps.value}"]`)
    ).toBeTruthy()
  })
})
