import React from "react"
import { render } from "@testing-library/react"
import { ExampleComponent } from "./ExampleComponent"

describe("<ExampleComponent />", () => {
  it("renders", () => {
    const { getByTestId } = render(<ExampleComponent />)
    expect(getByTestId("example-component")).toBeInTheDocument()
  })
})
