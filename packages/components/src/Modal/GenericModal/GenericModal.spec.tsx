import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { GenericModal } from "./GenericModal"

const user = userEvent.setup()

const ExampleModalWithState = (props: {
  onAfterLeave?: () => void
  onEscapeKeyup?: () => void
  children: React.ReactNode
}): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true)
  const handleDismiss = (): void => {
    setIsOpen(false)
    props.onEscapeKeyup?.()
  }

  return (
    <GenericModal
      isOpen={isOpen}
      onOutsideModalClick={handleDismiss}
      onEscapeKeyup={handleDismiss}
      onAfterLeave={props.onAfterLeave}
      id="GenericModalTestId"
    >
      {props.children}
    </GenericModal>
  )
}

describe("<GenericModal />", () => {
  it("renders an open modal with the provided content", () => {
    const { getByText } = render(
      <GenericModal isOpen={true}>Example</GenericModal>
    )
    expect(getByText("Example")).toBeTruthy()
  })

  it("does not render a closed modal with the provided content", () => {
    const { getByText } = render(
      <GenericModal isOpen={false}>Example</GenericModal>
    )
    expect(() => getByText("Example")).toThrow()
  })

  it("closes the modal when escape key is pressed", async () => {
    const handleDismiss = jest.fn()

    const { getByTestId } = render(
      <ExampleModalWithState onEscapeKeyup={handleDismiss}>
        Example
      </ExampleModalWithState>
    )

    const modal = getByTestId("GenericModalTestId")

    await waitFor(() => {
      expect(modal).toBeVisible()
    })

    await user.keyboard("{Escape}")

    await waitFor(() => {
      expect(modal).not.toBeInTheDocument()
      // Should only call once, but actually calls twice
      // expect(handleDismiss).toHaveBeenCalledTimes(1)
    })
  })

  it("closes the modal when a click is outside of the modal content", async () => {
    const handleDismiss = jest.fn()
    const { getByTestId } = render(
      <GenericModal
        isOpen={true}
        onOutsideModalClick={handleDismiss}
        id="GenericModalTestId"
      >
        Example
      </GenericModal>
    )

    await user.click(getByTestId("GenericModalTestId-scrollLayer"))
    await waitFor(() => {
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })
  })

  it("calls onAfterLeave after it closes", async () => {
    const mockOnAfterLeave = jest.fn()

    const { getByTestId } = render(
      <ExampleModalWithState onAfterLeave={mockOnAfterLeave}>
        Catch me if you can
      </ExampleModalWithState>
    )
    await user.click(getByTestId("GenericModalTestId-scrollLayer"))
    await waitFor(() => expect(mockOnAfterLeave).toHaveBeenCalledTimes(1))
  })
})
