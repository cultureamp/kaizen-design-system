import React from "react"
import {
  render,
  fireEvent,
  configure,
  waitFor,
  screen,
} from "@testing-library/react"
import GenericModal from "./GenericModal"
import ModalAccessibleLabel from "./ModalAccessibleLabel"

configure({ testIdAttribute: "data-automation-id" })

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
      children={props.children}
      automationId="GenericModalAutomationId"
    />
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

  it("closes the modal when escape key is pressed", () => {
    const handleDismiss = jest.fn()
    const document = render(
      <GenericModal isOpen={true} onEscapeKeyup={handleDismiss}>
        <ModalAccessibleLabel>Example</ModalAccessibleLabel>
      </GenericModal>
    )
    fireEvent.keyUp(document.container, { key: "Escape", code: "Escape" })
    expect(handleDismiss).toHaveBeenCalledTimes(1)
  })

  it("closes the modal when a click is outside of the modal content", () => {
    const handleDismiss = jest.fn()
    const { getByTestId } = render(
      <GenericModal
        isOpen={true}
        onOutsideModalClick={handleDismiss}
        automationId="GenericModalAutomationId"
      >
        <ModalAccessibleLabel>Example</ModalAccessibleLabel>
      </GenericModal>
    )
    fireEvent.click(getByTestId("GenericModalAutomationId-scrollLayer"))
    expect(handleDismiss).toHaveBeenCalledTimes(1)
  })

  it("warns when a <ModalAccessibleLabel /> is not rendered", async () => {
    const mockWarnFn = jest.fn()
    const spy = jest
      .spyOn(global.console, "warn")
      .mockImplementation(mockWarnFn)
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
    const mockOnAfterLeave = jest.fn()

    render(
      <ExampleModalWithState onAfterLeave={mockOnAfterLeave}>
        Catch me if you can
      </ExampleModalWithState>
    )
    fireEvent.click(screen.getByTestId("GenericModalAutomationId-scrollLayer"))
    await waitFor(() => expect(mockOnAfterLeave).toHaveBeenCalledTimes(1))
  })
})
