import React from "react"
import { render } from "@testing-library/react"
import { EmptyState, EmptyStateProps } from "./EmptyState"

describe("<EmptyState />", () => {
  const defaultProps: EmptyStateProps = {
    id: "someId",
    headingProps: {
      children: "Some heading",
      variant: "heading-1",
    },
    bodyText: "Lorem ipsum dolor...",
  }

  it("renders an `id` attribute", () => {
    const { container } = render(<EmptyState {...defaultProps} />)

    expect(container.querySelector("#someId")).toBeTruthy()
  })

  it("renders given children", () => {
    const { getByText } = render(
      <EmptyState {...defaultProps}>
        <h1>Child Heading</h1>
      </EmptyState>
    )

    expect(getByText("Child Heading")).toBeTruthy()
  })
})
