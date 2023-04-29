import React from "react"
import { render, screen } from "@testing-library/react"
import { FieldMessage, FieldMessageProps } from "./index"

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
  it("renders a message within a <p> tag when given a string", () => {
    const fieldMessage = renderFieldMessage({ message: "Hello I am a message" })

    expect(fieldMessage.queryByText("Hello I am a message")).toBeInTheDocument()
    expect(
      fieldMessage.queryByText("Hello I am a message")?.tagName === "P"
    ).toBeTruthy()
  })

  it("renders a message within a <div> tag when not given node other than string", () => {
    const fieldMessage = renderFieldMessage({
      message: <span>Hello I am a message within a span</span>,
    })

    expect(
      fieldMessage.queryByText("Hello I am a message within a span")
    ).toBeInTheDocument()
    expect(
      fieldMessage.queryByText("Hello I am a message within a span")
        ?.tagName === "SPAN"
    ).toBeTruthy()
    expect(
      fieldMessage.queryByText("Hello I am a message within a span")
        ?.parentElement?.tagName === "DIV"
    ).toBeTruthy()
  })

  it("renders an `id` attribute", () => {
    const { container } = renderFieldMessage()

    expect(
      container.querySelector(`[id="${defaultFieldMessageProps.id}"]`)
    ).toBeTruthy()
  })

  it("renders an `data-automation-id` attribute", () => {
    const automationId = "someFieldMessageAutomationId"
    const { container } = renderFieldMessage({ automationId })

    expect(
      container.querySelector(`[data-automation-id="${automationId}"]`)
    ).toBeTruthy()
  })

  it("renders a `reversed` field message", () => {
    const { container } = renderFieldMessage({ reversed: true })

    expect(container.querySelector(".reversed")).toBeTruthy()
  })

  it("renders a warning icon with an error status", () => {
    const { container } = renderFieldMessage({ status: "error" })

    expect(container.querySelector(".warningIcon")).toBeTruthy()
    expect(screen.getByLabelText("Error message")).toBeInTheDocument()
  })

  it("renders a warning icon with an error status", () => {
    const { container } = renderFieldMessage({ status: "caution" })

    expect(container.querySelector(".warningIcon")).toBeTruthy()
    expect(screen.getByLabelText("Caution message")).toBeInTheDocument()
  })
})
