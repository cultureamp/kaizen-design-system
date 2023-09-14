import * as React from "react"
import { render } from "@testing-library/react"
import { AllowedTextColors, AllowedTextTags, Text, TextVariants } from "./"

describe("<Text />", () => {
  describe("renders the correct variant classes", () => {
    const testCases: TextVariants[] = [
      "intro-lede",
      "body",
      "small",
      "extra-small",
    ]

    testCases.forEach(variant => {
      it(`renders the correct element for <Text variant={${variant}} />`, () => {
        const textMock = render(
          <Text variant={variant} tag="div">
            Example
          </Text>
        )
        const textClasslist = textMock.getByText("Example").classList
        expect(textClasslist).toContain("text")
        expect(textClasslist).toContain(variant)
      })
    })
  })

  describe("changes rendered HTML element when passed tag", () => {
    const testCases: TextVariants[] = [
      "intro-lede",
      "body",
      "small",
      "extra-small",
    ]

    testCases.forEach(variant => {
      it(`renders the correct element for <Text variant={${variant}} />`, () => {
        const textMock = render(
          <Text variant={variant} tag="div">
            Example
          </Text>
        )
        expect(textMock.getByText("Example").tagName).toBe("DIV")
      })
    })
  })

  describe("renders the correct color classes", () => {
    const testCases: AllowedTextColors[] = [
      "dark",
      "dark-reduced-opacity",
      "white",
      "white-reduced-opacity",
      "positive",
      "negative",
    ]

    testCases.forEach(color => {
      it(`renders the correct class for <Text color={${color}} />`, () => {
        const textMock = render(
          <Text variant="body" color={color} tag="div">
            Example
          </Text>
        )
        const textClasslist = textMock.getByText("Example").classList
        expect(textClasslist).toContain("text")
        expect(textClasslist).toContain(color)
      })
    })
  })

  it("passes through data attributes", () => {
    const { getByTestId } = render(
      <Text variant="intro-lede" data-testid="test-id">
        Example
      </Text>
    )
    expect(getByTestId("test-id")).toBeInTheDocument()
  })

  describe("defaults to the correct HTML element", () => {
    type TestObject = { variant: TextVariants; el: AllowedTextTags }
    const testCases: TestObject[] = [
      { variant: "intro-lede", el: "p" },
      { variant: "body", el: "p" },
      { variant: "small", el: "p" },
      { variant: "extra-small", el: "p" },
    ]

    testCases.forEach(({ variant, el }) => {
      it(`renders the correct element for <Text variant={${variant}} />`, () => {
        const textMock = render(<Text variant={variant}>Example</Text>)
        expect(textMock.getByText("Example").tagName.toLowerCase()).toBe(el)
        expect(textMock.baseElement).toMatchSnapshot()
      })
    })
  })

  it("allows consumers to provide a className", () => {
    const { getByText } = render(
      <Text variant="body" classNameOverride="example-classname">
        Example
      </Text>
    )
    expect(getByText("Example").classList).toContain("example-classname")
  })
})
