import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import { AllowedTags, Paragraph, ParagraphVariants } from "./index"

afterEach(cleanup)

describe("<Paragraph />", () => {
  describe("renders the correct classes", () => {
    const testCases: ParagraphVariants[] = [
      "intro-lede",
      "body",
      "small",
      "extra-small",
    ]

    testCases.forEach(variant => {
      it(`renders the correct element for <Paragraph variant={${variant}} />`, () => {
        const paragraphMock = render(
          <Paragraph variant={variant} tag="div">
            Example
          </Paragraph>
        )
        const paragraphClasslist = paragraphMock.getByText("Example").classList
        expect(paragraphClasslist).toContain("paragraph")
        expect(paragraphClasslist).toContain(variant)
      })
    })
  })

  describe("changes rendered HTML element when passed tag", () => {
    const testCases: ParagraphVariants[] = [
      "intro-lede",
      "body",
      "small",
      "extra-small",
    ]

    testCases.forEach(variant => {
      it(`renders the correct element for <Paragraph variant={${variant}} />`, () => {
        const paragraphMock = render(
          <Paragraph variant={variant} tag="div">
            Example
          </Paragraph>
        )
        expect(paragraphMock.getByText("Example").tagName).toBe("DIV")
      })
    })
  })

  it("passes through data attributes", () => {
    const { container } = render(
      <Paragraph variant="intro-lede" data-automation-id="test-id">
        Example
      </Paragraph>
    )
    expect(
      container.querySelector('[data-automation-id="test-id"]')
    ).not.toBeNull()
  })

  describe("defaults to the correct HTML element", () => {
    type TestObject = { variant: ParagraphVariants; el: AllowedTags }
    const testCases: TestObject[] = [
      { variant: "intro-lede", el: "p" },
      { variant: "body", el: "p" },
      { variant: "small", el: "p" },
      { variant: "extra-small", el: "p" },
    ]

    testCases.forEach(({ variant, el }) => {
      it(`renders the correct element for <Paragraph variant={${variant}} />`, () => {
        const paragraphMock = render(
          <Paragraph variant={variant}>Example</Paragraph>
        )
        expect(paragraphMock.getByText("Example").tagName.toLowerCase()).toBe(
          el
        )
        expect(paragraphMock.baseElement).toMatchSnapshot()
      })
    })
  })

  it("allows consumers to provide a className", () => {
    const { getByText } = render(
      <Paragraph
        variant="body"
        classNameAndIHaveSpokenToDST="example-classname"
      >
        Example
      </Paragraph>
    )
    expect(getByText("Example").classList).toContain("example-classname")
  })
})
