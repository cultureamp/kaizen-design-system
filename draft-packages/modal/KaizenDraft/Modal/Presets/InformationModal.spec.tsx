import { cleanup, render, fireEvent } from "@testing-library/react"
import * as React from "react"
import InformationModal, { InformationModalProps } from "./InformationModal"

afterEach(cleanup)

const InformationModalWrapper = (props: Partial<InformationModalProps>) => (
  <InformationModal
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

describe("<InformationModal />", () => {
  it("renders an open modal with the provided content", () => {
    const { getByText } = render(
      <InformationModalWrapper>Example modal body</InformationModalWrapper>
    )
    expect(getByText("Example modal body")).toBeTruthy()
  })

  it("supports a dismiss action when escape key is pressed", () => {
    const handleDismiss = jest.fn()
    const document = render(
      <InformationModalWrapper onDismiss={handleDismiss}>
        Example modal body
      </InformationModalWrapper>
    )
    fireEvent.keyUp(document.container, { key: "Escape", code: "Escape" })
    expect(handleDismiss).toHaveBeenCalledTimes(1)
  })

  it("supports a dismiss action when dismiss button is pressed", () => {
    const handleConfirm = jest.fn()
    const handleDismiss = jest.fn()
    const { getByTitle } = render(
      <InformationModalWrapper
        onConfirm={handleConfirm}
        onDismiss={handleDismiss}
      >
        Example modal body
      </InformationModalWrapper>
    )
    fireEvent.click(getByTitle(/Dismiss/i))
    expect(handleConfirm).toHaveBeenCalledTimes(0)
    expect(handleDismiss).toHaveBeenCalledTimes(1)
  })

  it("supports a confirm action when confirm button is pressed", () => {
    const handleConfirm = jest.fn()
    const handleDismiss = jest.fn()
    const { getByText } = render(
      <InformationModalWrapper
        onConfirm={handleConfirm}
        onDismiss={handleDismiss}
      >
        Example modal body
      </InformationModalWrapper>
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
      <InformationModalWrapper
        onConfirm={handleConfirm}
        onDismiss={handleDismiss}
        onSecondaryAction={handleSecondary}
      >
        Example modal body
      </InformationModalWrapper>
    )
    fireEvent.click(getByText(/Example secondary/i))
    expect(handleSecondary).toHaveBeenCalledTimes(1)
    expect(handleConfirm).toHaveBeenCalledTimes(0)
    expect(handleDismiss).toHaveBeenCalledTimes(0)
  })
})
