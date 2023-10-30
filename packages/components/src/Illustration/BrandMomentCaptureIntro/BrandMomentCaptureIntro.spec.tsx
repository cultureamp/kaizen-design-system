import React from "react"
import { render } from "@testing-library/react"
import { BrandMomentCaptureIntro, BrandMomentCaptureIntroProps } from "./BrandMomentCaptureIntro"

const BrandMomentCaptureIntroWrapper = (customProps?: Partial<BrandMomentCaptureIntroProps>): JSX.Element => (
  <BrandMomentCaptureIntro
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<BrandMomentCaptureIntro />", () => {
  it("does something", () => {
    render(<BrandMomentCaptureIntroWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
