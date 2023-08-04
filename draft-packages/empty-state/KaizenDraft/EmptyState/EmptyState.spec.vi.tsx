import React from "react"
import { cleanup, render, screen } from "@testing-library/react"
import { EmptyStateProps } from "./EmptyState"
import { EmptyState } from "."

vi.mock("@kaizen/draft-illustration", () => ({
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
    automationId: "someAutomationId",
    headingText: "Some heading",
    bodyText: "Lorem ipsum dolor...",
  }

  it("renders an `id` attribute", () => {
    const { container } = render(<EmptyState {...defaultProps} />)

    expect(container.querySelector("#someId")).toBeTruthy()
  })

  it("renders a `data-automation-id` attribute", () => {
    const { container } = render(<EmptyState {...defaultProps} />)

    expect(
      container.querySelector("[data-automation-id='someAutomationId']")
    ).toBeTruthy()
  })

  it("renders given children", () => {
    const { getByText } = render(
      <EmptyState {...defaultProps}>
        <h1>Child Heading</h1>
      </EmptyState>
    )

    expect(getByText("Child Heading")).toBeTruthy()
  })

  describe("Illustrations", () => {
    it("renders the `informative` illustration by default", () => {
      const { getByText } = render(<EmptyState {...defaultProps} />)

      expect(getByText("EmptyStatesInformative_Component")).toBeTruthy()
    })

    it("renders the `informative` illustration when given `informative` as the type", () => {
      const props: EmptyStateProps = {
        ...defaultProps,
        illustrationType: "informative",
      }
      const { getByText } = render(<EmptyState {...props} />)

      expect(getByText("EmptyStatesInformative_Component")).toBeTruthy()
    })

    it("renders the `positive` illustration when given `positive` as the type", () => {
      const props: EmptyStateProps = {
        ...defaultProps,
        illustrationType: "positive",
      }
      const { getByText } = render(<EmptyState {...props} />)

      expect(getByText("EmptyStatesPositive_Component")).toBeTruthy()
    })

    it("renders the `neutral` illustration when given `neutral` as the type", () => {
      const props: EmptyStateProps = {
        ...defaultProps,
        illustrationType: "neutral",
      }
      const { getByText } = render(<EmptyState {...props} />)

      expect(getByText("EmptyStatesNeutral_Component")).toBeTruthy()
    })

    it("renders the `negative` illustration when given `negative` as the type", () => {
      const props: EmptyStateProps = {
        ...defaultProps,
        illustrationType: "negative",
      }
      const { getByText } = render(<EmptyState {...props} />)

      expect(getByText("EmptyStatesNegative_Component")).toBeTruthy()
    })

    it("renders the `action` illustration when given `action` as the type", () => {
      const props: EmptyStateProps = {
        ...defaultProps,
        illustrationType: "action",
      }
      const { getByText } = render(<EmptyState {...props} />)

      expect(getByText("EmptyStatesAction_Component")).toBeTruthy()
    })

    it("renders the correct heading level based on tag provided", () => {
      const props: EmptyStateProps = {
        ...defaultProps,
        headingProps: {
          variant: "heading-3",
          children: "Custom heading",
          tag: "h2",
        },
      }
      render(<EmptyState {...props} />)
      expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
    })
  })
})
