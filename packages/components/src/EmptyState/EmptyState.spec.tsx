import React from "react"
import { cleanup, render } from "@testing-library/react"
import { EmptyState, EmptyStateProps } from "./EmptyState"

jest.mock("~components/Illustration", () => ({
  EmptyStatesPositive: (): JSX.Element => (
    <div>EmptyStatesPositive_Component</div>
  ),
  EmptyStatesNeutral: (): JSX.Element => (
    <div>EmptyStatesNeutral_Component</div>
  ),
  EmptyStatesNegative: (): JSX.Element => (
    <div>EmptyStatesNegative_Component</div>
  ),
  EmptyStatesInformative: (): JSX.Element => (
    <div>EmptyStatesInformative_Component</div>
  ),
  EmptyStatesAction: (): JSX.Element => <div>EmptyStatesAction_Component</div>,
}))

describe("<EmptyState />", () => {
  afterEach(cleanup)

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
