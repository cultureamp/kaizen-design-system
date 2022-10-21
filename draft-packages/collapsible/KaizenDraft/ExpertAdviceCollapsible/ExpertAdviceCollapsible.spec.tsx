import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Paragraph } from "@kaizen/typography"
import { ExpertAdviceCollapsible } from ".."

it("renders the title", () => {
  render(
    <ExpertAdviceCollapsible id="1" title="This title should be rendered">
      Expert advice collapsible component
    </ExpertAdviceCollapsible>
  )
  expect(screen.getByText("This title should be rendered")).toBeInTheDocument()
})

it("renders an icon in the header", () => {
  render(
    <ExpertAdviceCollapsible id="1" title="Expert advice collapsible icon">
      Expert advice collapsible component
    </ExpertAdviceCollapsible>
  )
  expect(
    screen.getByRole("img", { name: "Collective Intelligence" })
  ).toBeInTheDocument()
})

it("renders collapsible component and its children", () => {
  render(
    <ExpertAdviceCollapsible id="1" title="Expert advice collapsible children">
      <Paragraph variant="body">Text Expert advice section content</Paragraph>
    </ExpertAdviceCollapsible>
  )
  expect(screen.getByLabelText("Toggle section")).toBeInTheDocument()
  expect(
    screen.getByText("Text Expert advice section content")
  ).toBeInTheDocument()
})
