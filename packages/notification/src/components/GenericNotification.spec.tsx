import React from "react"
import { act, render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ReactTestUtils from "react-dom/test-utils"
import GenericNotification, {
  GenericNotificationProps,
} from "./GenericNotification"
import styles from "./GenericNotification.module.scss"

const user = userEvent.setup()

const GenericNotificationWrapper = ({
  children,
  ...props
}: Partial<GenericNotificationProps>): JSX.Element => (
  <GenericNotification
    automationId="testid__notification"
    type="positive"
    style="inline"
    title="Success"
    {...props}
  >
    {children ?? "This is my positive notification"}
  </GenericNotification>
)

describe("<GenericNotification />", () => {
  it('begins "hidden" but transitions out of it immediately', async () => {
    const { getByTestId } = render(<GenericNotificationWrapper />)

    const notification = getByTestId("testid__notification")

    await waitFor(() => {
      expect(notification.classList.contains(styles.hidden)).toBe(true)
    })

    await waitFor(() => {
      expect(notification.classList.contains(styles.hidden)).toBe(false)
    })
  })

  it("hides the notification and triggers the onHide callback when the cancel button is clicked", async () => {
    const onHide = vi.fn()
    const { getByTestId } = render(
      <GenericNotificationWrapper onHide={onHide} />
    )

    const notification = getByTestId("testid__notification")

    await waitFor(() => {
      expect(notification.classList.contains(styles.hidden)).toBe(false)
    })

    const cancelButton = getByTestId("close-button")
    await user.click(cancelButton)

    // Cannot use @testing-library/react `fireEvent` as it relies on jsdom events
    // TransitionEvent has not been implemented yet, using `ReactTestUtils.Simulate` is a workaround
    act(() => {
      notification &&
        ReactTestUtils.Simulate.transitionEnd(notification, {
          propertyName: "margin-top",
        } as any)
    })

    await waitFor(() => expect(notification).not.toBeInTheDocument())
    expect(onHide).toHaveBeenCalledTimes(1)
  })

  it("starts hiding after 5s when autohide is specified", async () => {
    vi.useFakeTimers()

    const { getByTestId } = render(
      <GenericNotificationWrapper style="toast" autohide />
    )
    const notification = getByTestId("testid__notification")

    await waitFor(() => {
      expect(notification.classList.contains(styles.hidden)).toBe(true)
    })

    act(() => vi.advanceTimersByTime(4999))

    await waitFor(() => {
      expect(notification.classList.contains(styles.hidden)).toBe(false)
    })

    act(() => vi.advanceTimersByTime(1))

    await waitFor(() => {
      expect(notification.classList.contains(styles.hidden)).toBe(true)
    })

    vi.runAllTimers()
  })
})
