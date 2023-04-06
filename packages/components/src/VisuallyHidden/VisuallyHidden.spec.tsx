import React from "react"
import { render } from "@testing-library/react"

import { VisuallyHidden } from "./VisuallyHidden"

describe("<VisuallyHidden />", () => {
  it("still renders any child components", () => {
    const { getByText } = render(
      <VisuallyHidden>
        <p>Lorem ipsum</p>
      </VisuallyHidden>
    )

    expect(getByText("Lorem ipsum")).toBeTruthy()
  })

  it("renders a `data-testid` attribute", () => {
    const { getByTestId } = render(
      <VisuallyHidden data-testid="test-id">
        <p>Lorem ipsum</p>
      </VisuallyHidden>
    )

    expect(getByTestId("test-id")).toBeTruthy()
  })

  describe("Rendered tag", () => {
    it("renders a `span` by default", () => {
      const { container } = render(<VisuallyHidden>Lorem ipsum</VisuallyHidden>)
      expect(container.firstChild?.nodeName).toEqual("SPAN")
    })

    describe("when passed `div` as the `tag` prop", () => {
      it("renders a `div`", () => {
        const { container } = render(
          <VisuallyHidden tag="div">Lorem ipsum</VisuallyHidden>
        )
        expect(container.firstChild?.nodeName).toEqual("DIV")
      })
    })
  })
})
