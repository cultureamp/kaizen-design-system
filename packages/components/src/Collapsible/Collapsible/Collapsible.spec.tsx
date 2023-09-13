import React from "react"
import { queryByTestId, render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Collapsible } from "./Collapsible"

const user = userEvent.setup()

describe("<Collapsible />", () => {
  it("includes the 'sticky' class on buttons when the 'sticky' prop is specified", () => {
    const { getByTestId } = render(
      <Collapsible id="1" title="First panel" sticky={{ top: "0px" }}>
        First panel content
      </Collapsible>
    )

    const collapsibleContainer = getByTestId("collapsible-header-1")

    expect(collapsibleContainer.classList.contains("sticky")).toBeTruthy()
  })

  it("toggles the height of the section on click of the button", async () => {
    const { getByTestId } = render(
      <Collapsible id="1" open title="First panel">
        First panel content
      </Collapsible>
    )

    const collapsible = getByTestId("collapsible-header-1")
    const section = getByTestId("collapsible-section-1")

    await user.click(collapsible)
    await waitFor(() => {
      expect(section.style.height).toEqual("0px")
    })

    await user.click(collapsible)
    await waitFor(() => {
      expect(section.style.height).toEqual("auto")
    })
  })

  it("gives precedence to renderHeader over title", () => {
    const { container, getByTestId } = render(
      <Collapsible
        id="1"
        open
        title="Should not be rendered"
        renderHeader={(): JSX.Element => (
          <div>This title should be rendered</div>
        )}
      >
        First panel content
      </Collapsible>
    )

    const titleText = getByTestId("collapsible-header-1").querySelector("div")

    expect(titleText).toHaveTextContent("This title should be rendered")
    expect(
      queryByTestId(container as HTMLElement, "collapsible-button-title-1")
    ).toBeNull()
  })

  it("doesn't render section content when lazyLoad is enabled", () => {
    const { container } = render(
      <Collapsible id="1" title="Title" lazyLoad>
        <div data-testid="lazy-load-content">First panel content</div>
      </Collapsible>
    )

    expect(
      queryByTestId(container as HTMLElement, "lazy-load-content")
    ).toBeNull()
  })

  it("runs the onToggle callback", async () => {
    const onToggle = jest.fn()

    const { getByTestId } = render(
      <Collapsible id="1" open title="First panel" onToggle={onToggle}>
        First panel content
      </Collapsible>
    )

    const collapsible = getByTestId("collapsible-header-1")

    await user.click(collapsible)
    await waitFor(() => {
      expect(onToggle).toHaveBeenCalledTimes(1)
      expect(onToggle).toHaveBeenCalledWith(false, "1")
    })

    await user.click(collapsible)
    await waitFor(() => {
      expect(onToggle).toHaveBeenCalledTimes(2)
      expect(onToggle).toHaveBeenCalledWith(true, "1")
    })
  })

  it("respects controlled mode (stays open after click)", async () => {
    const { getByTestId } = render(
      <Collapsible id="1" open title="First panel" controlled>
        First panel content
      </Collapsible>
    )

    const collapsible = getByTestId("collapsible-header-1")
    const section = getByTestId("collapsible-section-1")

    await user.click(collapsible)
    await waitFor(() => {
      expect(section.style.height).toEqual("auto")
    })
  })
})
