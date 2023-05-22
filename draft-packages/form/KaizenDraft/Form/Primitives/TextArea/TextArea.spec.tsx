import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TextArea, TextAreaProps } from "./index"

const user = userEvent.setup()

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

  it("calls the `onChange` event when the value is updated", async () => {
    renderTextArea()

    await user.type(screen.getByRole("textbox"), "Hello")

    await waitFor(() => {
      expect(defaultTextAreaProps.onChange).toBeCalledTimes(5)
    })
  })

  it("renders a reversed text area", () => {
    const { container } = renderTextArea({ reversed: true })
    expect(container.querySelector(".reversed")).toBeTruthy()
  })
})
