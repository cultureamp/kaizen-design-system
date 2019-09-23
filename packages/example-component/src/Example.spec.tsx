import { cleanup, render } from "@testing-library/react"
import * as React from "react"

import { Example } from "."

afterEach(cleanup)

it("merely renders", () => {
  const { queryByText } = render(<Example />)
  expect(queryByText("🎋")).toBeTruthy()
})
