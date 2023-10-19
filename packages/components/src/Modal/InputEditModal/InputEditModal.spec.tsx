import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { mockMatchMedia } from "~utils/useMediaQueries.spec"
import { InputEditModal, InputEditModalProps } from "./InputEditModal"

const user = userEvent.setup()

const InputEditModalWrapper = ({
  children,
  ...props
}: Partial<InputEditModalProps>): JSX.Element => (
  <InputEditModal
    isOpen={true}
    title="Example modal title"
    onSubmit={(): void => undefined}
    onDismiss={(): void => undefined}
    mood="positive"
    {...props}
  >
    {children}
  </InputEditModal>
)

describe("<InputEditModal />", () => {
  beforeEach(() => {
    mockMatchMedia()
  })

  it("supports a dismiss action when dismiss button is pressed", async () => {
    const handleSubmit = jest.fn()
    const handleDismiss = jest.fn()
    const { getByLabelText } = render(
      <InputEditModalWrapper onSubmit={handleSubmit} onDismiss={handleDismiss}>
        Example modal body
      </InputEditModalWrapper>
    )
    await user.click(getByLabelText(/Dismiss/i))
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(0)
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })
  })

  it("supports a dismiss action when cancel button is pressed", async () => {
    const handleSubmit = jest.fn()
    const handleDismiss = jest.fn()
    const { getByText } = render(
      <InputEditModalWrapper onDismiss={handleDismiss} onSubmit={handleSubmit}>
        Example modal body
      </InputEditModalWrapper>
    )
    await user.click(getByText(/Cancel/i))
    await waitFor(() => {
      expect(handleDismiss).toHaveBeenCalledTimes(1)
      expect(handleSubmit).toHaveBeenCalledTimes(0)
    })
  })

  it("supports a Submit action when Submit button is pressed", async () => {
    const handleSubmit = jest.fn()
    const handleDismiss = jest.fn()
    const { getByText } = render(
      <InputEditModalWrapper onDismiss={handleDismiss} onSubmit={handleSubmit}>
        Example modal body
      </InputEditModalWrapper>
    )
    await user.click(getByText(/Submit/i))
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1)
      expect(handleDismiss).toHaveBeenCalledTimes(0)
    })
  })
})
