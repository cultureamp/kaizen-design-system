import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "@kaizen/button"
import { Menu } from "./Menu"

const user = userEvent.setup()

describe("Dropdown", () => {
  it("shows menu when clicking on the button", async () => {
    render(
      <Menu button={<Button label="Button"></Button>}>
        <div>Item</div>
      </Menu>
    )

    expect(screen.queryByText("Item")).toBeFalsy()
    const button = screen.getByText("Button")
    await user.click(button)
    await waitFor(() => {
      expect(screen.getByText("Item")).toBeInTheDocument()
    })
  })

  it("shows menu & handles onClick set by the consumer when clicking on the button", async () => {
    const onButtonClick = jest.fn<[], void>()

    render(
      <Menu button={<Button label="Button" onClick={onButtonClick} />}>
        <div>Item</div>
      </Menu>
    )

    expect(screen.queryByText("Item")).not.toBeInTheDocument()

    const button = screen.getByText("Button")
    await user.click(button)

    await waitFor(() => {
      expect(screen.getByText("Item")).toBeVisible()
      expect(onButtonClick).toBeCalled()
    })
  })
  it("shows menu & handles onMouseDown set by the consumer when mousing down on the button", async () => {
    const onMouseDown = jest.fn<[], void>()

    render(
      <Menu button={<Button label="Button" onMouseDown={onMouseDown} />}>
        <div>Item</div>
      </Menu>
    )

    expect(screen.queryByText("Item")).not.toBeInTheDocument()

    const button = screen.getByText("Button")
    await user.click(button)

    await waitFor(() => {
      expect(screen.getByText("Item")).toBeVisible()
      expect(onMouseDown).toBeCalled()
    })
  })
})
