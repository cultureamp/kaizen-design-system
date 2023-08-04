import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { RoadblockModal, RoadblockModalProps } from "./RoadblockModal"
import "./matchMedia.mock"

const user = userEvent.setup()

const RoadblockModalWrapper = ({
  children,
  ...props
}: Partial<RoadblockModalProps>): JSX.Element => (
  <RoadblockModal
    isOpen={true}
    title="Example modal title"
    onDismiss={(): void => undefined}
    {...props}
  >
    {children}
  </RoadblockModal>
)

describe("<RoadblockModal />", () => {
  it("renders an open modal with the provided content", () => {
    const { getByText } = render(
      <RoadblockModalWrapper>Example modal body</RoadblockModalWrapper>
    )
    expect(getByText("Example modal body")).toBeTruthy()
  })

  it("supports a dismiss action when escape key is pressed", async () => {
    const handleDismiss = vi.fn()
    render(
      <RoadblockModalWrapper onDismiss={handleDismiss}>
        Example modal body
      </RoadblockModalWrapper>
    )

    await user.keyboard("{Escape}")
    await waitFor(() => {
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })
  })

  it("supports a dismiss action when dismiss button is pressed", async () => {
    const handleDismiss = vi.fn()
    const { getByLabelText } = render(
      <RoadblockModalWrapper onDismiss={handleDismiss}>
        Example modal body
      </RoadblockModalWrapper>
    )
    await user.click(getByLabelText(/Dismiss/i))
    await waitFor(() => {
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })
  })

  it("supports a dismiss action when back button is pressed", async () => {
    const handleDismiss = vi.fn()
    const { getByText } = render(
      <RoadblockModalWrapper onDismiss={handleDismiss}>
        Example modal body
      </RoadblockModalWrapper>
    )
    await user.click(getByText(/Back/i))
    await waitFor(() => {
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })
  })
})
