import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ToggleSwitch } from "."

const user = userEvent.setup()
const onToggle = jest.fn()

describe("<ToggleSwitch />", () => {
  it("calls onToggle when toggle is changed", async () => {
    const { getByRole } = render(<ToggleSwitch onToggle={onToggle} />)

    await user.click(getByRole("checkbox"))
    await waitFor(() => {
      expect(onToggle).toHaveBeenCalledTimes(1)
    })
  })
})
