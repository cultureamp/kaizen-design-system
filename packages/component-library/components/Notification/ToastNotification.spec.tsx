import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import ToastNotification from "./ToastNotification"

afterEach(cleanup)

test("The basic notification renders correctly", () => {
  const { container } = render(
    <ToastNotification type="affirmative" title="Success">
      It worked!
    </ToastNotification>
  )

  expect(container.firstChild).toMatchSnapshot()
})
