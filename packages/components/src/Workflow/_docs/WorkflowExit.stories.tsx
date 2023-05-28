import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../../../storybook/components/DocsContainer"
import { WorkflowExitProps } from "../subcomponents"
import { Workflow } from "../"

const defaultArgs = {
  exitLabel: "Save and close",
  exitTitle: "Before you exit",
  exitDescription:
    "Your content has not yet been saved. Click the button below or discard the changes",
  confirmExitLabel: "Close and save",
  dismissExitLabel: "Dismiss",
  onExit: (): void => alert("mock example of a save action"),
} satisfies WorkflowExitProps

const meta = {
  tags: ["autodocs"],
  title: "Pages/Workflow/Components/Workflow Exit Button",
  component: Workflow.WorkflowExit,
  parameters: {
    docs: {
      source: { type: "code" },
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
} satisfies Meta<typeof Workflow.WorkflowExit>

export default meta

/**
<p>This Button and Comfirmation Modal combination used in the Header `actions` array.</p>
<p>We have provided this as a sensible default to handle users exiting from a workflow and prompt them to save before redirecting.</p>
 */
export const Playground: StoryFn<WorkflowExitProps> = ({
  exitLabel,
  exitTitle,
  exitDescription,
  confirmExitLabel,
  dismissExitLabel,
  onExit,
  ...restProps
}) => (
  <div {...restProps}>
    <Workflow.WorkflowExit
      exitLabel={exitLabel}
      exitTitle={exitTitle}
      exitDescription={exitDescription}
      confirmExitLabel={confirmExitLabel}
      dismissExitLabel={dismissExitLabel}
      onExit={onExit}
    />
  </div>
)

Playground.args = { ...defaultArgs }
