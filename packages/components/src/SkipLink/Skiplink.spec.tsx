import * as React from "react"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SkipLink } from "./SkipLink"
import "@testing-library/jest-dom"

describe("<SkipLink />", () => {
  it("SkipLink is focusable", async () => {
    const { getByText } = render(
      <SkipLink label="Skip to main content" skipTo="mainContent" />
    )
    expect(document.body).toHaveFocus()
    await userEvent.tab()
    expect(getByText("Skip to main content").closest("a")).toHaveFocus()
  })
})
