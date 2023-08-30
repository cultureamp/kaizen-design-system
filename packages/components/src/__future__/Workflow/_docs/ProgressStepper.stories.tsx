import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Workflow } from "../"
import { WorkflowControls } from "./controls"

const meta = {
  title: "Pages/Workflow/Components/Progress Stepper",
  component: Workflow.ProgressStepper,
  argTypes: {
    currentStepId: WorkflowControls.currentStepId,
  },
  args: {
    currentStepId: "preview-step",
    steps: [
      { label: "Settings", id: "settings-step" },
      { label: "Questions", id: "questions-step" },
      { label: "Preview", id: "preview-step" },
      { label: "Employees", id: "employees-step" },
      { label: "Schedule", id: "schedule-step" },
    ],
    isComplete: false,
  },
  decorators: [
    Story => (
      <div className="bg-blue-500 p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Workflow.ProgressStepper>

export default meta

type Story = StoryObj<typeof meta>

/**
 * <p>This component is used in the `Footer` to track progress of the Workflows steps.</p>
 * <p>It has no reverse variant and should only be used in the Worflow's `Footer` component.</p>
 */
export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

/** <p>To ensure WCAG AA compliance, there are 3 visually destinct states.</p>
 * <p>These are reflected in their accessible names for screen reader: "Completed", "Current" and "Not started"</p>
 */
export const ProgressStates: Story = {
  args: {
    currentStepId: "questions-step",
  },
}

/**
 * <p>You can use the `isComplete` follow a successful submission to render all steps as complete.</p>
 */
export const AllStepsComplete: Story = {
  args: {
    currentStepId: "schedule-step",
    isComplete: true,
  },
}

export const FewerSteps: Story = {
  args: {
    currentStepId: "questions-step",
    steps: [
      { label: "Settings", id: "settings-step" },
      { label: "Questions", id: "questions-step" },
      { label: "Preview", id: "preview-step" },
    ],
  },
}

/**
 * <p>We have baked in a container query to ensure the component can be responsive.</p>
 * <p>When a step reaches its minimum size (4.5rem), it will hide the display name to maximise realestate.</p>
 */
export const EightSteps: Story = {
  args: {
    currentStepId: "questions-step",
    steps: [
      ...meta.args.steps,
      { label: "Plan", id: "plan-step" },
      { label: "Provision", id: "provision-step" },
      { label: "Procure", id: "procure-step" },
    ],
  },
}
