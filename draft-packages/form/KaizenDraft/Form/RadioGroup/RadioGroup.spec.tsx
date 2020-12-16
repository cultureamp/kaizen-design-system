import { RadioField } from "@kaizen/draft-form"
import { cleanup, render } from "@testing-library/react"
import { fireEvent } from "@testing-library/dom"
import * as React from "react"
import RadioGroup, { RadioGroupProps } from "./RadioGroup"

afterEach(cleanup)

const defaultRadioGroupProps: RadioGroupProps = {
  automationId: "RadioAutomationId",
  labelText: "Label",
}
const renderRadioGroup = (props?: RadioGroupProps) => {
  const mergedRadioGroupProps = { ...defaultRadioGroupProps, ...props }

  return render(<RadioGroup {...mergedRadioGroupProps} />)
}

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
})
