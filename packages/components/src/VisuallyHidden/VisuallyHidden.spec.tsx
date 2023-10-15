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
})
