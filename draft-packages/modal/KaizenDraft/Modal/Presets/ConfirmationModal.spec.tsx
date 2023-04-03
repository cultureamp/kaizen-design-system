import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { ConfirmationModal, ConfirmationModalProps } from "./ConfirmationModal"
import "./matchMedia.mock"

const ConfirmationModalWrapper = (
  props: Partial<ConfirmationModalProps>
): JSX.Element => (
  <ConfirmationModal
    mood="informative"
    isOpen={true}
    title="Example Modal Title"
    onDismiss={(): void => undefined}
    onConfirm={(): void => undefined}
    children="Example Modal body"
    {...props}
  />
)

describe("<ConfirmationModal />", () => {
  it("renders an open modal with the provided content", () => {
    const { getByText } = render(
      <ConfirmationModalWrapper>Example modal body</ConfirmationModalWrapper>
    )
    expect(getByText("Example modal body")).toBeTruthy()

    // Confirm/Cancel are modal footer CTAs
    expect(getByText("Confirm")).toBeTruthy()
    expect(getByText("Cancel")).toBeTruthy()
  })

  it('renders a modal in a "working" state', () => {
    const { getByText, queryByText } = render(
      <ConfirmationModalWrapper
        confirmWorking={{
          label: "Submitting",
          labelHidden: false,
        }}
      >
        Example modal body
      </ConfirmationModalWrapper>
    )
    expect(getByText("Example modal body")).toBeTruthy()

    // Replaced by the user-submitted prop
    expect(getByText("Submitting")).toBeTruthy()
    expect(getByText("Cancel")).toBeTruthy()

    // default "confirm" CTA should not be replaced by the above working state label
    expect(queryByText("Confirm")).toBeNull()
  })

  it("supports a dismiss action when escape key is pressed", () => {
    const handleConfirm = jest.fn()
    const handleDismiss = jest.fn()
    const document = render(
      <ConfirmationModalWrapper
        onDismiss={handleDismiss}
        onConfirm={handleConfirm}
      >
        Example modal body
      </ConfirmationModalWrapper>
    )
    fireEvent.keyUp(document.container, { key: "Escape", code: "Escape" })
    expect(handleDismiss).toHaveBeenCalledTimes(1)
    expect(handleConfirm).toHaveBeenCalledTimes(0)
  })

  it("supports a dismiss action when dismiss button is pressed", () => {
    const handleConfirm = jest.fn()
    const handleDismiss = jest.fn()
    const { getByLabelText } = render(
      <ConfirmationModalWrapper
        onConfirm={handleConfirm}
        onDismiss={handleDismiss}
      >
        Example modal body
      </ConfirmationModalWrapper>
    )
    fireEvent.click(getByLabelText(/Dismiss/i))
    expect(handleConfirm).toHaveBeenCalledTimes(0)
    expect(handleDismiss).toHaveBeenCalledTimes(1)
  })

  it("supports a dismiss action when cancel button is pressed", () => {
    const handleConfirm = jest.fn()
    const handleDismiss = jest.fn()
    const { getByText } = render(
      <ConfirmationModalWrapper
        onDismiss={handleDismiss}
        onConfirm={handleConfirm}
      >
        Example modal body
      </ConfirmationModalWrapper>
    )
    fireEvent.click(getByText(/Cancel/i))
    expect(handleConfirm).toHaveBeenCalledTimes(0)
    expect(handleDismiss).toHaveBeenCalledTimes(1)
  })

  it("supports a confirm action when confirm button is pressed", () => {
    const handleConfirm = jest.fn()
    const handleDismiss = jest.fn()
    const { getByText } = render(
      <ConfirmationModalWrapper
        onDismiss={handleDismiss}
        onConfirm={handleConfirm}
      >
        Example modal body
      </ConfirmationModalWrapper>
    )
    fireEvent.click(getByText(/Confirm/i))
    expect(handleConfirm).toHaveBeenCalledTimes(1)
    expect(handleDismiss).toHaveBeenCalledTimes(0)
  })
})
