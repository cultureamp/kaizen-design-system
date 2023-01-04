import React from "react"
import { render, screen } from "@testing-library/react"
import { LikertScaleLegacy, LikertScaleProps } from "./LikertScaleLegacy"
import { Scale } from "./types"

const scale: Scale = [
  {
    value: -1,
    label: "Not rated",
  },
  {
    value: 1,
    label: "Strong Disagree",
  },
  {
    value: 2,
    label: "Disagree",
  },
  {
    value: 3,
    label: "Neither agree or disagree",
  },
  {
    value: 4,
    label: "Agree",
  },
  {
    value: 5,
    label: "Strongly agree",
  },
]

const LikertScaleLegacyWrapper = (
  props: Partial<LikertScaleProps>
): JSX.Element => (
  <LikertScaleLegacy
    scale={scale}
    labelId="test__likert-scale"
    selectedItem={null}
    onSelect={(): void => undefined}
    {...props}
  />
)

describe("<TextField />", () => {
  it("shows a validation message when provided and status is error", () => {
    render(
      <LikertScaleLegacyWrapper
        validationMessage="This is an error"
        status="error"
      />
    )

    expect(screen.getByText("This is an error")).toBeVisible

    expect(
      screen.getByRole("radiogroup", {
        description: "Error message This is an error",
      })
    ).toBeInTheDocument
  })

  it("does not show a validation message when provided and status is default", () => {
    render(
      <LikertScaleLegacyWrapper
        validationMessage="This is an error"
        status="default"
      />
    )
    expect(
      screen.getByRole("radiogroup", {
        description: undefined,
      })
    ).toBeInTheDocument
  })
})
