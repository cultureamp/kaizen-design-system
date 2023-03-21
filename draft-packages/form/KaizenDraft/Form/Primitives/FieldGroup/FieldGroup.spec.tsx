import React from "react"
import { cleanup, render } from "@testing-library/react"
import { FieldGroup } from "./index"

describe("<FieldGroup />", () => {
  afterEach(cleanup)

  it("renders the `id` attribute", () => {
    const id = "someFieldGroupId"
    const { container } = render(<FieldGroup id={id} />)

    expect(container.querySelector(`[id="${id}"]`)).toBeInTheDocument()
  })

  it("renders the `data-automation-id` attribute", () => {
    const automationId = "someFieldGroupAutomationId"
    const { container } = render(<FieldGroup automationId={automationId} />)

    expect(
      container.querySelector(`[data-automation-id="${automationId}"]`)
    ).toBeInTheDocument()
  })
})
