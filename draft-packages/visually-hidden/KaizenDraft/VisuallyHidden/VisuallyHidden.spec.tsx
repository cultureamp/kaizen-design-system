import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import { VisuallyHidden } from "./VisuallyHidden"

afterEach(cleanup)

describe("<VisuallyHidden />", () => {
  it("applies the visuallyHidden class to the component", () => {
    const { getByText } = render(
      <p>
        Hello, <VisuallyHidden>World!</VisuallyHidden>
      </p>
    )
    const classList = getByText("World!").classList
    expect(classList).toContain("visuallyHidden")
  })
})
