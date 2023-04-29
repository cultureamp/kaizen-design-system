import React from "react"
import { render, screen } from "@testing-library/react"
import { RadioGroup } from "./index"

describe("<RadioGroup />", () => {
  describe("presentational", () => {
    it("renders a title", () => {
      const title = "Label"

      const { queryByText } = render(<RadioGroup labelText={title} />)
      expect(queryByText(title)).toBeTruthy()
    })
  })

  describe("accessibilty", () => {
    it("has an accessible name when not provided a labelId", () => {
      render(<RadioGroup labelText="Label title" />)
      expect(
        screen.getByRole("radiogroup", { name: "Label title" })
      ).toBeInTheDocument()
    })

    it("has an accessible name when provided a labelId", () => {
      render(<RadioGroup labelText="Label title" labelId="some-custom-id" />)
      expect(
        screen.getByRole("radiogroup", { name: "Label title" })
      ).toBeInTheDocument()
    })
  })
})
