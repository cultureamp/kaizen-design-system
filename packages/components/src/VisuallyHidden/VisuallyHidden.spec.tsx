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
})
