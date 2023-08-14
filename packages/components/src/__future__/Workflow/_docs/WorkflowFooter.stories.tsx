import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Button } from "@kaizen/button"
import { classNameOverrideArgType } from "../../../../../../storybook/argTypes"
import { ComponentDocsTemplate } from "../../../../../../storybook/components/DocsContainer"
import { FooterProps } from "../subcomponents/Footer"
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
  previousAction: <Button reversed label="Back" />,
  nextAction: <Button reversed label="Next" />,
} satisfies FooterProps

const meta = {
  tags: ["autodocs"],
  title: "Pages/Workflow/Components/Footer",
  component: Workflow.Footer,
  parameters: {
    docs: {
      sourceState: "shown",
      container: ComponentDocsTemplate,
    },
    installation: [
      "yarn add @kaizen/workflow",
      "import { Workflow } from `@kaizen/components/future`",
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
    nextAction: WorkflowControls.nextAction,
    previousAction: WorkflowControls.previousAction,
    currentStepId: WorkflowControls.currentStepId,
    ...classNameOverrideArgType,
  },
} satisfies Meta<typeof Workflow.Footer>

export default meta

/**
 * Buttons perform actions. If it needs to navigate somewhere and can be opened in a new tab, use a link instead.
 */
export const Playground: StoryFn<FooterProps> = ({
  currentStepId,
  steps,
  isComplete,
  ...restProps
}) => (
  <Workflow.Footer
    currentStepId={currentStepId}
    steps={steps}
    isComplete={isComplete}
    {...restProps}
  />
)

Playground.args = { ...defaultArgs }

const VariantTemplate: StoryFn<FooterProps> = ({
  currentStepId,
  steps,
  isComplete,
  ...restProps
}) => (
  <Workflow.Footer
    currentStepId={currentStepId}
    steps={steps}
    isComplete={isComplete}
    {...restProps}
  />
)

// /** <p>Next and previous button are passed in by the consumer to allow for page routing method to be determined by the user</p>  */
export const FirstStep = VariantTemplate.bind({})

FirstStep.args = {
  currentStepId: "settings-step",
  steps: defaultArgs.steps,
  isComplete: false,
  nextAction: <Button reversed label="Next" />,
}

export const NextStepDisabled = VariantTemplate.bind({})

NextStepDisabled.args = {
  currentStepId: "preview-step",
  steps: defaultArgs.steps,
  isComplete: false,
  nextAction: <Button disabled reversed label="Next" />,
  previousAction: <Button reversed label="Back" form="workflow-form-id" />,
}

export const LastStep = VariantTemplate.bind({})

LastStep.args = {
  currentStepId: "schedule-step",
  steps: defaultArgs.steps,
  isComplete: false,
  nextAction: (
    <Button
      reversed
      primary
      disabled
      form="worflow-form-id-for-submit"
      label="Finish"
    />
  ),
  previousAction: <Button reversed label="Back" />,
}

export const AllStepsComplete = VariantTemplate.bind({})

AllStepsComplete.args = {
  currentStepId: "schedule-step",
  steps: defaultArgs.steps,
  isComplete: true,
  nextAction: <Button reversed label="Next" />,
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
  nextAction: <Button reversed label="Next" />,
  previousAction: <Button reversed label="Back" />,
}
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
  nextAction: <Button reversed label="Next" />,
  previousAction: <Button reversed label="Back" />,
}
