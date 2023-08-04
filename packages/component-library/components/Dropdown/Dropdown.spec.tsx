import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Dropdown from "./Dropdown"

const user = userEvent.setup()

describe("<Dropdown />", () => {
  it("shows dropdown menu when clicking on the button", async () => {
    const { getByRole, getByText } = render(
      <Dropdown>
        <div>Item</div>
      </Dropdown>
    )

    const button = getByRole("button")
    await user.click(button)

    await waitFor(() => {
      expect(getByText("Item")).toBeVisible()
    })
  })
})
