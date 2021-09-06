import { cleanup, render } from "@testing-library/react"
import { fireEvent, waitFor } from "@testing-library/dom"
import * as React from "react"
import * as ReactTestUtils from "react-dom/test-utils"
import GenericNotification from "./GenericNotification"

afterEach(() => {
  cleanup()
  jest.runAllTimers()
})

beforeEach(() => {
  jest.useFakeTimers()
})

test('Begins "hidden" but transitions out of it immediately', async () => {
  const { container } = render(
    <GenericNotification type="affirmative" style="inline" title="Success">
      This is my positive notification
    </GenericNotification>
  )

  expect(container.querySelector(".hidden")).toBeTruthy()

  await waitFor(() => expect(container.querySelector(".hidden")).toBeFalsy())
})

test("The cancel button hides the notification and triggers the onHide callback", async () => {
  const onHide = jest.fn()
  const { container, getByTitle } = render(
    <GenericNotification
      type="affirmative"
      style="inline"
      title="Success"
      onHide={onHide}
    >
      This is my positive notification
    </GenericNotification>
  )

  // The element should start in a "hidden" state
  expect(container.querySelector(".hidden")).toBeTruthy()

  // After clicking, the element should fade out, but the onHide not trigger yet.
  const cancelButton = getByTitle("close notification")

  fireEvent.click(cancelButton)

  const notification = container.querySelector(".notification")

  await waitFor(() => {
    expect(notification).toBeTruthy()
  })

  // Cannot use @testing-library/react `fireEvent` as it relies on jsdom events
  // TransitionEvent has not been implemented yet, using `ReactTestUtils.Simulate` is a workaround
  notification &&
    ReactTestUtils.Simulate.transitionEnd(notification, {
      propertyName: "margin-top",
    } as any)

  await waitFor(() => {
    expect(container.querySelector(".notification")).toBeFalsy()
  })
  await waitFor(() => expect(onHide).toHaveBeenCalledTimes(1))
})

test("If autohide is specified, we should start hiding after 5s", async () => {
  const { container } = render(
    <GenericNotification
      type="affirmative"
      style="toast"
      title="Success"
      autohide
    >
      This is my positive notification
    </GenericNotification>
  )

  // After 4s, it should still be visible
  Promise.resolve().then(() => jest.advanceTimersByTime(3900))
  await waitFor(() => {
    expect(container.querySelector(".hidden")).toBeFalsy()
  })

  // By the 5th second, it will become hidden
  Promise.resolve().then(() => jest.advanceTimersByTime(100))
  await waitFor(() => {
    expect(container.querySelector(".hidden")).toBeTruthy()
  })
})
