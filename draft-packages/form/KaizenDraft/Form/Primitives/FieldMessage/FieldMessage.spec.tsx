import React from "react"
import { cleanup, render, screen } from "@testing-library/react"
import { FieldMessage, FieldMessageProps } from "./index"

afterEach(cleanup)

const defaultFieldMessageProps = {
  id: "someFieldMessageId",
  message: "Some FieldMessage.",
}

const renderFieldMessage = (
  props?: FieldMessageProps
): ReturnType<typeof render> => {
  const mergedFieldMessageProps = { ...defaultFieldMessageProps, ...props }

  return render(<FieldMessage {...mergedFieldMessageProps} />)
}

describe("<FieldMessage />", () => {
  it("should render a message", () => {
    const { queryByText } = renderFieldMessage()

    expect(queryByText(defaultFieldMessageProps.message)).toBeTruthy()
  })

  it("should render an `id` attribute", () => {
    const { container } = renderFieldMessage()

    expect(
      container.querySelector(`[id="${defaultFieldMessageProps.id}"]`)
    ).toBeTruthy()
  })

  it("should render an `data-automation-id` attribute", () => {
    const automationId = "someFieldMessageAutomationId"
    const { container } = renderFieldMessage({ automationId })

    expect(
      container.querySelector(`[data-automation-id="${automationId}"]`)
    ).toBeTruthy()
  })

  it("should render a `reversed` field message", () => {
    const { container } = renderFieldMessage({ reversed: true })

    expect(container.querySelector(".reversed")).toBeTruthy()
  })

  it("should render a warning icon with an error status", () => {
    const { container } = renderFieldMessage({ status: "error" })

    expect(container.querySelector(".warningIcon")).toBeTruthy()
    expect(screen.getByTitle("Error message"))
  })

  it("should render a warning icon with an error status", () => {
    const { container } = renderFieldMessage({ status: "caution" })

    expect(container.querySelector(".warningIcon")).toBeTruthy()
    expect(screen.getByTitle("Caution message"))
  })
})
