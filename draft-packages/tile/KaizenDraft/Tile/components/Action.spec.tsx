import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Action from "./Action"

const user = userEvent.setup()

describe("<Action />", () => {
  it("renders anchor tag with href and onClick when both is provided", async () => {
    const onClickMock = vi.fn()
    const { getByRole } = render(
      <Action
        action={{
          label: "I am an anchor",
          href: "https://example.com",
          onClick: onClickMock,
        }}
      />
    )

    const anchor = getByRole("link")
    await user.click(anchor)
    await waitFor(() => {
      expect(anchor).toHaveAttribute("href", "https://example.com")
      expect(onClickMock).toHaveBeenCalledTimes(1)
    })
  })

  it("renders a button when href is not provided", async () => {
    const onClickMock = vi.fn()
    const { getByRole } = render(
      <Action
        action={{
          label: "I am an anchor",
          onClick: onClickMock,
        }}
      />
    )

    const button = getByRole("button")
    await user.click(button)
    await waitFor(() => {
      expect(onClickMock).toHaveBeenCalledTimes(1)
    })
  })
})
