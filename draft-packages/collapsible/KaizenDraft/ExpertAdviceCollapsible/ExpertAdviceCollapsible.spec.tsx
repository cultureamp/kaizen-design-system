import * as React from "react"
import { render, screen } from "@testing-library/react"
import { ExpertAdviceCollapsible } from ".."

it("renders children", () => {
  render(
    <ExpertAdviceCollapsible id="1" title="This title should be rendered">
      Expert advice collapsible component
    </ExpertAdviceCollapsible>
  )
  screen.getByText("This title should be rendered")
})

it("renders an icon in the header", () => {
  render(
    <ExpertAdviceCollapsible id="2" title="Expert advice collapsible icon">
      Expert advice collapsible component
    </ExpertAdviceCollapsible>
  )
  screen.getByRole("img", { name: "Collective Intelligence" })
})

it("renders children", () => {
  render(
    <ExpertAdviceCollapsible id="2" title="Expert advice collapsible children">
      Expert advice collapsible component
    </ExpertAdviceCollapsible>
  )
  screen.getByRole("region")
})
