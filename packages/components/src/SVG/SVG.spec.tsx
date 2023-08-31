import React from "react"
import { render, screen } from "@testing-library/react"
import { SVG } from "./SVG"

describe("Icons", () => {
  describe("Meaningful (role=img)", () => {
    it("renders an accessible name", () => {
      const label = "My accessible label"
      render(
        <SVG role="img" aria-label={label}>
          <path />
        </SVG>
      )

      expect(screen.getByRole("img", { name: label })).toBeInTheDocument()
    })
  })
})
