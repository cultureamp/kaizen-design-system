import { Button } from "@kaizen/draft-button"
import { cleanup, fireEvent, render } from "@testing-library/react"
import * as React from "react"
import Menu from "./Menu"

afterEach(cleanup)

const svgIcon = {
  id: "my-icon",
  viewBox: "0 0 20 20",
}

describe("Dropdown", () => {
  test("renders default view", () => {
    const { container } = render(
      <Menu button={<Button label="Button"></Button>} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  test("shows menu when clicking on the button", () => {
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
