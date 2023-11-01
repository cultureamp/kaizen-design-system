import React from "react"
import { render, screen } from "@testing-library/react"
import { ProgressBar } from "./ProgressBar"

describe("<ProgressBar />", () => {
  it("has an accessible progress value expressed as a percentage", () => {
    const expectedAccessiblePercent: string = "60"

    render(
      <ProgressBar
        value={3}
        max={5}
        label=""
        isReversed={false}
        isAnimating={false}
        mood="positive"
        data-testid="id--progress-bar"
      />
    )
    expect(screen.getByTestId("id--progress-bar")).toHaveAttribute(
      "aria-valuenow",
      expectedAccessiblePercent
    )
  })
})
