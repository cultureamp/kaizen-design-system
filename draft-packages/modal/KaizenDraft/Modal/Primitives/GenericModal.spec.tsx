import { cleanup, render, fireEvent, configure } from "@testing-library/react"
import * as React from "react"
import GenericModal from "./GenericModal"

configure({ testIdAttribute: "data-automation-id" })

afterEach(cleanup)

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

  it("closes the modal when escape key is pressed", () => {
    const handleDismiss = jest.fn()
    const document = render(
      <GenericModal isOpen={true} onEscapeKeyup={handleDismiss}>
        Example
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
        Example
      </GenericModal>
    )
    fireEvent.click(getByTestId("GenericModalAutomationId-scrollLayer"))
    expect(handleDismiss).toHaveBeenCalledTimes(1)
  })
})
