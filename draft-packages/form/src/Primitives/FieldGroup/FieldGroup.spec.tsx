import { cleanup, render } from "@testing-library/react"
import * as React from "react"

import { FieldGroupProps } from "./FieldGroup"
import { FieldGroup } from "."

afterEach(cleanup)

const defaultFieldGroupProps = {
  id: "someFieldGroupId",
}

const renderFieldGroup = (props?: FieldGroupProps) => {
  const mergedFieldGroupProps = { ...defaultFieldGroupProps, ...props }

  return render(<FieldGroup {...mergedFieldGroupProps} />)
}

describe("<FieldMessage />", () => {
  it("should render an `id` attribute", () => {
    const id = "someFieldGroupId"
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
