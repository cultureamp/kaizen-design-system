import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import { Button } from "@kaizen/button"
import { Tooltip } from "./index"

describe("<Tooltip />", () => {
  describe("Accessible descriptions", () => {
    it("will render a button will have an accessible description", async () => {
      render(
        <Tooltip
          text="Tooltip popup description for button"
          display="inline"
          isInitiallyVisible
          position="below"
        >
          <Button label="More info" />
        </Tooltip>
      )

      await waitFor(() => {
        expect(
          screen.getByRole("button", { name: "More info" })
        ).toHaveAccessibleDescription("Tooltip popup description for button")
      })
    })

    it("will render a button without an aria-describedby if the tooltip is not active", async () => {
      render(
        <Tooltip
          text="Tooltip popup description for button"
          display="inline"
          position="below"
        >
          <Button label="More info" />
        </Tooltip>
      )

      await waitFor(() => {
        expect(screen.queryByRole("tooltip")).toBe(null)
        expect(
          screen.getByRole("button", { name: "More info" })
        ).not.toHaveAttribute("aria-describedby")
      })
    })

    // Non-semantic elements without roles should not have aria-description on them - they will not read to screen readers and will throw an error
    it("will render non-semantic elements without accessible descriptions", async () => {
      render(
        <Tooltip
          text="Tooltip popup description for div"
          display="inline"
          isInitiallyVisible
          position="below"
        >
          <div>Non somantic element</div>
        </Tooltip>
      )
      await waitFor(() => {
        expect(screen.getByText("Non somantic element")).not.toHaveAttribute(
          "aria-describedby"
        )
      })
    })
  })

  it("will render elements with semantic roles with accessible descriptions", async () => {
    render(
      <Tooltip
        text="Tooltip popup description for div"
        display="inline"
        isInitiallyVisible
        position="below"
      >
        <div role="textbox" contentEditable="true" aria-multiline="true"></div>
      </Tooltip>
    )
    await waitFor(() => {
      expect(screen.getByRole("textbox")).toHaveAccessibleDescription(
        "Tooltip popup description for div"
      )
    })
  })
})
