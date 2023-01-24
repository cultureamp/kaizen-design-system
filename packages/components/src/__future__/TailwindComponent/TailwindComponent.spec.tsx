import React from "react"
import { render } from "@testing-library/react"
import { TailwindComponent } from "."

describe("<TailwindComponent />", () => {
  it("renders", () => {
    render(<TailwindComponent />)
  })
})
