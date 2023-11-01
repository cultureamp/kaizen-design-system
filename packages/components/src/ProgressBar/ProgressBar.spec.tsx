import React from "react"
import { render } from "@testing-library/react"
import { ProgressBar, ProgressBarProps } from "./ProgressBar"

const ProgressBarWrapper = (
  customProps?: Partial<ProgressBarProps>
): JSX.Element => (
  <ProgressBar
    value={60}
    max={100}
    label=""
    isReversed={false}
    isAnimating={false}
    mood="positive"
    {...customProps}
  />
)

describe("<ProgressBar />", () => {
  it("has an accessible progress value", () => {
    render(
      <ProgressBar
        value={60}
        max={100}
        label=""
        isReversed={false}
        isAnimating={false}
        mood="positive"
      />
    )
    expect(true).toBe(false)
  })
})
