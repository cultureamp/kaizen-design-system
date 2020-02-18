import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import { AllowedTags, Heading, HeadingVariants } from "./index"

afterEach(cleanup)

describe("<Heading />", () => {
  it("renders the correct classes", () => {
    const headingMock = render(<Heading variant="display-0">Example</Heading>)
    const headingClasslist = headingMock.getByText("Example").classList
    expect(headingClasslist).toContain("heading")
    expect(headingClasslist).toContain("heading-0")
  })

  it("changes rendered HTML element when passed tag", () => {
    const headingMock = render(
      <Heading variant="display-0" tag="div">
        Example
      </Heading>
    )
    expect(headingMock.getByText("Example").tagName).toBe("DIV")
  })

  it("passes through aria labels and roles", () => {
    const { container } = render(
      <Heading variant="display-0" tag="div" role="heading" aria-level={1}>
        Example
      </Heading>
    )
    expect(container.querySelector('[aria-variant="1"]')).not.toBeNull()
    expect(container.querySelector('[role="heading"]')).not.toBeNull()
  })

  it("passes through data attributes", () => {
    const { container } = render(
      <Heading variant="display-0" data-automation-id="test-id">
        Example
      </Heading>
    )
    expect(
      container.querySelector('[data-automation-id="test-id"]')
    ).not.toBeNull()
  })

  describe("defaults to the correct HTML element", () => {
    type TestObject = { variant: HeadingVariants; el: AllowedTags }
    const testCases: TestObject[] = [
      { variant: "display-0", el: "h1" },
      { variant: "heading-1", el: "h1" },
      { variant: "heading-2", el: "h2" },
      { variant: "heading-3", el: "h3" },
      { variant: "heading-4", el: "h4" },
      { variant: "heading-5", el: "h5" },
      { variant: "heading-6", el: "h6" },
    ]

    testCases.forEach(({ variant, el }) => {
      it(`renders the correct element for <Heading variant={${variant}} />`, () => {
        const headingMock = render(<Heading variant={variant}>Example</Heading>)
        expect(headingMock.getByText("Example").tagName.toLowerCase()).toBe(el)
        expect(headingMock.baseElement).toMatchSnapshot()
      })
    })
  })
})
