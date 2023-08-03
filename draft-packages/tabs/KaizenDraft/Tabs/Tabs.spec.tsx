import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Tabs } from "."
import styles from "./Tabs.module.scss"

const user = userEvent.setup()

describe("<Tabs />", () => {
  it("renders an active tab", () => {
    const tabs = [{ label: "One", active: true }, { label: "Two" }]
    const { getByText } = render(<Tabs tabs={tabs} />)
    expect(
      getByText("One").classList.contains(styles.horizontalTabActive)
    ).toBe(true)
  })

  it("renders a disabled tab", () => {
    const tabs = [{ label: "One", disabled: true }, { label: "Two" }]
    const { getByText } = render(<Tabs tabs={tabs} />)
    expect(
      getByText("One").classList.contains(styles.horizontalTabDisabled)
    ).toBe(true)
  })

  it("renders a tab with an onClick", async () => {
    const onClick = vi.fn()
    const tabs = [{ label: "One", onClick }, { label: "Two" }]
    const { getByText } = render(<Tabs tabs={tabs} />)
    await user.click(getByText("One"))
    await waitFor(() => {
      expect(onClick).toHaveBeenCalled()
    })
  })

  it("renders a tab with a href", () => {
    const href = "//example"
    const tabs = [{ label: "One", href }, { label: "Two" }]
    const { getByText } = render(<Tabs tabs={tabs} />)
    expect(getByText("One").getAttribute("href")).toBe(href)
  })

  describe("when using a custom tab renderer", () => {
    it("passes in the right arguments to the a custom tab renderer", () => {
      const tabs = [{ label: "One" }]
      const { baseElement } = render(
        <Tabs
          tabs={tabs}
          renderTab={({
            // eslint-disable-next-line @typescript-eslint/no-shadow
            tab,
            tabClassName,
            activeTabClassName,
            disabledTabClassName,
          }): JSX.Element => (
            <div key={tab.label}>
              <span>{tab.label}</span>
              <span>{tabClassName}</span>
              <span>{activeTabClassName}</span>
              <span>{disabledTabClassName}</span>
            </div>
          )}
        />
      )
      const tab = baseElement.firstChild as HTMLDivElement
      const spans = tab.querySelectorAll("span")

      expect(spans[0].innerHTML).toBe("One")
      expect(spans[1].innerHTML).toBe(styles.horizontalTab)
      expect(spans[2].innerHTML).toBe(styles.horizontalTabActive)
      expect(spans[3].innerHTML).toBe(styles.horizontalTabDisabled)
    })
  })
})
