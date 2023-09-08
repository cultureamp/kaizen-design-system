import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Button } from "@kaizen/button"
import { ComponentDocsTemplate } from "~storybook/components/DocsContainer"
import { Workflow } from "../"
import { WorkflowControls } from "./controls"

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
      "yarn add @kaizen/components",
      "import { Workflow } from `@kaizen/components`",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/workflow/",
      figma:
        "https://www.figma.com/file/IJTy1JpS4Xyop5cQwroRje/%F0%9F%9B%A0%EF%B8%8F-Self-reflection%3A-Build-Handoff?node-id=188%3A62005&t=x4zyx07E2G3BmKGw-1",
      designGuidelines:
        "https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3064989884/Documentation",
    },
  },
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
