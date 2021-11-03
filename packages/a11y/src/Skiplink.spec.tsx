import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import { SkipLink } from "./SkipLink"

afterEach(cleanup)

describe("<SkipLink />", () => {
  it("renders a SkipLink link as an anchor tag", () => {
    const { getByText, container } = render(
      <SkipLink label="Skip to main content" skipTo="mainContent" />
    )
    expect(getByText("Skip to main content")).toBeTruthy()
    expect(container.firstChild?.nodeName).toEqual("A")
  })
})
