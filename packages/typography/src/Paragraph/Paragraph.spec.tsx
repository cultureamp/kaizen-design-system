import React from "react"
import { render } from "@testing-library/react"
import { AllowedParagraphTags, Paragraph, ParagraphVariants } from "./"

describe("<Paragraph />", () => {
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
    type TestObject = { variant: ParagraphVariants; el: AllowedParagraphTags }
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
      })
    })
  })

  it("allows consumers to provide a className", () => {
    const { getByText } = render(
      <Paragraph variant="body" classNameOverride="example-classname">
        Example
      </Paragraph>
    )
    expect(getByText("Example").classList.contains("example-classname")).toBe(
      true
    )
  })
})
