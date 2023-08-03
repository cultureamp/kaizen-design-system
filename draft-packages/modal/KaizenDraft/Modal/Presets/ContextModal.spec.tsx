import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ContextModal, ContextModalProps } from "./ContextModal"
import "./matchMedia.mock"

const user = userEvent.setup()

const ContextModalWrapper = ({
  children,
  ...props
}: Partial<ContextModalProps>): JSX.Element => (
  <ContextModal
    isOpen={true}
    title="Example modal title"
    onConfirm={(): void => undefined}
    onDismiss={(): void => undefined}
    secondaryLabel="Example secondary"
    onSecondaryAction={(): void => undefined}
    {...props}
  >
    {children}
  </ContextModal>
)

describe("<ContextModal />", () => {
  it("renders an open modal with the provided content", () => {
    const { getByText } = render(
      <ContextModalWrapper>Example modal body</ContextModalWrapper>
    )
    expect(getByText("Example modal body")).toBeTruthy()
  })

  it("supports a dismiss action when escape key is pressed", async () => {
    const handleDismiss = vi.fn()
    render(
      <ContextModalWrapper onDismiss={handleDismiss}>
        Example modal body
      </ContextModalWrapper>
    )

    await user.keyboard("{Escape}")
    await waitFor(() => {
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })
  })

  it("supports a dismiss action when dismiss button is pressed", async () => {
    const handleConfirm = vi.fn()
    const handleDismiss = vi.fn()
    const { getByLabelText } = render(
      <ContextModalWrapper onConfirm={handleConfirm} onDismiss={handleDismiss}>
        Example modal body
      </ContextModalWrapper>
    )
    await user.click(getByLabelText(/Dismiss/i))
    await waitFor(() => {
      expect(handleConfirm).toHaveBeenCalledTimes(0)
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })
  })

  it("supports a confirm action when confirm button is pressed", async () => {
    const handleConfirm = vi.fn()
    const handleDismiss = vi.fn()
    const { getByText } = render(
      <ContextModalWrapper onConfirm={handleConfirm} onDismiss={handleDismiss}>
        Example modal body
      </ContextModalWrapper>
    )
    await user.click(getByText(/Confirm/i))
    await waitFor(() => {
      expect(handleConfirm).toHaveBeenCalledTimes(1)
      expect(handleDismiss).toHaveBeenCalledTimes(0)
    })
  })

  it("supports a secondary action when secondary button is pressed", async () => {
    const handleConfirm = vi.fn()
    const handleSecondary = vi.fn()
    const handleDismiss = vi.fn()
    const { getByText } = render(
      <ContextModalWrapper
        onConfirm={handleConfirm}
        onDismiss={handleDismiss}
        onSecondaryAction={handleSecondary}
      >
        Example modal body
      </ContextModalWrapper>
    )
    await user.click(getByText(/Example secondary/i))
    await waitFor(() => {
      expect(handleSecondary).toHaveBeenCalledTimes(1)
      expect(handleConfirm).toHaveBeenCalledTimes(0)
      expect(handleDismiss).toHaveBeenCalledTimes(0)
    })
  })
})
