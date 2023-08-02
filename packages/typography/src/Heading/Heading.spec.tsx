import React from "react"
import { render } from "@testing-library/react"
import { AllowedHeadingTags, Heading, HeadingVariants } from "./"

describe("<Heading />", () => {
  it("changes rendered HTML element when passed tag", () => {
    const headingMock = render(
      <Heading variant="display-0" tag="div">
        Example
      </Heading>
    )
    expect(headingMock.getByText("Example").tagName).toBe("DIV")
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
    type TestObject = { variant: HeadingVariants; el: AllowedHeadingTags }
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
      })
    })
  })

  it("allows consumers to provide a className", () => {
    const { getByText } = render(
      <Heading variant="heading-4" classNameOverride="example-classname">
        Example
      </Heading>
    )
    expect(getByText("Example").classList.contains("example-classname")).toBe(
      true
    )
  })
})
