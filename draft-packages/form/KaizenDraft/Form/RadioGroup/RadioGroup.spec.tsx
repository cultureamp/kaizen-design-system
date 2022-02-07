import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import RadioGroup from "./RadioGroup"

afterEach(cleanup)

describe("<RadioGroup /> ", () => {
  describe("presentational", () => {
    it("should render a title", () => {
      const title = "Label"

      const { queryByText } = render(
        <RadioGroup labelText={title} children={null} />
      )
      expect(queryByText(title)).toBeTruthy()
    })
  })

  describe("accessibility", () => {
    it("should markup aria label when supplied labelId", () => {
      const { getByRole } = render(
        <RadioGroup
          labelText="Label title"
          labelId="labelId"
          automationId="test"
        />
      )
      expect(getByRole("radiogroup", { name: "Label title" })).toBeTruthy()
    })

    it("should markup aria label when NOT supplied a label id", () => {
      const { getByRole } = render(
        <RadioGroup labelText="Label title" automationId="test" />
      )
      expect(getByRole("radiogroup", { name: "Label title" })).toBeTruthy()
    })
  })
})
