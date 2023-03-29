import React from "react"
import { cleanup, render } from "@testing-library/react"
import { FieldGroup, FieldGroupProps } from "./index"

afterEach(cleanup)

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
  it("should render an `id` attribute", () => {
    const { container } = renderFieldGroup()

    expect(
      container.querySelector(`[id="${defaultFieldGroupProps.id}"]`)
    ).toBeTruthy()
  })

  it("should render an `data-automation-id` attribute", () => {
    const automationId = "someFieldGroupAutomationId"
    const { container } = renderFieldGroup({ automationId })

    expect(
      container.querySelector(`[data-automation-id="${automationId}"]`)
    ).toBeTruthy()
  })
})
