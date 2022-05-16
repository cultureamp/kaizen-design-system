import { render, screen } from "@testing-library/react"
import * as React from "react"
import userEvent from "@testing-library/user-event"
import { SkipLink } from "./SkipLink"
import "@testing-library/jest-dom"

describe("<SkipLink />", () => {
  it("SkipLink is focusable", () => {
    render(<SkipLink label="Skip to main content" skipTo="mainContent" />, {
      legacyRoot: true,
    })
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(screen.getByText("Skip to main content").closest("a")).toHaveFocus()
  })
})
