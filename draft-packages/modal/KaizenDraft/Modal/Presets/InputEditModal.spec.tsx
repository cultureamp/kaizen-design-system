import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { InputEditModal, InputEditModalProps } from "./InputEditModal"
import "./matchMedia.mock"

const InputEditModalWrapper = (
  props: Partial<InputEditModalProps>
): JSX.Element => (
  <InputEditModal
    isOpen={true}
    mood="positive"
    title="Example modal title"
    onSubmit={(): void => undefined}
    onDismiss={(): void => undefined}
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

  it("supports a secondary action when secondary-action and secondary-label both props are provided", () => {
    const handleSubmit = jest.fn()
    const handleDismiss = jest.fn()
    const handleSecondaryAction = jest.fn()

    const { getByText } = render(
      <InputEditModalWrapper
        onSubmit={handleSubmit}
        onDismiss={handleDismiss}
        onSecondaryAction={handleSecondaryAction}
        secondaryLabel="Secondary button"
      >
        Example modal body
      </InputEditModalWrapper>
    )
    fireEvent.click(getByText(/Secondary button/i))
    expect(handleSubmit).toHaveBeenCalledTimes(0)
    expect(handleDismiss).toHaveBeenCalledTimes(0)
    expect(handleSecondaryAction).toHaveBeenCalledTimes(1)
  })

  it("dismiss works as usual when only one of the prop (secondary-action / secondary-label) is provided", () => {
    const handleSubmit = jest.fn()
    const handleDismiss = jest.fn()
    const handleSecondaryAction = jest.fn()

    const { getByText } = render(
      <InputEditModalWrapper
        onSubmit={handleSubmit}
        onDismiss={handleDismiss}
        onSecondaryAction={handleSecondaryAction}
      >
        Example modal body
      </InputEditModalWrapper>
    )
    fireEvent.click(getByText(/Cancel/i))
    expect(handleSubmit).toHaveBeenCalledTimes(0)
    expect(handleDismiss).toHaveBeenCalledTimes(1)
    expect(handleSecondaryAction).toHaveBeenCalledTimes(0)
  })
})
