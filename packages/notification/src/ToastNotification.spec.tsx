import { render, screen, waitFor } from "@testing-library/react"
import * as React from "react"
import ToastNotification from "./ToastNotification"

let spy = jest.spyOn(global.console, "warn")

beforeEach(() => {
  spy = jest.spyOn(global.console, "warn").mockImplementation(jest.fn())
})
afterEach(() => {
  spy.mockRestore()
})
test("The basic notification renders correctly", async () => {
  render(
    <ToastNotification type="positive" title="Success">
      It worked!
    </ToastNotification>
  )

  await screen.findByText("Success")
})
