import React from "react"
import { render, waitFor, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import GenericModal from "./GenericModal"
import { ModalAccessibleLabel } from "./ModalAccessibleLabel"

const user = userEvent.setup()

const ExampleModalWithState = (props: {
  onAfterLeave: () => void
  children: React.ReactNode
}): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true)
  const handleDismiss = (): void => setIsOpen(false)

  return (
    <GenericModal
      isOpen={isOpen}
      onOutsideModalClick={handleDismiss}
      onEscapeKeyup={handleDismiss}
      onAfterLeave={props.onAfterLeave}
      automationId="GenericModalAutomationId"
    >
      {props.children}
    </GenericModal>
  )
}

describe("<GenericModal />", () => {
  it("renders an open modal with the provided content", () => {
    const { getByText } = render(
      <GenericModal isOpen={true}>
        <ModalAccessibleLabel>Example</ModalAccessibleLabel>
      </GenericModal>
    )
    expect(getByText("Example")).toBeTruthy()
  })

  it("does not render a closed modal with the provided content", () => {
    const { getByText } = render(
      <GenericModal isOpen={false}>
        <ModalAccessibleLabel>Example</ModalAccessibleLabel>
      </GenericModal>
    )
    expect(() => getByText("Example")).toThrow()
  })

  it("closes the modal when escape key is pressed", async () => {
    const handleDismiss = vi.fn()
    render(
      <GenericModal isOpen={true} onEscapeKeyup={handleDismiss}>
        <ModalAccessibleLabel>Example</ModalAccessibleLabel>
      </GenericModal>
    )

    await user.keyboard("{Escape}")
    await waitFor(() => {
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })
  })

  it("closes the modal when a click is outside of the modal content", async () => {
    const handleDismiss = vi.fn()
    const { getByTestId } = render(
      <GenericModal
        isOpen={true}
        onOutsideModalClick={handleDismiss}
        automationId="GenericModalAutomationId"
      >
        <ModalAccessibleLabel>Example</ModalAccessibleLabel>
      </GenericModal>
    )
    await user.click(getByTestId("GenericModalAutomationId-scrollLayer"))
    await waitFor(() => {
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })
  })

  it("warns when a <ModalAccessibleLabel /> is not rendered", async () => {
    const mockWarnFn = vi.fn()
    const spy = vi.spyOn(global.console, "warn").mockImplementation(mockWarnFn)
    render(<GenericModal isOpen={true}>Catch me if you can</GenericModal>)
    await waitFor(() => {
      expect(mockWarnFn).toBeCalled()
      expect(mockWarnFn).toBeCalledWith(
        expect.stringContaining(
          "When using the Modal component, you must provide a label for the modal. Make sure you have a <ModalAccessibleLabel /> component with content that labels the modal."
        )
      )
    })
    spy.mockRestore()
  })

  it("calls onAfterLeave after it closes", async () => {
    const mockOnAfterLeave = vi.fn()

    render(
      <ExampleModalWithState onAfterLeave={mockOnAfterLeave}>
        Catch me if you can
      </ExampleModalWithState>
    )
    await user.click(screen.getByTestId("GenericModalAutomationId-scrollLayer"))
    await waitFor(() => expect(mockOnAfterLeave).toHaveBeenCalledTimes(1))
  })
})
