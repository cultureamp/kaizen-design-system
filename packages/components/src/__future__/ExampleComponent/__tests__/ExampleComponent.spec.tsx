import * as React from "react"
import { render } from "@testing-library/react"
import { ExampleComponent } from ".."
import "@testing-library/jest-dom"

describe("<ExampleComponent />", () => {
  it("renders", () => {
    render(<ExampleComponent />)
  })
})
