import React from "react"
import { Meta, StoryFn } from "@storybook/react"
// import { Button } from "@kaizen/button"
// import VisibleIcon from "@kaizen/component-library/icons/visible.icon.svg"
import { Button } from "@kaizen/button"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import {
  Workflow,
  WorkflowExit,
  WorkflowFooter,
  WorkflowHeader,
  WorkflowProps,
} from "../"

const defaultArgs = {
  workflowName: "Create a self-reflection cycle",
  stepName: "Settings",
  steps: ["Settings", "Questions", "Preview", "Employees", "Schedule"],
  isComplete: false,
  status: {
    content: "Draft",
    vairant: "statusDraft",
  },
  previousAction: <Button reversed label="back" />,
  nextAction: <Button reversed label="next" />,
  actions: [
    <WorkflowExit
      key={"would-use-uui"}
      exitLabel="Save and close"
      exitTitle="Before you exit"
      exitDescription="Your content has not yet been saved. Click the button below or discard the changes"
      confirmExitLabel="Close and save"
      dismissExitLabel="Dismiss"
      onExit={(): void => alert("mock example of a save action")}
    />,
  ],
} satisfies WorkflowProps

const meta = {
  tags: ["autodocs"],
  title: "Workflow",
  component: Workflow,
  parameters: {
    docs: {
      source: { type: "code" },
      container: ComponentDocsTemplate,
    },
    installation: [
      "npm install @kaizen/workflow",
      "import { Workflow } from `@kaizen/workflow`",
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
} satisfies Meta<typeof Workflow>

export default meta

/**

 */
export const Playground: StoryFn<WorkflowProps> = ({
  steps,
  isComplete,
  workflowName,
  stepName,
  status,
  actions,
  previousAction,
  nextAction,
  ...restProps
}) => (
  <div {...restProps}>
    <WorkflowHeader
      workflowName={workflowName}
      stepName={stepName}
      status={status}
      actions={actions}
    />
    <main className="flex flex-col content-center min-h-[100vh]">
      <h3>Content</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error
        labore dolorum debitis eaque laboriosam qui quidem itaque necessitatibus
        obcaecati aut earum consectetur excepturi accusamus nulla libero maxime,
        quibusdam vero?
      </p>
    </main>
    <WorkflowFooter
      stepName={stepName}
      steps={steps}
      isComplete={isComplete}
      nextAction={nextAction}
      previousAction={previousAction}
    />
  </div>
)

Playground.args = { ...defaultArgs }
