import React from "react"
import { render } from "@testing-library/react"
import { TextArea } from "./index"

describe("<TextArea />", () => {
  it("renders a value when component is controlled", () => {
    const { getByText } = render(<TextArea value="Coffee" onChange={vi.fn()} />)
    expect(getByText("Coffee")).toBeVisible()
  })

  it("renders a default value when component is uncontrolled", () => {
    const { getByText } = render(<TextArea defaultValue="Coffee" />)
    expect(getByText("Coffee")).toBeVisible()
  })
})
