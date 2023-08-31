import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Collapsible } from "~components/Collapsible"
import { CollapsibleGroup } from "./CollapsibleGroup"

const user = userEvent.setup()
describe("<CollapsibleGroup />", () => {
  it("only toggles the height of the clicked panel in a group", async () => {
    const { getByTestId } = render(
      <CollapsibleGroup>
        <Collapsible id="1" open title="First panel">
          First panel content
        </Collapsible>
        <Collapsible id="2" open title="Second panel">
          Second panel content
        </Collapsible>
      </CollapsibleGroup>
    )

    const button = getByTestId("collapsible-button-1")
    const section = getByTestId("collapsible-section-2")

    await user.click(button)
    await waitFor(() => {
      expect(section.style.height).toEqual("auto")
    })
  })
})
