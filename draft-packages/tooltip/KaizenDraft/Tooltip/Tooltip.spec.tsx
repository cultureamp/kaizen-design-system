import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import { Button } from "@kaizen/button"
import { TextArea } from "@kaizen/draft-form"
import { Tooltip } from "./index"

describe("<Tooltip />", () => {
  describe("Accessible descriptions are passed only to interactive elements", () => {
    it("will render a button will have an accessible description", async () => {
      render(
        <div id="portal-id" style={{ width: "500px", height: "500px" }}>
          <Tooltip
            text="Tooltip popup description for button"
            display="inline"
            isInitiallyVisible
            position="below"
          >
            <Button label="More info" />
          </Tooltip>
          thing
        </div>
      )

      await waitFor(() => {
        expect(
          screen.getByRole("button", { name: "More info" })
        ).toHaveAccessibleDescription("Tooltip popup description for button")
      })
    })
    it("will render an input with an accessible description", async () => {
      render(
        <div id="portal-id" style={{ width: "500px", height: "500px" }}>
          <Tooltip
            text="Tooltip popup description for input"
            display="inline"
            isInitiallyVisible
            position="below"
          >
            <TextArea />
          </Tooltip>
          thing
        </div>
      )

      await waitFor(() => {
        expect(screen.getByRole("textbox")).toHaveAccessibleDescription(
          "Tooltip popup description for input"
        )
      })
    })
    // Non-semantic elements without roles should not have aria-description on them - they will not read to screen readers
    it("will render non-semantic elements without aria-describedby", async () => {
      render(
        <div id="portal-id" style={{ width: "500px", height: "500px" }}>
          <Tooltip
            text="Tooltip popup description for div"
            display="inline"
            isInitiallyVisible
            position="below"
          >
            <div>Non somantic element</div>
          </Tooltip>
          thing
        </div>
      )
      await waitFor(() => {
        expect(screen.getByText("Non somantic element")).not.toHaveAttribute(
          "aria-describedby"
        )
      })
    })
  })
})
// it("will render a button with the aria-describedby attribute with undefined when closed", () => {
//   expect(true).toBe(true)
// })
// it("will render a component with an accessible role with the aria-describedby attribute when open", () => {
//   expect(true).toBe(true)
// })
// it("will not render a non-semantic div with an aria-describedby", () => {
//   expect(true).toBe(true)
// })
