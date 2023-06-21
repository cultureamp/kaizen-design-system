import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../../../../storybook/components/DocsContainer"
import { ProgressStepperProps } from "../subcomponents"
import { Workflow } from "../"
import { WorkflowControls } from "./controls"

const defaultArgs = {
  currentStepId: "preview-step",
  steps: [
    { label: "Settings", id: "settings-step" },
    { label: "Questions", id: "questions-step" },
    { label: "Preview", id: "preview-step" },
    { label: "Employees", id: "employees-step" },
    { label: "Schedule", id: "schedule-step" },
  ],
  isComplete: false,
} satisfies ProgressStepperProps

const meta = {
  tags: ["autodocs"],
  title: "Pages/Workflow/Components/Progress Stepper",
  component: Workflow.ProgressStepper,
  parameters: {
    docs: {
      source: { type: "code" },
      container: ComponentDocsTemplate,
    },
    installation: [
      "yarn add @kaizen/workflow",
      "import { ProgressStepper } from `@kaizen/components/future`",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/workflow/",
      figma:
        "https://www.figma.com/file/IJTy1JpS4Xyop5cQwroRje/%F0%9F%9B%A0%EF%B8%8F-Self-reflection%3A-Build-Handoff?node-id=188%3A62005&t=x4zyx07E2G3BmKGw-1",
      /** @todo (optional): Add Confluence link */
      designGuidelines:
        "https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3064989884/Documentation",
    },
  },
  argTypes: {
    currentStepId: WorkflowControls.currentStepId,
  },
} satisfies Meta<typeof Workflow.ProgressStepper>

export default meta

/**
 * <p>This component is used in the `Footer` to track progress of the Workflows steps.</p>
 * <p>It has no reverse variant and should only be used in the Worflow's `Footer` component.</p>
 */
export const Playground: StoryFn<ProgressStepperProps> = ({
  currentStepId,
  steps,
  isComplete,
  ...restProps
}) => (
  <div className="bg-blue-500 p-8">
    <Workflow.ProgressStepper
      currentStepId={currentStepId}
      steps={steps}
      isComplete={isComplete}
      {...restProps}
    />
  </div>
)

Playground.args = { ...defaultArgs }

const VariantTemplate: StoryFn<ProgressStepperProps> = ({
  currentStepId,
  steps,
  isComplete,
  ...restProps
}) => (
  <div className="bg-blue-500 p-8">
    <Workflow.ProgressStepper
      currentStepId={currentStepId}
      steps={steps}
      isComplete={isComplete}
      {...restProps}
    />
  </div>
)

/** <p>To ensure WCAG AA compliance, there are 3 visually destinct states.</p>
 * <p>These are reflected in their accessible names for screen reader: "Completed", "Current" and "Not started"</p>
 */
export const ProgressStates = VariantTemplate.bind({})

ProgressStates.args = {
  currentStepId: "questions-step",
  steps: defaultArgs.steps,
  isComplete: false,
}

/**
 * <p>You can use the `isComplete` follow a successful submission to render all steps as complete.</p>
 */
export const AllStepsComplete = VariantTemplate.bind({})

AllStepsComplete.args = {
  currentStepId: "schedule-step",
  steps: defaultArgs.steps,
  isComplete: true,
}

export const FewerSteps = VariantTemplate.bind({})

FewerSteps.args = {
  currentStepId: "questions-step",
  steps: [
    { label: "Settings", id: "settings-step" },
    { label: "Questions", id: "questions-step" },
    { label: "Preview", id: "preview-step" },
  ],
  isComplete: false,
}

/**
 * <p>We have baked in a container query to ensure the component can be responsive.</p>
 * <p>When a step reaches its minimum size (4.5rem), it will hide the display name to maximise realestate.</p>
 */
export const SevenSteps = VariantTemplate.bind({})

SevenSteps.args = {
  currentStepId: "questions-step",
  steps: [
    ...defaultArgs.steps,
    { label: "Plan", id: "plan-step" },
    { label: "Provision", id: "provision-step" },
    { label: "Procure", id: "procure-step" },
  ],
  isComplete: false,
}
