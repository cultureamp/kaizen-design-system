import React from "react"
import { render } from "@testing-library/react"
import { RadioGroup } from "./RadioGroup"

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
      const { getByRole } = render(<RadioGroup labelText="Label title" />)
      expect(
        getByRole("radiogroup", { name: "Label title" })
      ).toBeInTheDocument()
    })

    it("has an accessible name when provided a labelId", () => {
      const { getByRole } = render(
        <RadioGroup labelText="Label title" labelId="some-custom-id" />
      )
      expect(
        getByRole("radiogroup", { name: "Label title" })
      ).toBeInTheDocument()
    })
  })
})
