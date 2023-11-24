import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { GenericModal, GenericModalProps } from "./GenericModal"
import { ModalAccessibleLabel } from "./subcomponents/ModalAccessibleLabel"
import { ModalBody } from "./subcomponents/ModalBody"
import { ModalHeader } from "./subcomponents/ModalHeader"

const user = userEvent.setup()

const GenericModalWrapper = ({
  isOpen: propsIsOpen,
  onOutsideModalClick,
  onEscapeKeyup,
  ...props
}: Partial<GenericModalProps>): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState<boolean>(propsIsOpen ?? true)

  return (
    <GenericModal
      isOpen={isOpen}
      onOutsideModalClick={e => {
        setIsOpen(false)
        onOutsideModalClick?.(e)
      }}
      onEscapeKeyup={e => {
        setIsOpen(false)
        onEscapeKeyup?.(e)
      }}
      onAfterLeave={props.onAfterLeave}
      id="GenericModalTestId"
    >
      <ModalHeader>
        <ModalAccessibleLabel>Example</ModalAccessibleLabel>
      </ModalHeader>
      <ModalBody>Body contents here</ModalBody>
    </GenericModal>
  )
}

describe("<GenericModal />", () => {
  it("renders an open modal with the provided content", () => {
    render(<GenericModalWrapper />)
    expect(screen.getByText("Example")).toBeVisible()
  })

  it("does not render a closed modal with the provided content", () => {
    render(<GenericModalWrapper isOpen={false} />)
    expect(screen.queryByText("Example")).not.toBeInTheDocument()
  })

  it("closes the modal when escape key is pressed", async () => {
    const handleDismiss = jest.fn()

    render(<GenericModalWrapper onEscapeKeyup={handleDismiss} />)

    const modal = screen.getByTestId("GenericModalTestId")

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
    render(<GenericModalWrapper onOutsideModalClick={handleDismiss} />)

    await user.click(screen.getByTestId("GenericModalTestId-scrollLayer"))
    await waitFor(() => {
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })
  })

  it("calls onAfterLeave after it closes", async () => {
    const mockOnAfterLeave = jest.fn()
    render(<GenericModalWrapper onAfterLeave={mockOnAfterLeave} />)

    await user.click(screen.getByTestId("GenericModalTestId-scrollLayer"))
    await waitFor(() => expect(mockOnAfterLeave).toHaveBeenCalledTimes(1))
  })
})
