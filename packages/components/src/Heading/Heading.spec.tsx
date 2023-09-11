import * as React from "react"
import { render } from "@testing-library/react"
import { AllowedHeadingTags, Heading, HeadingVariants } from "./"

describe("<Heading />", () => {
  it("renders the correct classes", () => {
    const headingMock = render(<Heading variant="display-0">Example</Heading>)
    const headingClasslist = headingMock.getByText("Example").classList
    expect(headingClasslist).toContain("heading")
    expect(headingClasslist).toContain("display-0")
    expect(headingClasslist).toContain("large")
  })

  it("adds a .small class instead of .large if a Heading 3 is used", () => {
    const headingMock = render(
      <Heading variant="heading-3" tag="div">
        Example
      </Heading>
    )
    expect(headingMock.getByText("Example").classList).toContain("small")
    expect(headingMock.getByText("Example").classList).not.toContain("large")
  })

  it("adds a .dark-reduced-opacity class if the color prop is set to that", () => {
    const headingMock = render(
      <Heading variant="heading-3" color="dark-reduced-opacity">
        Example
      </Heading>
    )
    expect(headingMock.getByText("Example").classList).toContain(
      "dark-reduced-opacity"
    )
  })

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
        expect(headingMock.baseElement).toMatchSnapshot()
      })
    })
  })

  it("allows consumers to provide a className", () => {
    const { getByText } = render(
      <Heading variant="heading-4" classNameOverride="example-classname">
        Example
      </Heading>
    )
    expect(getByText("Example").classList).toContain("example-classname")
  })
})
