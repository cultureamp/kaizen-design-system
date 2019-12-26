import {
  cleanup,
  configure,
  fireEvent,
  getNodeText,
  queryByTestId,
  render,
} from "@testing-library/react"
import * as React from "react"
import { Collapsible, CollapsibleGroup } from "./"

configure({ testIdAttribute: "data-automation-id" })

afterEach(cleanup)

it("matches snapshot with everything enabled", () => {
  const { container } = render(
    <CollapsibleGroup
      separated
      sticky={{ top: "20px" }}
      noSectionPadding
      automationId="some-bogus-test-id"
    >
      <Collapsible
        id="1"
        title="First panel w/ custom header"
        renderHeader={title => <div>{title}</div>}
      >
        First panel content
      </Collapsible>
      <Collapsible
        id="2"
        open
        title="Second panel"
        automationId="another-bogus-test-id"
      >
        Second panel content
      </Collapsible>
    </CollapsibleGroup>
  )

  expect(container).toMatchSnapshot()
})

it("renders closed by default", () => {
  const { getByTestId } = render(
    <Collapsible id="1" automationId="collapsible-1" title="First panel">
      First panel content
    </Collapsible>
  )

  const section = getByTestId("collapsible-1-section")

  expect(section.style.height).toEqual("0px")
})

it("renders open when the open prop is specified", () => {
  const { getByTestId } = render(
    <Collapsible id="1" automationId="collapsible-1" open title="First panel">
      First panel content
    </Collapsible>
  )

  const section = getByTestId("collapsible-1-section")

  expect(section.style.height).toEqual("auto")
})

it("includes the 'separated' class on containers when the 'separated' prop is specified", () => {
  const { getByTestId } = render(
    <CollapsibleGroup separated>
      <Collapsible id="1" title="First panel">
        First panel content
      </Collapsible>
      <Collapsible id="2" automationId="collapsible-2" title="Second panel">
        Second panel content
      </Collapsible>
    </CollapsibleGroup>
  )

  const collapsibleContainer = getByTestId("collapsible-2")

  expect(collapsibleContainer.classList.contains("separated")).toBeTruthy()
})

it("includes the 'sticky' class on buttons when the 'sticky' prop is specified", () => {
  const { getByTestId } = render(
    <CollapsibleGroup sticky={{ top: "20px" }}>
      <Collapsible id="1" automationId="collapsible-1" title="First panel">
        First panel content
      </Collapsible>
      <Collapsible id="2" automationId="collapsible-2" title="Second panel">
        Second panel content
      </Collapsible>
    </CollapsibleGroup>
  )

  const collapsibleContainer = getByTestId("collapsible-1-button")

  expect(collapsibleContainer.classList.contains("sticky")).toBeTruthy()
})

it("toggles the height of the section on click of the button", async () => {
  const { getByTestId } = render(
    <Collapsible id="1" automationId="collapsible-1" open title="First panel">
      First panel content
    </Collapsible>
  )

  const button = getByTestId("collapsible-1-button")
  const section = getByTestId("collapsible-1-section")

  fireEvent.click(button)
  expect(section.style.height).toEqual("0px")

  // TODO: for some reason trying to open a closed section isn't working here
  // fireEvent.click(button)
  // expect(section.style.height).toEqual("auto")
})

it("only toggles the height of the clicked panel in a group", () => {
  const { getByTestId } = render(
    <CollapsibleGroup>
      <Collapsible id="1" automationId="collapsible-1" open title="First panel">
        First panel content
      </Collapsible>
      <Collapsible
        id="2"
        automationId="collapsible-2"
        open
        title="Second panel"
      >
        Second panel content
      </Collapsible>
    </CollapsibleGroup>
  )

  const button = getByTestId("collapsible-1-button")
  const section = getByTestId("collapsible-2-section")

  fireEvent.click(button)
  expect(section.style.height).toEqual("auto")
})

it("gives precedence to renderHeader over title", () => {
  const { container, getByTestId } = render(
    <Collapsible
      id="1"
      open
      title="Should not be rendered"
      automationId="collapsible-1"
      renderHeader={() => <div>This title should be rendered</div>}
    >
      First panel content
    </Collapsible>
  )

  const titleText = getByTestId("collapsible-1-button").querySelector("div")

  expect(titleText && getNodeText(titleText)).toEqual(
    "This title should be rendered"
  )
  expect(queryByTestId(container, "collapsible-1-button-title")).toBeNull()
})

it(`doesn't render section content when lazyLoad is enabled`, () => {
  const { container } = render(
    <Collapsible id="1" title="Title" lazyLoad>
      <div data-automation-id="lazy-load-content">First panel content</div>
    </Collapsible>
  )

  expect(queryByTestId(container, "lazy-load-content")).toBeNull()
})

it("runs the onToggle callback", () => {
  const onToggle = jest.fn()

  const { getByTestId } = render(
    <Collapsible
      id="1"
      open
      title="First panel"
      automationId="collapsible-1"
      onToggle={onToggle}
    >
      First panel content
    </Collapsible>
  )

  const button = getByTestId("collapsible-1-button")

  fireEvent.click(button)
  expect(onToggle).toHaveBeenCalledTimes(1)
  expect(onToggle).toHaveBeenCalledWith(false, "1")

  fireEvent.click(button)
  expect(onToggle).toHaveBeenCalledTimes(2)
  expect(onToggle).toHaveBeenCalledWith(true, "1")
})

it("respects controlled mode (stays open after click)", () => {
  const { getByTestId } = render(
    <Collapsible
      id="1"
      open
      title="First panel"
      automationId="collapsible-1"
      controlled
    >
      First panel content
    </Collapsible>
  )

  const button = getByTestId("collapsible-1-button")
  const section = getByTestId("collapsible-1-section")

  fireEvent.click(button)
  expect(section.style.height).toEqual("auto")
})
