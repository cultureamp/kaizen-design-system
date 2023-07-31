import React from "react"
import { render } from "@testing-library/react"
import { Label } from "."

describe("<Label />", () => {
  it("renders a label", () => {
    const { getByText } = render(<Label labelText="Coffee" />)
    expect(getByText("Coffee")).toBeVisible()
  })
})
