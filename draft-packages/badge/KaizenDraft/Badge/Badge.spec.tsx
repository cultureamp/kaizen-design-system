import React from "react"
import { render } from "@testing-library/react"
import { Badge } from "./Badge"

describe("<Badge>", () => {
  it("does not render children as a prop if variant is equal to dot", () => {
    // @ts-expect-error
    // Variant `dot` does not allow `children`
    const { queryByText } = render(<Badge variant="dot">test</Badge>)
    expect(queryByText("test")).not.toBeInTheDocument()
  })
})
