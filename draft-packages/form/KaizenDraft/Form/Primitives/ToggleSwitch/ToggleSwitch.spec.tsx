import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import * as React from "react"
import { ToggleSwitchProps } from "./ToggleSwitch"
import { ToggleSwitch } from "."

afterEach(cleanup)

const defaultToggleSwitchProps = {
  id: "someToggleSwitchId",
  onToggle: jest.fn(),
}

const renderToggleSwitch = (props?: ToggleSwitchProps) => {
  const mergedToggleSwitchProps = { ...defaultToggleSwitchProps, ...props }

  return render(<ToggleSwitch {...mergedToggleSwitchProps} />)
}

describe("<ToggleSwitch />", () => {
  it("should render an `data-automation-id` attribute", () => {
    const automationId = "someToggleSwitchAutomationId"

    const { container } = renderToggleSwitch({ automationId })
    expect(
      container.querySelector(`[data-automation-id="${automationId}"]`)
    ).toBeTruthy()
  })

  it("should render an `id` attribute", () => {
    const { container } = renderToggleSwitch()
    expect(
      container.querySelector(`[id="${defaultToggleSwitchProps.id}"]`)
    ).toBeTruthy()
  })

  it("should call onToggle when toggle is changed", () => {
    renderToggleSwitch()

    fireEvent.click(screen.getByRole("checkbox"))
    expect(defaultToggleSwitchProps.onToggle).toHaveBeenCalledTimes(1)
  })
})
