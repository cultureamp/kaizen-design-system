import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Button } from "@kaizen/button"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { WorkflowFooter, WorkflowFooterProps } from "../"

const defaultArgs = {
  stepName: "Preview",
  steps: ["Settings", "Questions", "Preview", "Employees", "Schedule"],
  isComplete: false,
  previousAction: <Button reversed label="back" />,
  nextAction: <Button reversed label="next" />,
} satisfies WorkflowFooterProps

const meta = {
  tags: ["autodocs"],
  title: "Components/Workflow Footer",
  component: WorkflowFooter,
  parameters: {
    docs: {
      source: { type: "code" },
      container: ComponentDocsTemplate,
    },
    installation: [
      "npm install @kaizen/workflow",
      "import { WorkflowFooter } from `@kaizen/workflow`",
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
} satisfies Meta<typeof WorkflowFooter>

export default meta

/**
 * Buttons perform actions. If it needs to navigate somewhere and can be opened in a new tab, use a link instead.
 */
export const Playground: StoryFn<WorkflowFooterProps> = ({
  stepName,
  steps,
  isComplete,
  ...restProps
}) => (
  <WorkflowFooter
    stepName={stepName}
    steps={steps}
    isComplete={isComplete}
    {...restProps}
  />
)

Playground.args = { ...defaultArgs }

const VariantTemplate: StoryFn<WorkflowFooterProps> = ({
  stepName,
  steps,
  isComplete,
  ...restProps
}) => (
  <WorkflowFooter
    stepName={stepName}
    steps={steps}
    isComplete={isComplete}
    {...restProps}
  />
)

// /** <p>Next and previous button are passed in by the consumer to allow for page routing method to be determined by the user</p>  */
export const FirstStep = VariantTemplate.bind({})

FirstStep.args = {
  stepName: "Settings",
  steps: ["Settings", "Questions", "Preview", "Employees", "Schedule"],
  isComplete: false,
  nextAction: <Button reversed label="Next" />,
}

export const NextStepDisabled = VariantTemplate.bind({})

NextStepDisabled.args = {
  stepName: "Preview",
  steps: ["Settings", "Questions", "Preview", "Employees", "Schedule"],
  isComplete: false,
  nextAction: <Button disabled reversed label="Next" />,
  previousAction: <Button reversed label="Back" />,
}

export const LastStep = VariantTemplate.bind({})

LastStep.args = {
  stepName: "Schedule",
  steps: ["Settings", "Questions", "Preview", "Employees", "Schedule"],
  isComplete: false,
  nextAction: <Button reversed primary label="Finish" />,
  previousAction: <Button reversed label="Back" />,
}

export const AllStepsComplete = VariantTemplate.bind({})

AllStepsComplete.args = {
  stepName: "Schedule",
  steps: ["Settings", "Questions", "Preview", "Employees", "Schedule"],
  isComplete: true,
  nextAction: <Button reversed primary label="Finish" />,
  previousAction: <Button reversed label="Back" />,
}

export const FewerSteps = VariantTemplate.bind({})

FewerSteps.args = {
  stepName: "Questions",
  steps: ["Settings", "Questions", "Preview"],
  isComplete: false,
  nextAction: <Button reversed label="Next" />,
  previousAction: <Button reversed label="Back" />,
}
export const SevenSteps = VariantTemplate.bind({})

SevenSteps.args = {
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
  isComplete: false,
  nextAction: <Button reversed label="Next" />,
  previousAction: <Button reversed label="Back" />,
}
