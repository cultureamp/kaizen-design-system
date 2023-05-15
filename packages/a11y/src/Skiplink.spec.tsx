import React from "react"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SkipLink } from "./SkipLink"

const user = userEvent.setup()

describe("<SkipLink />", () => {
  it("SkipLink is focusable", async () => {
    const { getByText } = render(
      <SkipLink label="Skip to main content" skipTo="mainContent" />
    )
    expect(document.body).toHaveFocus()
    await user.tab()
    expect(getByText("Skip to main content").closest("a")).toHaveFocus()
  })
})
