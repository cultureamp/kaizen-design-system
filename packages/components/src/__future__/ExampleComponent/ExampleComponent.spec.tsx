import React from "react"
import { render } from "@testing-library/react"
import { ExampleComponent } from "./ExampleComponent"

describe("<ExampleComponent />", () => {
  it("renders", () => {
    render(<ExampleComponent />)
  })
})
