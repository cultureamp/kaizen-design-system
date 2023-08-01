import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Dropdown from "./Dropdown"

const user = userEvent.setup()

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
