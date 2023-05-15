import React from "react"
import { render, screen, waitFor, act } from "@testing-library/react"
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

describe("<LikertScaleLegacy />", () => {
  it("shows a validation message when provided and status is error", () => {
    render(
      <LikertScaleLegacyWrapper
        validationMessage="This is an error"
        status="error"
      />
    )

    expect(screen.getByText("This is an error")).toBeVisible()

    expect(
      screen.getByRole("radiogroup", {
        description: "This is an error",
      })
    ).toBeInTheDocument()
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
    ).toBeInTheDocument()
  })

  describe("Keyboard navigation", () => {
    it("shows the correct legend when using tab to go through the scale", async () => {
      render(<LikertScaleLegacyWrapper automationId="ID" />)
      const scaleSteps = screen.getAllByRole("radio")
      const legend = screen.getByTestId("ID-legend")

      expect(legend).toHaveTextContent("Not rated")

      act(() => {
        scaleSteps[2].focus()
      })

      await waitFor(() => {
        expect(legend).toHaveTextContent("Neither agree or disagree")
      })
    })
  })
})
