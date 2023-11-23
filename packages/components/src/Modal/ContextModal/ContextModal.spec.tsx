import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { mockMatchMedia } from "~utils/useMediaQueries.spec"
import { ContextModal, ContextModalProps } from "./ContextModal"

const user = userEvent.setup()

const ContextModalWrapper = ({
  children,
  ...props
}: Partial<ContextModalProps>): JSX.Element => (
  <ContextModal
    isOpen={true}
    title="Example modal title"
    onConfirm={() => undefined}
    onDismiss={() => undefined}
    secondaryLabel="Example secondary"
    onSecondaryAction={() => undefined}
    {...props}
  >
    {children}
  </ContextModal>
)

describe("<ContextModal />", () => {
  beforeEach(() => {
    mockMatchMedia()
  })

  it("supports a dismiss action when dismiss button is pressed", async () => {
    const handleConfirm = jest.fn()
    const handleDismiss = jest.fn()
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
    const handleConfirm = jest.fn()
    const handleDismiss = jest.fn()
    const { getByText } = render(
      <ContextModalWrapper onDismiss={handleDismiss} onConfirm={handleConfirm}>
        Example modal body
      </ContextModalWrapper>
    )
    await user.click(getByText(/Confirm/i))
    await waitFor(() => {
      expect(handleConfirm).toHaveBeenCalledTimes(1)
      expect(handleDismiss).toHaveBeenCalledTimes(0)
    })
  })
})
