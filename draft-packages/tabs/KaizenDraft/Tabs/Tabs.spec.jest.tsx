import React from "react"
import { render } from "@testing-library/react"
import { Tabs } from "."

describe("<Tabs /> - snapshots", () => {
  it("renders basic tabs", () => {
    const tabs = [{ label: "One" }, { label: "Two" }]
    const { container } = render(<Tabs tabs={tabs} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders an active tab", () => {
    const tabs = [{ label: "One", active: true }, { label: "Two" }]
    const { container } = render(<Tabs tabs={tabs} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders a disabled tab", () => {
    const tabs = [{ label: "One", disabled: true }, { label: "Two" }]
    const { container } = render(<Tabs tabs={tabs} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders a tab with an onClick", async () => {
    const onClick = jest.fn()
    const tabs = [{ label: "One", onClick }, { label: "Two" }]
    const { container } = render(<Tabs tabs={tabs} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders a tab with a href", () => {
    const href = "//example"
    const tabs = [{ label: "One", href }, { label: "Two" }]
    const { container } = render(<Tabs tabs={tabs} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
