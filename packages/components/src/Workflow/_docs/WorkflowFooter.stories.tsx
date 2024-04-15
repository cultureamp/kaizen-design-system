import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Button } from "~components/Button"
import { Workflow } from "../"
import { WorkflowControls } from "./controls"

const meta = {
  title: "Deprecated/Workflow/Footer",
  component: Workflow.Footer,
  argTypes: {
    nextAction: WorkflowControls.nextAction,
    previousAction: WorkflowControls.previousAction,
  },
  args: {
    stepName: "Preview",
    steps: ["Settings", "Questions", "Preview", "Employees", "Schedule"],
    isComplete: false,
    previousAction: <Button reversed label="Back" />,
    nextAction: <Button reversed label="Next" />,
  },
} satisfies Meta<typeof Workflow.Footer>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

/** <p>Next and previous button are passed in by the consumer to allow for page routing method to be determined by the user</p> */
export const FirstStep: Story = {
  args: {
    stepName: "Settings",
  },
}

export const NextStepDisabled: Story = {
  args: {
    nextAction: <Button disabled reversed label="Next" />,
  },
}

export const LastStep: Story = {
  args: {
    stepName: "Schedule",
    nextAction: (
      <Button
        reversed
        primary
        disabled
        form="worflow-form-id-for-submit"
        label="Finish"
      />
    ),
  },
}

export const AllStepsComplete: Story = {
  args: {
    stepName: "Schedule",
    isComplete: true,
  },
}

export const FewerSteps: Story = {
  args: {
    stepName: "Questions",
    steps: ["Settings", "Questions", "Preview"],
  },
}

export const EightSteps: Story = {
  args: {
    stepName: "Questions",
    steps: [
      "Settings",
      "Questions",
      "Preview",
      "Employees",
      "Schedule",
      "Plan",
      "Provision",
      "Another thing",
    ],
  },
}
