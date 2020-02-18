import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import { AllowedTags } from "../types"
import { Heading, HeadingLevel } from "./index"

afterEach(cleanup)

describe("<Heading />", () => {
  it("renders the correct classes", () => {
    const headingMock = render(<Heading level="0">Example</Heading>)
    const headingClasslist = headingMock.getByText("Example").classList

    expect(headingClasslist).toContain("heading")
    expect(headingClasslist).toContain("heading-0")
  })

  it("changes rendered HTML element when passed tag", () => {
    const headingMock = render(
      <Heading level="0" tag="div">
        Example
      </Heading>
    )

    expect(headingMock.getByText("Example").tagName).toBe("DIV")
  })

  it("passes through aria labels and roles", () => {
    const { container } = render(
      <Heading level="0" tag="div" role="heading" aria-level={1}>
        Example
      </Heading>
    )
    expect(container.querySelector('[aria-level="1"]')).not.toBeNull()
    expect(container.querySelector('[role="heading"]')).not.toBeNull()
  })

  it("passes through data attributes", () => {
    const { container } = render(
      <Heading level="0" data-automation-id="test-id">
        Example
      </Heading>
    )
    expect(
      container.querySelector('[data-automation-id="test-id"]')
    ).not.toBeNull()
  })

  describe("defaults to the correct HTML element", () => {
    type TestObject = { scale: HeadingLevel; el: keyof AllowedTags }
    const testCases: TestObject[] = [
      { scale: "0", el: "h1" },
      { scale: "1", el: "h1" },
      { scale: "2", el: "h2" },
      { scale: "3", el: "h3" },
      { scale: "4", el: "h4" },
      { scale: "5", el: "h5" },
      { scale: "6", el: "h6" },
    ]

    testCases.forEach(({ scale, el }) => {
      it(`renders the correct element for <Heading scale={${scale}} />`, () => {
        const headingMock = render(<Heading level={scale}>Example</Heading>)
        expect(headingMock.getByText("Example").tagName.toLowerCase()).toBe(el)
        expect(headingMock).toMatchSnapshot()
      })
    })
  })
})
