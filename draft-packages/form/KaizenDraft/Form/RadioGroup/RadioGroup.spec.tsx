import React from "react"
import { render, screen } from "@testing-library/react"
import { RadioGroup } from "./index"

describe("<RadioGroup /> ", () => {
  describe("Presentational", () => {
    it("renders a title", () => {
      const title = "Radio group label"

      const { queryByText } = render(
        <RadioGroup labelText={title} children={null} />
      )
      expect(queryByText(title)).toBeInTheDocument()
    })
  })

  describe("Accessibilty", () => {
    it("has an accessible name when not provided a labelId", () => {
      render(<RadioGroup labelText="Label title" />)
      expect(screen.getByRole("radiogroup", { name: "Label title" }))
    })

    it("has an accessible name when provided a labelId", () => {
      render(<RadioGroup labelText="Label title" labelId="some-custom-id" />)
      expect(screen.getByRole("radiogroup", { name: "Label title" }))
    })
  })
})
