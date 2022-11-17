import * as React from "react"
import { cleanup, render, fireEvent } from "@testing-library/react"
import ContextModal, { ContextModalProps } from "./ContextModal"
import "./matchMedia.mock"

afterEach(cleanup)

const ContextModalWrapper = (props: Partial<ContextModalProps>) => (
  <ContextModal
    isOpen={true}
    title="Example modal title"
    onConfirm={() => undefined}
    onDismiss={() => undefined}
    children="Example modal body"
    secondaryLabel="Example secondary"
    onSecondaryAction={() => undefined}
    {...props}
  />
)

describe("<ContextModal />", () => {
  it("renders an open modal with the provided content", () => {
    const { getByText } = render(
      <ContextModalWrapper>Example modal body</ContextModalWrapper>
    )
    expect(getByText("Example modal body")).toBeTruthy()
  })

  it("supports a dismiss action when escape key is pressed", () => {
    const handleDismiss = jest.fn()
    const document = render(
      <ContextModalWrapper onDismiss={handleDismiss}>
        Example modal body
      </ContextModalWrapper>
    )
    fireEvent.keyUp(document.container, { key: "Escape", code: "Escape" })
    expect(handleDismiss).toHaveBeenCalledTimes(1)
  })

  it("supports a dismiss action when dismiss button is pressed", () => {
    const handleConfirm = jest.fn()
    const handleDismiss = jest.fn()
    const { getByLabelText } = render(
      <ContextModalWrapper onConfirm={handleConfirm} onDismiss={handleDismiss}>
        Example modal body
      </ContextModalWrapper>
    )
    fireEvent.click(getByLabelText(/Dismiss/i))
    expect(handleConfirm).toHaveBeenCalledTimes(0)
    expect(handleDismiss).toHaveBeenCalledTimes(1)
  })

  it("supports a confirm action when confirm button is pressed", () => {
    const handleConfirm = jest.fn()
    const handleDismiss = jest.fn()
    const { getByText } = render(
      <ContextModalWrapper onConfirm={handleConfirm} onDismiss={handleDismiss}>
        Example modal body
      </ContextModalWrapper>
    )
    fireEvent.click(getByText(/Confirm/i))
    expect(handleConfirm).toHaveBeenCalledTimes(1)
    expect(handleDismiss).toHaveBeenCalledTimes(0)
  })

  it("supports a secondary action when secondary button is pressed", () => {
    const handleConfirm = jest.fn()
    const handleSecondary = jest.fn()
    const handleDismiss = jest.fn()
    const { getByText } = render(
      <ContextModalWrapper
        onConfirm={handleConfirm}
        onDismiss={handleDismiss}
        onSecondaryAction={handleSecondary}
      >
        Example modal body
      </ContextModalWrapper>
    )
    fireEvent.click(getByText(/Example secondary/i))
    expect(handleSecondary).toHaveBeenCalledTimes(1)
    expect(handleConfirm).toHaveBeenCalledTimes(0)
    expect(handleDismiss).toHaveBeenCalledTimes(0)
  })
})
