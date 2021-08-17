import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import * as React from "react"
import { ToggledStatus, ToggleSwitchProps } from "./ToggleSwitch"
import { ToggleSwitch } from "."
import "@testing-library/jest-dom"

afterEach(cleanup)

const defaultToggleSwitchProps = {
  id: "someToggleSwitchId",
  onToggle: jest.fn(),
  toggledStatus: ToggledStatus.OFF,
}

const renderToggleSwitch = (props?: ToggleSwitchProps) => {
  const mergedToggleSwitchProps = { ...defaultToggleSwitchProps, ...props }

  return render(<ToggleSwitch {...mergedToggleSwitchProps} />)
}

describe("<ToggleSwitch />", () => {
  it("should call onToggle when toggle is changed", () => {
    renderToggleSwitch()

    fireEvent.click(screen.getByRole("checkbox"))
    expect(defaultToggleSwitchProps.onToggle).toHaveBeenCalledTimes(1)
  })

  it("should show toggledStatus when passed through", async () => {
    renderToggleSwitch()
    expect(defaultToggleSwitchProps.toggledStatus).toEqual("off")
  })

  it("has disabled attribute when disabled prop passed in", async () => {
    const { container } = renderToggleSwitch({ disabled: true })
    expect(container.querySelector("[disabled]")).toBeTruthy()
  })
})
