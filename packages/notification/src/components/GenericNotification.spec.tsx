import { act, render } from "@testing-library/react"
import { fireEvent, waitFor } from "@testing-library/dom"
import React from "react"
import * as ReactTestUtils from "react-dom/test-utils"
import GenericNotification from "./GenericNotification"

afterEach(() => {
  jest.runAllTimers()
})

beforeEach(() => {
  jest.useFakeTimers()
})

describe("<GenericNotification />", () => {
  test('Begins "hidden" but transitions out of it immediately', () => {
    const { container } = render(
      <GenericNotification type="positive" style="inline" title="Success">
        This is my positive notification
      </GenericNotification>
    )

    expect(container.querySelector(".hidden")).toBeInTheDocument()
    process.nextTick(() => {
      expect(container.querySelector(".hidden")).not.toBeInTheDocument()
    })
  })

  test("The cancel button hides the notification and triggers the onHide callback", async () => {
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

  test("If autohide is specified, we should start hiding after 5s", async () => {
    const { container } = render(
      <GenericNotification
        type="positive"
        style="toast"
        title="Success"
        autohide
      >
        This is my positive notification
      </GenericNotification>
    )
    expect(container.querySelector(".hidden")).toBeTruthy()
    expect(container.querySelector(".hidden")).toBeInTheDocument()

    await act(async () => {
      jest.advanceTimersByTime(4999)
    })

    expect(container.querySelector(".hidden")).not.toBeInTheDocument()

    await waitFor(() => {
      expect(container.querySelector(".hidden")).toBeInTheDocument()
    })
  })
})
