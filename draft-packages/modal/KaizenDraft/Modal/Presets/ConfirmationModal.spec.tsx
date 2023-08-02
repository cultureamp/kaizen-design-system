import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ConfirmationModal, ConfirmationModalProps } from "./ConfirmationModal"
import "./matchMedia.mock"

const user = userEvent.setup()

const ConfirmationModalWrapper = ({
  children,
  ...props
}: Partial<ConfirmationModalProps>): JSX.Element => (
  <ConfirmationModal
    mood="informative"
    isOpen={true}
    title="Example Modal Title"
    onDismiss={(): void => undefined}
    onConfirm={(): void => undefined}
    {...props}
  >
    {children}
  </ConfirmationModal>
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

  it("supports a dismiss action when escape key is pressed", async () => {
    const handleConfirm = jest.fn()
    const handleDismiss = jest.fn()

    render(
      <ConfirmationModalWrapper
        onDismiss={handleDismiss}
        onConfirm={handleConfirm}
      >
        Example modal body
      </ConfirmationModalWrapper>
    )

    await user.keyboard("{Escape}")
    await waitFor(() => {
      expect(handleDismiss).toHaveBeenCalledTimes(1)
      expect(handleConfirm).toHaveBeenCalledTimes(0)
    })
  })

  it("supports a dismiss action when dismiss button is pressed", async () => {
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
    await user.click(getByLabelText(/Dismiss/i))
    await waitFor(() => {
      expect(handleConfirm).toHaveBeenCalledTimes(0)
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })
  })

  it("supports a dismiss action when cancel button is pressed", async () => {
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
    await user.click(getByText(/Cancel/i))
    await waitFor(() => {
      expect(handleConfirm).toHaveBeenCalledTimes(0)
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })
  })

  it("supports a confirm action when confirm button is pressed", async () => {
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
    await user.click(getByText(/Confirm/i))
    await waitFor(() => {
      expect(handleConfirm).toHaveBeenCalledTimes(1)
      expect(handleDismiss).toHaveBeenCalledTimes(0)
    })
  })
})
