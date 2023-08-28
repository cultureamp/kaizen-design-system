import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Button } from "@kaizen/button"
import { classNameOverrideArgType } from "~storybook/argTypes"
import { ComponentDocsTemplate } from "~storybook/components/DocsContainer"
import { FooterProps } from "../subcomponents/Footer"
import { Workflow } from "../"
import { WorkflowControls } from "./controls"

const defaultArgs = {
  stepName: "Preview",
  steps: ["Settings", "Questions", "Preview", "Employees", "Schedule"],
  isComplete: false,
  previousAction: <Button reversed label="Back" />,
  nextAction: <Button reversed label="Next" />,
} satisfies FooterProps

const meta = {
  tags: ["autodocs"],
  title: "Pages/Workflow/Legacy/Components/Footer",
  component: Workflow.Footer,
  parameters: {
    docs: {
      sourceState: "shown",
      container: ComponentDocsTemplate,
    },
    installation: [
      "yarn add @kaizen/workflow",
      "import { Workflow } from `@kaizen/components`",
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
    ...classNameOverrideArgType,
  },
} satisfies Meta<typeof Workflow.Footer>

export default meta

/**
 * Buttons perform actions. If it needs to navigate somewhere and can be opened in a new tab, use a link instead.
 */
export const Playground: StoryFn<FooterProps> = ({
  stepName,
  steps,
  isComplete,
  ...restProps
}) => (
  <Workflow.Footer
    stepName={stepName}
    steps={steps}
    isComplete={isComplete}
    {...restProps}
  />
)

Playground.args = { ...defaultArgs }

const VariantTemplate: StoryFn<FooterProps> = ({
  stepName,
  steps,
  isComplete,
  ...restProps
}) => (
  <Workflow.Footer
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
  previousAction: <Button reversed label="Back" form="workflow-form-id" />,
}

export const LastStep = VariantTemplate.bind({})

LastStep.args = {
  stepName: "Schedule",
  steps: ["Settings", "Questions", "Preview", "Employees", "Schedule"],
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
  stepName: "Schedule",
  steps: ["Settings", "Questions", "Preview", "Employees", "Schedule"],
  isComplete: true,
  nextAction: <Button reversed label="Next" />,
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
