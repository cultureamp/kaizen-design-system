import React from "react"
import { render, screen } from "@testing-library/react"
import { Icon } from "./Icon"

describe("<Icon />", () => {
  it("sets required attributes for a presentational icon", () => {
    render(<Icon data-testid="test__icon" name="star" isPresentational />)
    const icon = screen.getByTestId("test__icon")

    expect(icon).toHaveAttribute("aria-hidden", "true")
    expect(icon).not.toHaveAttribute("role")
    expect(icon).not.toHaveAttribute("aria-label")
  })

  it("sets required attributes for a meaningful icon", () => {
    render(<Icon data-testid="test__icon" name="star" alt="Favourite" />)
    const icon = screen.getByTestId("test__icon")

    expect(icon).not.toHaveAttribute("aria-hidden")
    expect(icon).toHaveAttribute("role", "img")
    expect(icon).toHaveAttribute("aria-label", "Favourite")
  })

  describe("shouldMirrorInRTL", () => {
    it("does not show icon name in accessible name for switched icons", () => {
      render(
        <button type="button">
          <Icon name="format_list_numbered" shouldMirrorInRTL alt="Pancakes" />
        </button>
      )
      const button = screen.getByRole("button")

      expect(button).toHaveAccessibleName("Pancakes")
    })
  })
})
