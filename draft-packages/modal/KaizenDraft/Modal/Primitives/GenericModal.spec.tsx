import { cleanup, render, fireEvent, configure } from "@testing-library/react"
import * as React from "react"
import GenericModal from "./GenericModal"
import ModalAccessibleLabel from "./ModalAccessibleLabel"

configure({ testIdAttribute: "data-automation-id" })

afterEach(cleanup)

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
})
