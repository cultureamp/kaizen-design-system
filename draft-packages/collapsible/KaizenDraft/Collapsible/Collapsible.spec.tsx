import { render } from "@testing-library/react"
import { fireEvent, configure, queryByTestId } from "@testing-library/dom"
import * as React from "react"
import { Collapsible, CollapsibleGroup } from ".."

configure({ testIdAttribute: "data-automation-id" })

it("renders closed by default", () => {
  const { getByTestId } = render(
    <Collapsible id="1" title="First panel">
      First panel content
    </Collapsible>
  )

  const section = getByTestId("collapsible-section-1")

  expect(section.style.height).toEqual("0px")
})

it("renders open when the open prop is specified", () => {
  const { getByTestId } = render(
    <Collapsible id="1" open title="First panel">
      First panel content
    </Collapsible>
  )

  const section = getByTestId("collapsible-section-1")

  expect(section.style.height).toEqual("auto")
})

it("includes the 'separated' class on containers when the 'separated' prop is specified", () => {
  const { getByTestId } = render(
    <CollapsibleGroup separated>
      <Collapsible id="1" title="First panel">
        First panel content
      </Collapsible>
      <Collapsible id="2" title="Second panel">
        Second panel content
      </Collapsible>
    </CollapsibleGroup>
  )

  const collapsibleContainer = getByTestId("collapsible-container-2")

  expect(collapsibleContainer.classList.contains("separated")).toBeTruthy()
})

it("includes the 'sticky' class on buttons when the 'sticky' prop is specified", () => {
  const { getByTestId } = render(
    <CollapsibleGroup sticky={{ top: "20px" }}>
      <Collapsible id="1" title="First panel">
        First panel content
      </Collapsible>
      <Collapsible id="2" title="Second panel">
        Second panel content
      </Collapsible>
    </CollapsibleGroup>
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

  const button = getByTestId("collapsible-button-1")
  const section = getByTestId("collapsible-section-1")

  fireEvent.click(button)
  expect(section.style.height).toEqual("0px")

  // TODO: for some reason trying to open a closed section isn't working here
  // fireEvent.click(button)
  // expect(section.style.height).toEqual("auto")
})

it("only toggles the height of the clicked panel in a group", () => {
  const { getByTestId } = render(
    <CollapsibleGroup>
      <Collapsible id="1" open title="First panel">
        First panel content
      </Collapsible>
      <Collapsible id="2" open title="Second panel">
        Second panel content
      </Collapsible>
    </CollapsibleGroup>
  )

  const button = getByTestId("collapsible-button-1")
  const section = getByTestId("collapsible-section-2")

  fireEvent.click(button)
  expect(section.style.height).toEqual("auto")
})

it("gives precedence to renderHeader over title", () => {
  const { container, getByTestId, getByText } = render(
    <Collapsible
      id="1"
      open
      title="Should not be rendered"
      renderHeader={() => <div>This title should be rendered</div>}
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
  const { container, getByTestId } = render(
    <Collapsible id="1" title="Title" lazyLoad>
      <div data-automation-id="lazy-load-content">First panel content</div>
    </Collapsible>
  )

  expect(
    queryByTestId(container as HTMLElement, "lazy-load-content")
  ).toBeNull()
})

it("runs the onToggle callback", () => {
  const onToggle = jest.fn()

  const { getByTestId } = render(
    <Collapsible id="1" open title="First panel" onToggle={onToggle}>
      First panel content
    </Collapsible>
  )

  const button = getByTestId("collapsible-button-1")

  fireEvent.click(button)
  expect(onToggle).toHaveBeenCalledTimes(1)
  expect(onToggle).toHaveBeenCalledWith(false, "1")

  fireEvent.click(button)
  expect(onToggle).toHaveBeenCalledTimes(2)
  expect(onToggle).toHaveBeenCalledWith(true, "1")
})

it("respects controlled mode (stays open after click)", () => {
  const { getByTestId } = render(
    <Collapsible id="1" open title="First panel" controlled>
      First panel content
    </Collapsible>
  )

  const button = getByTestId("collapsible-button-1")
  const section = getByTestId("collapsible-section-1")

  fireEvent.click(button)
  expect(section.style.height).toEqual("auto")
})

it("clear variant has correct class", () => {
  const { getByTestId } = render(
    <CollapsibleGroup>
      <Collapsible variant="clear" id="1" open title="First panel">
        First panel content
      </Collapsible>
      <Collapsible variant="clear" id="2" title="Second panel">
        Second panel content
      </Collapsible>
    </CollapsibleGroup>
  )

  const collapsibleContainer = getByTestId("collapsible-header-1")

  expect(collapsibleContainer.classList.contains("clearVariant")).toBeTruthy()
})

it("default variant has correct class", () => {
  const { getByTestId } = render(
    <CollapsibleGroup>
      <Collapsible id="1" open title="First panel">
        First panel content
      </Collapsible>
      <Collapsible id="2" title="Second panel">
        Second panel content
      </Collapsible>
    </CollapsibleGroup>
  )

  const collapsibleContainer = getByTestId("collapsible-header-1")

  expect(collapsibleContainer.classList.contains("defaultVariant")).toBeTruthy()
})
