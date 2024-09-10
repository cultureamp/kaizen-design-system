import React from "react"
import { render, screen } from "@testing-library/react"
import { ProgressStepper, ProgressStepperProps } from "./"

const defaultArgs = {
  steps: [
    { label: "Settings", id: "settings-step" },
    { label: "Questions", id: "questions-step" },
    { label: "Preview", id: "preview-step" },
    { label: "Employees", id: "employees-step" },
    { label: "Schedule", id: "schedule-step" },
  ],
} satisfies Pick<ProgressStepperProps, "steps">

describe("<ProgressStepperr />", () => {
  it("renders the correct number of steps", () => {
    render(<ProgressStepper currentStepId="settings-step" {...defaultArgs} />)
    expect(screen.getAllByRole("listitem").length).toBe(5)
  })
  it("tracks the correct position of the active step", () => {
    render(<ProgressStepper currentStepId="settings-step" {...defaultArgs} />)
    screen.getByText("Current: Settings")
    expect(
      screen.getByText(`Step 1 of ${defaultArgs.steps.length}`)
    ).toBeInTheDocument()
  })
  it("renders the correct number of completed steps with an accessible name", () => {
    render(<ProgressStepper currentStepId="preview-step" {...defaultArgs} />)
    expect(screen.getAllByText("Completed:", { exact: false }).length).toBe(2)
  })
  it("renders the correct number of steps not started with an accessible name", () => {
    render(<ProgressStepper currentStepId="preview-step" {...defaultArgs} />)
    expect(screen.getAllByText("Not started:", { exact: false }).length).toBe(2)
  })
  it("renders all steps as complete if the provided the `isComplete` prop", () => {
    render(
      <ProgressStepper
        currentStepId="preview-step"
        {...defaultArgs}
        isComplete
      />
    )
    expect(screen.getAllByText("Completed:", { exact: false }).length).toBe(5)
  })
})
