import React from "react"
import { render } from "@testing-library/react"
import { ExampleComponent } from "."

describe("<ExampleComponent />", () => {
  it("renders", () => {
    render(<ExampleComponent />)
  })
})
