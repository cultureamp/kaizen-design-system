import React from "react"
import { fireEvent, waitFor } from "@testing-library/dom"
import { act, render } from "@testing-library/react"
import ReactTestUtils from "react-dom/test-utils"
import { GenericNotification } from "./GenericNotification"

describe("<GenericNotification />", () => {
  afterEach(() => {
    jest.runAllTimers()
  })

  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('begins "hidden" but transitions out of it immediately', async () => {
    const { container } = render(
      <GenericNotification type="positive" style="inline" title="Success">
        This is my positive notification
      </GenericNotification>
    )

    await waitFor(() => {
      expect(container.querySelector(".hidden")).toBeInTheDocument()
    })

    await act(async () => {
      jest.advanceTimersByTime(50)
    })

    await waitFor(() => {
      expect(container.querySelector(".hidden")).not.toBeInTheDocument()
    })
  })

  it("hides the notification and triggers the onHide callback when the cancel button is clicked", async () => {
    const onHide = jest.fn()
    const { container, getByTestId } = render(
      <GenericNotification
        type="positive"
        style="inline"
        title="Success"
        onHide={onHide}
      >
        Notification Text
      </GenericNotification>
    )

    // The element should start in a "hidden" state
    expect(container.querySelector(".hidden")).toBeTruthy()

    // After clicking, the element should fade out, but the onHide not trigger yet.
    const cancelButton = getByTestId("close-button")
    const notification = container.querySelector(".notification")

    fireEvent(cancelButton, new MouseEvent("click"))

    await waitFor(() => {
      expect(notification).toBeTruthy()
    })

    // Cannot use @testing-library/react `fireEvent` as it relies on jsdom events
    // TransitionEvent has not been implemented yet, using `ReactTestUtils.Simulate` is a workaround
    act(() => {
      notification &&
        ReactTestUtils.Simulate.transitionEnd(notification, {
          propertyName: "margin-top",
        } as any)
    })

    await waitFor(() => {
      expect(notification).not.toBeInTheDocument()
    })
    await waitFor(() => expect(onHide).toHaveBeenCalledTimes(1))
  })
})
