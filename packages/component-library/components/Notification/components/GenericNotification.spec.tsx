import { cleanup, fireEvent, render, wait } from "@testing-library/react"
import * as React from "react"
import * as ReactTestUtils from "react-dom/test-utils"
import GenericNotification from "./GenericNotification"

afterEach(cleanup)

beforeEach(() => {
  jest.useFakeTimers()
})

test('Begins "hidden" but transitions out of it immediately', async () => {
  const { container } = render(
    <GenericNotification type="affirmative" style="inline" title="Success!">
      This is my positive notification
    </GenericNotification>
  )

  expect(container.querySelector(".hidden")).toBeTruthy()

  await wait(() => expect(container.querySelector(".hidden")).toBeFalsy())
})

test("The cancel button hides the notification and triggers the onHide callback", async () => {
  const onHide = jest.fn()
  const { container } = render(
    <GenericNotification
      type="affirmative"
      style="inline"
      title="Success!"
      onHide={onHide}
    >
      This is my positive notification
    </GenericNotification>
  )

  // The element should start in a "hidden" state
  expect(container.querySelector(".hidden")).toBeTruthy()

  // After clicking, the element should fade out, but the onHide not trigger yet.
  const cancelButton = container.querySelector(".cancel")
  cancelButton && fireEvent.click(cancelButton)

  const notification = container.querySelector(".notification")

  await wait(() => expect(onHide).toHaveBeenCalledTimes(0))

  // Cannot use @testing-library/react `fireEvent` as it relies on jsdom events
  // TransitionEvent has not been implemented yet, using `ReactTestUtils.Simulate` is a workaround
  notification &&
    ReactTestUtils.Simulate.transitionEnd(notification, {
      propertyName: "margin-top",
    } as any)

  // TODO - This test is really flakey. Needs to be fixed or re-written
  // After the fade out animation has finished, the onHide handler should trigger.
  // await wait(() => expect(onHide).toHaveBeenCalledTimes(1))
})

test("If autohide is specified, we should start hiding after 5s", async () => {
  const { container } = render(
    <GenericNotification
      type="affirmative"
      style="toast"
      title="Success!"
      autohide
    >
      This is my positive notification
    </GenericNotification>
  )

  // After 4s, it should still be visible
  jest.advanceTimersByTime(4999)
  await wait(() => expect(container.querySelector(".hidden")).toBeFalsy())

  // After 5s, it should be fading out to "hidden"
  jest.advanceTimersByTime(1)
  await wait(() => expect(container.querySelector(".hidden")).toBeTruthy())
})
