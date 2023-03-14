import React from "react"
import { cleanup, render } from "@testing-library/react"
import { RadioField } from "@kaizen/draft-form"
import { RadioGroup } from "./index"

afterEach(cleanup)

describe("<RadioGroup /> ", () => {
  describe("snapshots", () => {
    test("renders RadioGroup in a column and with a label", () => {
      const { container } = render(
        <RadioGroup labelText="Label" children={null} />
      )

      expect(container.firstChild).toMatchSnapshot()
    })

    test("renders RadioGroup in a row and with a label", () => {
      const { container } = render(
        <RadioGroup labelText="Label" children={null} />
      )

      expect(container.firstChild).toMatchSnapshot()
    })
    test("renders RadioGroup with radios", () => {
      const { container } = render(
        <RadioGroup labelText="Label">
          <RadioField
            name="radio"
            id="radio-1"
            labelText="Label 1"
            selectedStatus={false}
            disabled={false}
            value="radio-1"
          />
          <RadioField
            name="radio"
            id="radio-2"
            labelText="Label 2"
            selectedStatus={false}
            disabled={false}
            value="radio-2"
          />
        </RadioGroup>
      )

      expect(container.firstChild).toMatchSnapshot()
    })

    test("renders RadioGroup in a column and with a label", () => {
      const { container } = render(
        <RadioGroup labelText="Label" children={null} />
      )

      expect(container.firstChild).toMatchSnapshot()
    })
  })
  describe("presentational", () => {
    it("should render a title", () => {
      const title = "Label"

      const { queryByText } = render(
        <RadioGroup labelText={title} children={null} />
      )
      expect(queryByText(title)).toBeTruthy()
    })
  })
  describe("accessibilty", () => {
    it("should markup aria label when supplied labelId", () => {
      const labelId = "labelId"
      const { getByText, getByRole } = render(
        <RadioGroup
          labelText="Label title"
          labelId={labelId}
          automationId="test"
        />
      )
      expect(getByRole("radiogroup").getAttribute("aria-labelledby")).toEqual(
        labelId
      )
      expect(
        getByText("Label title").parentElement?.getAttribute("id")
      ).toEqual(labelId)
    })
  })
})
