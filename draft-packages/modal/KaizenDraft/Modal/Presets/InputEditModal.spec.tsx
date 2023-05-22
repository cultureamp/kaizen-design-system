import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { InputEditModal, InputEditModalProps } from "./InputEditModal"
import "./matchMedia.mock"

const user = userEvent.setup()

const InputEditModalWrapper = ({
  children,
  ...props
}: Partial<InputEditModalProps>): JSX.Element => (
  <InputEditModal
    isOpen={true}
    mood="positive"
    title="Example modal title"
    onSubmit={(): void => undefined}
    onDismiss={(): void => undefined}
    {...props}
  >
    {children}
  </InputEditModal>
)

describe("<InputEditModal />", () => {
  it("renders an open modal with the provided content", () => {
    const { getByText } = render(
      <InputEditModalWrapper>Example modal body</InputEditModalWrapper>
    )
    expect(getByText("Example modal body")).toBeTruthy()
  })

  it("supports a dismiss action when escape key is pressed", async () => {
    const handleDismiss = jest.fn()
    render(
      <InputEditModalWrapper onDismiss={handleDismiss}>
        Example modal body
      </InputEditModalWrapper>
    )

    await user.keyboard("{Escape}")
    await waitFor(() => {
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })
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
      <InputEditModalWrapper onSubmit={handleSubmit} onDismiss={handleDismiss}>
        Example modal body
      </InputEditModalWrapper>
    )
    await user.click(getByText(/Cancel/i))
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(0)
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })
  })

  it("supports a submit action when submit button is pressed", async () => {
    const handleSubmit = jest.fn()
    const handleDismiss = jest.fn()
    const { getByText } = render(
      <InputEditModalWrapper onSubmit={handleSubmit} onDismiss={handleDismiss}>
        Example modal body
      </InputEditModalWrapper>
    )
    await user.click(getByText(/Submit/i))
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1)
      expect(handleDismiss).toHaveBeenCalledTimes(0)
    })
  })

  it("supports a secondary action when secondary-action and secondary-label both props are provided", async () => {
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
    await user.click(getByText(/Secondary button/i))
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(0)
      expect(handleDismiss).toHaveBeenCalledTimes(0)
      expect(handleSecondaryAction).toHaveBeenCalledTimes(1)
    })
  })

  it("dismiss works as usual when only one of the prop (secondary-action / secondary-label) is provided", async () => {
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
    await user.click(getByText(/Cancel/i))
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(0)
      expect(handleDismiss).toHaveBeenCalledTimes(1)
      expect(handleSecondaryAction).toHaveBeenCalledTimes(0)
    })
  })
})
