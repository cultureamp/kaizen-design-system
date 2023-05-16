import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ToggledStatus, ToggleSwitchProps } from "./ToggleSwitch"
import { ToggleSwitch } from "."

const user = userEvent.setup()

const defaultToggleSwitchProps = {
  id: "someToggleSwitchId",
  onToggle: jest.fn(),
}

const renderToggleSwitch = (
  props?: ToggleSwitchProps
): ReturnType<typeof render> => {
  const mergedToggleSwitchProps = { ...defaultToggleSwitchProps, ...props }

  return render(<ToggleSwitch {...mergedToggleSwitchProps} />)
}

describe("<ToggleSwitch />", () => {
  it("calls onToggle when toggle is changed", async () => {
    renderToggleSwitch()

    await user.click(screen.getByRole("checkbox"))
    await waitFor(() => {
      expect(defaultToggleSwitchProps.onToggle).toHaveBeenCalledTimes(1)
    })
  })

  it("shows toggledStatus class when status is passed through", async () => {
    const { container } = renderToggleSwitch({
      toggledStatus: ToggledStatus.ON,
    })
    expect(container.querySelector(".on")).toBeTruthy()
  })

  it("shows toggledStatus class when status is passed through", async () => {
    const { container } = renderToggleSwitch({
      toggledStatus: ToggledStatus.OFF,
    })
    expect(container.querySelector(".off")).toBeTruthy()
  })

  it("has disabled attribute when disabled prop passed in", async () => {
    const { container } = renderToggleSwitch({ disabled: true })
    expect(container.querySelector("[disabled]")).toBeTruthy()
  })
})
