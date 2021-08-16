import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import * as React from "react"
import { TextAreaProps } from "./TextArea"
import { TextArea } from "."

afterEach(cleanup)

const defaultTextAreaProps = {
  id: "someTextAreaId",
  value: "Some field value",
  onChange: jest.fn(),
}

const renderTextArea = (props?: TextAreaProps) => {
  const mergedTextAreaProps = { ...defaultTextAreaProps, ...props }

  return render(<TextArea {...mergedTextAreaProps} />)
}

describe("<TextArea />", () => {
  it("should render a value", () => {
    const { queryByText } = renderTextArea()
    expect(queryByText(defaultTextAreaProps.value)).toBeTruthy()
  })

  it("should call the `onChange` event when the value is updated", () => {
    renderTextArea()

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Hello" },
    })

    expect(defaultTextAreaProps.onChange).toBeCalledTimes(1)
  })

  it("should render an `data-automation-id` attribute", () => {
    const automationId = "someTextAreaAutomationId"

    const { container } = renderTextArea({ automationId })
    expect(
      container.querySelector(`[data-automation-id="${automationId}"]`)
    ).toBeTruthy()
  })

  it("should render an `id` attribute", () => {
    const { container } = renderTextArea()
    expect(
      container.querySelector(`[id="${defaultTextAreaProps.id}"]`)
    ).toBeTruthy()
  })

  it("should render a reversed text area", () => {
    const { container } = renderTextArea({ reversed: true })
    expect(container.querySelector(".reversed")).toBeTruthy()
  })
})
