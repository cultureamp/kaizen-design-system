import React from "react"
import { render } from "@testing-library/react"

import { LabelProps } from "./Label"
import { Label } from "."

const defaultLabelProps = {
  id: "someLabelId",
  labelText: "Some field label",
}

const renderLabel = (props?: LabelProps): ReturnType<typeof render> => {
  const mergedLabelProps = { ...defaultLabelProps, ...props }

  return render(<Label {...mergedLabelProps} />)
}

describe("<Label />", () => {
  it("renders a label", () => {
    const { queryByText } = renderLabel()
    expect(queryByText(defaultLabelProps.labelText)).toBeTruthy()
  })

  it("renders a `for` attribute", () => {
    const htmlFor = "someFieldId"

    const { container } = renderLabel({ htmlFor })
    expect(container.querySelector(`[for="${htmlFor}"]`)).toBeTruthy()
  })

  it("renders an `data-automation-id` attribute", () => {
    const automationId = "someLabelAutomationId"

    const { container } = renderLabel({ automationId })
    expect(
      container.querySelector(`[data-automation-id="${automationId}"]`)
    ).toBeTruthy()
  })

  it("renders an `id` attribute", () => {
    const { container } = renderLabel()
    expect(
      container.querySelector(`[id="${defaultLabelProps.id}"]`)
    ).toBeTruthy()
  })

  it("renders a reversed label", () => {
    const { container } = renderLabel({ reversed: true })
    expect(container.querySelector(".reversed")).toBeTruthy()
  })

  describe("label type", () => {
    it("renders a checkbox label", () => {
      const { container } = renderLabel({ labelType: "checkbox" })
      expect(container.querySelector(".checkbox")).toBeTruthy()
    })

    it("renders a toggle label", () => {
      const { container } = renderLabel({ labelType: "toggle" })
      expect(container.querySelector(".toggle")).toBeTruthy()
    })

    it("renders a text label", () => {
      const { container } = renderLabel({ labelType: "text" })
      expect(container.querySelector(".text")).toBeTruthy()
    })

    it("renders a radio label", () => {
      const { container } = renderLabel({ labelType: "radio" })
      expect(container.querySelector(".radio")).toBeTruthy()
    })
  })
})
