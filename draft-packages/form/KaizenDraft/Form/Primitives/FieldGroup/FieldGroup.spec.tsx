import React from "react"
import { render } from "@testing-library/react"
import { FieldGroup, FieldGroupProps } from "./index"

const defaultFieldGroupProps = {
  id: "someFieldGroupId",
}

const renderFieldGroup = (
  props?: FieldGroupProps
): ReturnType<typeof render> => {
  const mergedFieldGroupProps = { ...defaultFieldGroupProps, ...props }

  return render(<FieldGroup {...mergedFieldGroupProps} />)
}

describe("<FieldGroup />", () => {
  it("renders an `id` attribute", () => {
    const { container } = renderFieldGroup()

    expect(
      container.querySelector(`[id="${defaultFieldGroupProps.id}"]`)
    ).toBeTruthy()
  })

  it("renders an `data-automation-id` attribute", () => {
    const automationId = "someFieldGroupAutomationId"
    const { container } = renderFieldGroup({ automationId })

    expect(
      container.querySelector(`[data-automation-id="${automationId}"]`)
    ).toBeTruthy()
  })
})
