import { cleanup, render, fireEvent } from "@testing-library/react"
import * as React from "react"
import InputEditModal, { InputEditModalProps } from "./InputEditModal"

afterEach(cleanup)

const InputEditModalWrapper = (props: Partial<InputEditModalProps>) => (
  <InputEditModal
    isOpen={true}
    type="positive"
    title="Example modal title"
    onSubmit={() => undefined}
    onDismiss={() => undefined}
    children="Example modal body"
    {...props}
  />
)

describe("<InputEditModal />", () => {
  it("renders an open modal with the provided content", () => {
    const { getByText } = render(
      <InputEditModalWrapper>Example modal body</InputEditModalWrapper>
    )
    expect(getByText("Example modal body")).toBeTruthy()
  })

  it("supports a dismiss action when escape key is pressed", () => {
    const handleDismiss = jest.fn()
    const document = render(
      <InputEditModalWrapper onDismiss={handleDismiss}>
        Example modal body
      </InputEditModalWrapper>
    )
    fireEvent.keyUp(document.container, { key: "Escape", code: "Escape" })
    expect(handleDismiss).toHaveBeenCalledTimes(1)
  })

  it("supports a dismiss action when dismiss button is pressed", () => {
    const handleSubmit = jest.fn()
    const handleDismiss = jest.fn()
    const { getByLabelText } = render(
      <InputEditModalWrapper onSubmit={handleSubmit} onDismiss={handleDismiss}>
        Example modal body
      </InputEditModalWrapper>
    )
    fireEvent.click(getByLabelText(/Dismiss/i))
    expect(handleSubmit).toHaveBeenCalledTimes(0)
    expect(handleDismiss).toHaveBeenCalledTimes(1)
  })

  it("supports a dismiss action when cancel button is pressed", () => {
    const handleSubmit = jest.fn()
    const handleDismiss = jest.fn()
    const { getByText } = render(
      <InputEditModalWrapper onSubmit={handleSubmit} onDismiss={handleDismiss}>
        Example modal body
      </InputEditModalWrapper>
    )
    fireEvent.click(getByText(/Cancel/i))
    expect(handleSubmit).toHaveBeenCalledTimes(0)
    expect(handleDismiss).toHaveBeenCalledTimes(1)
  })

  it("supports a submit action when submit button is pressed", () => {
    const handleSubmit = jest.fn()
    const handleDismiss = jest.fn()
    const { getByText } = render(
      <InputEditModalWrapper onSubmit={handleSubmit} onDismiss={handleDismiss}>
        Example modal body
      </InputEditModalWrapper>
    )
    fireEvent.click(getByText(/Submit/i))
    expect(handleSubmit).toHaveBeenCalledTimes(1)
    expect(handleDismiss).toHaveBeenCalledTimes(0)
  })
})
