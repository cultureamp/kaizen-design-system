import * as React from "react"
import { cleanup, render, screen, fireEvent } from "@testing-library/react"
import Dropdown from "./Dropdown"

afterEach(cleanup)

const svgIcon = {
  id: "my-icon",
  viewBox: "0 0 20 20",
}

describe("<Dropdown />", () => {
  it("renders default view", () => {
    const { container } = render(<Dropdown />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders drop down with icon", () => {
    const { container } = render(<Dropdown icon={svgIcon} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders drop down with icon and label", () => {
    const { container } = render(<Dropdown icon={svgIcon} label="add" />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders drop down with only label", () => {
    const { container } = render(<Dropdown label="add" />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders control action dropdown", () => {
    const { container } = render(
      <Dropdown icon={svgIcon} label="add" controlAction />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders reversed color control action dropdown", () => {
    const { container } = render(
      <Dropdown icon={svgIcon} label="add" controlAction reversedColor />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it("shows dropdown menu when clicking on the button", () => {
    const { container } = render(
      <Dropdown>
        <div>Item</div>
      </Dropdown>
    )

    const button = container.querySelector(".dropdownButton")
    button && fireEvent.click(button)

    expect(screen.queryByText("Item")).toBeTruthy()
  })
})
