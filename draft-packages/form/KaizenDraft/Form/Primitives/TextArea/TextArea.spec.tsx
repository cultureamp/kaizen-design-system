import React from "react"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { TextArea, TextAreaProps } from "./index"

const defaultTextAreaProps = {
  id: "someTextAreaId",
  value: "Some field value",
  onChange: jest.fn(),
}

const renderTextArea = (props?: TextAreaProps): ReturnType<typeof render> => {
  const mergedTextAreaProps = { ...defaultTextAreaProps, ...props }

  return render(<TextArea {...mergedTextAreaProps} />)
}

describe("<TextArea />", () => {
  it("renders a value when component is controlled", () => {
    const { queryByText } = renderTextArea()
    expect(queryByText(defaultTextAreaProps.value)).toBeTruthy()
  })

  it("renders a default value when component is uncontrolled", () => {
    const { queryByText } = renderTextArea({
      defaultValue: "default value",
      value: undefined,
    })
    expect(queryByText(defaultTextAreaProps.value)).toBeFalsy()
    expect(queryByText("default value")).toBeTruthy()
  })

  it("calls the `onChange` event when the value is updated", () => {
    renderTextArea()

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Hello" },
    })

    expect(defaultTextAreaProps.onChange).toBeCalledTimes(1)
  })

  it("renders a reversed text area", () => {
    const { container } = renderTextArea({ reversed: true })
    expect(container.querySelector(".reversed")).toBeTruthy()
  })
})
