import React from "react"
import { fireEvent, render } from "@testing-library/react"
import Action from "./Action"

describe("<Action />", () => {
  it("renders anchor tag with href and onClick when both is provided", () => {
    const onClickMock = jest.fn()
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
    fireEvent.click(anchor)

    expect(anchor).toHaveAttribute("href", "https://example.com")
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it("renders a button when href is not provided", () => {
    const onClickMock = jest.fn()
    const { getByRole } = render(
      <Action
        action={{
          label: "I am an anchor",
          onClick: onClickMock,
        }}
      />
    )

    const button = getByRole("button")
    fireEvent.click(button)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
