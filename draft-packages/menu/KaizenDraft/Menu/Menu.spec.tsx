import { Button } from "@kaizen/button"
import { fireEvent } from "@testing-library/dom"
import { render, screen, waitFor } from "@testing-library/react"
import * as React from "react"
import Menu from "./Menu"

describe("Dropdown", () => {
  it("renders default view", () => {
    const { container } = render(
      <Menu button={<Button label="Button"></Button>}>
        <div>Item</div>
      </Menu>
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it("shows menu when clicking on the button", async () => {
    render(
      <Menu button={<Button label="Button"></Button>}>
        <div>Item</div>
      </Menu>
    )

    expect(screen.queryByText("Item")).toBeFalsy()
    const button = screen.getByText("Button")
    fireEvent.click(button)
    await waitFor(() => {
      expect(screen.getByText("Item")).toBeInTheDocument()
    })
  })

  it("shows menu & handles onClick set by the consumer when clicking on the button", async () => {
    const handleClick = render(<div>Button clicked</div>)
    render(
      <Menu button={<Button label="Button" onClick={() => handleClick} />}>
        <div>Item</div>
      </Menu>
    )
    expect(screen.queryByText("Item")).toBeFalsy()
    const button = screen.getByText("Button")
    fireEvent.click(button)
    await waitFor(() => {
      expect(screen.getByText("Button clicked")).toBeInTheDocument()
      expect(screen.getByText("Item")).toBeInTheDocument()
    })
  })
})
