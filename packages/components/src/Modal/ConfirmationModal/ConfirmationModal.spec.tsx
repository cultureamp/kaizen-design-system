import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { vi } from "vitest"
import { mockMatchMedia } from "~components/utils/useMediaQueries.spec"
import { ConfirmationModal, ConfirmationModalProps } from "./ConfirmationModal"
const user = userEvent.setup()

const ConfirmationModalWrapper = ({
  children,
  onDismiss: propsOnDismiss = (): void => undefined,
  onConfirm: propsOnConfirm = (): void => undefined,
}: Partial<ConfirmationModalProps>): JSX.Element => (
  <ConfirmationModal
    variant="success"
    isOpen={true}
    title="Example Modal Title"
    onDismiss={propsOnDismiss}
    onConfirm={propsOnConfirm}
  >
    {children}
  </ConfirmationModal>
)

describe("<ConfirmationModal />", () => {
  beforeEach(() => {
    mockMatchMedia()
  })

  it("supports a dismiss action when dismiss button is pressed", async () => {
    const handleConfirm = vi.fn()
    const handleDismiss = vi.fn()
    const { getByLabelText } = render(
      <ConfirmationModalWrapper
        onConfirm={handleConfirm}
        onDismiss={handleDismiss}
      >
        Example modal body
      </ConfirmationModalWrapper>,
    )
    await user.click(getByLabelText(/Dismiss/i))
    await waitFor(() => {
      expect(handleConfirm).toHaveBeenCalledTimes(0)
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })
  })

  it("supports a dismiss action when cancel button is pressed", async () => {
    const handleConfirm = vi.fn()
    const handleDismiss = vi.fn()
    const { getByText } = render(
      <ConfirmationModalWrapper
        onDismiss={handleDismiss}
        onConfirm={handleConfirm}
      >
        Example modal body
      </ConfirmationModalWrapper>,
    )
    await user.click(getByText(/Cancel/i))
    await waitFor(() => {
      expect(handleDismiss).toHaveBeenCalledTimes(1)
      expect(handleConfirm).toHaveBeenCalledTimes(0)
    })
  })

  it("supports a confirm action when confirm button is pressed", async () => {
    const handleConfirm = vi.fn()
    const handleDismiss = vi.fn()
    const { getByText } = render(
      <ConfirmationModalWrapper
        onDismiss={handleDismiss}
        onConfirm={handleConfirm}
      >
        Example modal body
      </ConfirmationModalWrapper>,
    )
    await user.click(getByText(/Confirm/i))
    await waitFor(() => {
      expect(handleConfirm).toHaveBeenCalledTimes(1)
      expect(handleDismiss).toHaveBeenCalledTimes(0)
    })
  })
})
