import { render } from "@testing-library/react"
import { configure, queryByTestId } from "@testing-library/dom"
import * as React from "react"
import { ExpertAdviceCollapsible } from ".."

configure({ testIdAttribute: "data-automation-id" })

it("renders the title as a heading", () => {
  const { getByTestId } = render(
    <ExpertAdviceCollapsible id="1" title="This title should be rendered">
      Expert advice collapsible component
    </ExpertAdviceCollapsible>
  )
  const titleText = getByTestId("collapsible-header-1").querySelector("div")
  expect(titleText).toHaveTextContent("This title should be rendered")
})

it("renders an icon in the header", () => {
  const { getByTestId } = render(
    <ExpertAdviceCollapsible id="2" title="Expert advice collapsible icon">
      Expert advice collapsible component
    </ExpertAdviceCollapsible>
  )
  const icon = getByTestId("expert-advice-icon")
  expect(icon).toBeInTheDocument()
})
