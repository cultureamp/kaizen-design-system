import { Button } from "@kaizen/draft-button"
import { fireEvent } from "@testing-library/dom"
import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import Menu from "./Menu"

afterEach(cleanup)

describe("Dropdown", () => {
  it("renders default view", () => {
    const { container } = render(
      <Menu button={<Button label="Button"></Button>}>
        <div>Item</div>
      </Menu>
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it("shows menu when clicking on the button", () => {
    const { container, queryByText } = render(
      <Menu button={<Button label="Button"></Button>}>
        <div>Item</div>
      </Menu>
    )

    expect(queryByText("Item")).toBeFalsy()
    const button = container.querySelector("button")
    button && fireEvent.click(button)
    expect(queryByText("Item")).toBeTruthy()
  })
})
