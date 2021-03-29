import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import ToastNotification from "./ToastNotification"

afterEach(cleanup)

test("The basic notification renders correctly", () => {
  const { getByRole } = render(
    <ToastNotification type="affirmative" title="Success">
      It worked!
    </ToastNotification>
  )

  expect(getByRole("heading").textContent).toEqual("Success")
})
