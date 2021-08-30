import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import ToastNotification from "./ToastNotification"

let spy = jest.spyOn(global.console, "warn")

beforeEach(() => {
  spy = jest.spyOn(global.console, "warn").mockImplementation(jest.fn())
})
afterEach(() => {
  spy.mockRestore()
  cleanup()
})
test("The basic notification renders correctly", () => {
  const { getByRole } = render(
    <ToastNotification type="affirmative" title="Success">
      It worked!
    </ToastNotification>
  )

  expect(getByRole("heading").textContent).toEqual("Success")
})
