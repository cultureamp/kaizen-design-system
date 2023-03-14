import React from "react"
import { cleanup, render } from "@testing-library/react"

import { LabelProps } from "./Label"
import { Label } from "."

afterEach(cleanup)

const defaultLabelProps = {
  id: "someLabelId",
  labelText: "Some field label",
}

const renderLabel = (props?: LabelProps): ReturnType<typeof render> => {
  const mergedLabelProps = { ...defaultLabelProps, ...props }

  return render(<Label {...mergedLabelProps} />)
}

describe("<Label />", () => {
  it("should render a label", () => {
    const { queryByText } = renderLabel()
    expect(queryByText(defaultLabelProps.labelText)).toBeTruthy()
  })

  it("should render a `for` attribute", () => {
    const htmlFor = "someFieldId"

    const { container } = renderLabel({ htmlFor })
    expect(container.querySelector(`[for="${htmlFor}"]`)).toBeTruthy()
  })

  it("should render an `data-automation-id` attribute", () => {
    const automationId = "someLabelAutomationId"

    const { container } = renderLabel({ automationId })
    expect(
      container.querySelector(`[data-automation-id="${automationId}"]`)
    ).toBeTruthy()
  })

  it("should render an `id` attribute", () => {
    const { container } = renderLabel()
    expect(
      container.querySelector(`[id="${defaultLabelProps.id}"]`)
    ).toBeTruthy()
  })

  it("should render a reversed label", () => {
    const { container } = renderLabel({ reversed: true })
    expect(container.querySelector(".reversed")).toBeTruthy()
  })

  describe("label type", () => {
    it("should render a checkbox label", () => {
      const { container } = renderLabel({ labelType: "checkbox" })
      expect(container.querySelector(".checkbox")).toBeTruthy()
    })

    it("should render a toggle label", () => {
      const { container } = renderLabel({ labelType: "toggle" })
      expect(container.querySelector(".toggle")).toBeTruthy()
    })

    it("should render a text label", () => {
      const { container } = renderLabel({ labelType: "text" })
      expect(container.querySelector(".text")).toBeTruthy()
    })

    it("should render a radio label", () => {
      const { container } = renderLabel({ labelType: "radio" })
      expect(container.querySelector(".radio")).toBeTruthy()
    })
  })
})
