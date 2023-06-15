import React, { useState } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Step, ProgressStepper, ProgressStepperProps } from "./"

const defaultArgs = {
  workflowName: "Create a self-reflection cycle",
  currentStepId: "settings-step",
  steps: [
    { label: "Settings", id: "settings-step" },
    { label: "Questions", id: "questions-step" },
    { label: "Preview", id: "preview-step" },
    { label: "Employees", id: "employees-step" },
    { label: "Schedule", id: "schedule-step" },
  ],
  isComplete: false,
}
