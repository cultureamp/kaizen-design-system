import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import { Button } from "~components/Button"
import { Tooltip } from "./index"

describe("<Tooltip />", () => {
  describe("Linking the tooltip to the inner element with aria-describedby", () => {
    it("adds an accessible description when wrapping Kaizen Button", async () => {
      render(
        <Tooltip
          text="Tooltip popup description for Kaizen Button"
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
        ).toHaveAccessibleDescription(
          "Tooltip popup description for Kaizen Button"
        )
      })
    })

    it("doesn't add an accessible description if the tooltip is inactive", async () => {
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

    // Non-semantic elements without roles should not have aria-description on them.
    // They won't read to all screen readers as expected and may be reported in Storybook's accessibility tab (which uses Axe under the hood)
    it("doesn't add an accessible description when wrapping a non-semantic element", async () => {
      render(
        <Tooltip
          text="Tooltip popup description for div"
          display="inline"
          isInitiallyVisible
          position="below"
        >
          <div>Non semantic element</div>
        </Tooltip>
      )
      await waitFor(() => {
        expect(screen.getByText("Non semantic element")).not.toHaveAttribute(
          "aria-describedby"
        )
      })
    })
  })

  it("adds an accessible description when wrapping a semantic element", async () => {
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
