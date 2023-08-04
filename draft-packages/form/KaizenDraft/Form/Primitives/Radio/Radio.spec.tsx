import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Radio, RadioProps } from "./Radio"

const user = userEvent.setup()

const defaultRadioProps = {
  id: "testRadioId",
  automationId: "RadioAutomationId",
  selectedStatus: false,
  disabled: false,
  name: "RadioName",
  onChange: vi.fn(),
  value: "radio-1",
} satisfies RadioProps

const renderRadio = (props?: RadioProps): ReturnType<typeof render> => {
  const mergedRadioProps = { ...defaultRadioProps, ...props }

  return render(<Radio {...mergedRadioProps} />)
}

describe("<Radio />", () => {
  it("calls the `onChange` event when clicked", async () => {
    const { getByTestId } = render(<Radio {...defaultRadioProps} />)
    const radioInput = getByTestId(defaultRadioProps.automationId)

    await user.click(radioInput)
    await waitFor(() => {
      expect(defaultRadioProps.onChange).toBeCalledTimes(1)
    })
  })

  it("has the disabled attribute applied if the disabled prop is true", () => {
    const { container } = renderRadio({
      id: "testId",
      name: "someRadioName",
      disabled: true,
      value: "radio-1",
    })
    expect(container.querySelector("[disabled]")).toBeTruthy()
  })

  it("has a true .checked property when the selectedStatus is true", () => {
    const { container } = renderRadio({
      id: "testId",
      name: "someRadioName",
      selectedStatus: true,
      value: "radio-1",
    })
    expect(container.querySelector("input")!.checked).toBeTruthy()
  })

  it("can be both checked and disabled at the same time", () => {
    const { container } = renderRadio({
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
    const { container } = renderRadio({
      id: "testId",
      name: "someRadioName",
      value: "radio-1",
    })
    expect(container.querySelector("input")!.checked).toBeFalsy()
  })

  it("renders an `id` attribute", () => {
    const { container } = renderRadio()
    expect(
      container.querySelector(`[id="${defaultRadioProps.id}"]`)
    ).toBeTruthy()
  })

  it("renders a `name` attribute", () => {
    const { container } = renderRadio()
    expect(
      container.querySelector(`[name="${defaultRadioProps.name}"]`)
    ).toBeTruthy()
  })

  it("renders a `data-automation-id` attribute", () => {
    const { container } = renderRadio()
    expect(
      container.querySelector(
        `[data-automation-id="${defaultRadioProps.automationId}"]`
      )
    ).toBeTruthy()
  })

  it("renders a `value` attribute", () => {
    const { container } = renderRadio()
    expect(
      container.querySelector(`[value="${defaultRadioProps.value}"]`)
    ).toBeTruthy()
  })
})
