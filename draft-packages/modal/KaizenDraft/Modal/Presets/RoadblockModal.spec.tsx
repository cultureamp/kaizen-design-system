import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { RoadblockModal, RoadblockModalProps } from "./RoadblockModal"
import "./matchMedia.mock"

const RoadblockModalWrapper = (
  props: Partial<RoadblockModalProps>
): JSX.Element => (
  <RoadblockModal
    isOpen={true}
    title="Example modal title"
    onDismiss={(): void => undefined}
    {...props}
  >
    Example modal body
  </RoadblockModal>
)

describe("<RoadblockModal />", () => {
  it("renders an open modal with the provided content", () => {
    const { getByText } = render(
      <RoadblockModalWrapper>Example modal body</RoadblockModalWrapper>
    )
    expect(getByText("Example modal body")).toBeTruthy()
  })

  it("supports a dismiss action when escape key is pressed", () => {
    const handleDismiss = jest.fn()
    const document = render(
      <RoadblockModalWrapper onDismiss={handleDismiss}>
        Example modal body
      </RoadblockModalWrapper>
    )
    fireEvent.keyUp(document.container, { key: "Escape", code: "Escape" })
    expect(handleDismiss).toHaveBeenCalledTimes(1)
  })

  it("supports a dismiss action when dismiss button is pressed", () => {
    const handleDismiss = jest.fn()
    const { getByLabelText } = render(
      <RoadblockModalWrapper onDismiss={handleDismiss}>
        Example modal body
      </RoadblockModalWrapper>
    )
    fireEvent.click(getByLabelText(/Dismiss/i))
    expect(handleDismiss).toHaveBeenCalledTimes(1)
  })

  it("supports a dismiss action when back button is pressed", () => {
    const handleDismiss = jest.fn()
    const { getByText } = render(
      <RoadblockModalWrapper onDismiss={handleDismiss}>
        Example modal body
      </RoadblockModalWrapper>
    )
    fireEvent.click(getByText(/Back/i))
    expect(handleDismiss).toHaveBeenCalledTimes(1)
  })
})
