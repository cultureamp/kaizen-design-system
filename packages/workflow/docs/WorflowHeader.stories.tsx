import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Button } from "@kaizen/button"
import VisibleIcon from "@kaizen/component-library/icons/visible.icon.svg"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
// import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { WorkflowExit, WorkflowHeader, WorkflowHeaderProps } from "../index"

const defaultArgs = {
  workflowName: "Create a self-reflection cycle",
  stepName: "Settings",
  status: {
    content: "Draft",
    vairant: "statusDraft",
  },
  actions: [],
} satisfies WorkflowHeaderProps

const meta = {
  tags: ["autodocs"],
  title: "Components/Workflow Header",
  component: WorkflowHeader,
  parameters: {
    docs: {
      source: { type: "code" },
      container: ComponentDocsTemplate,
    },
    installation: [
      "npm install @kaizen/workflow",
      "import { WorflowHeader } from `@kaizen/workflow`",
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
} satisfies Meta<typeof WorkflowHeader>

export default meta

/**
 * Buttons perform actions. If it needs to navigate somewhere and can be opened in a new tab, use a link instead.
 */
export const Playground: StoryFn<WorkflowHeaderProps> = ({
  workflowName,
  stepName,
  status,
  actions = [],
  ...restProps
}) => (
  <WorkflowHeader
    workflowName={workflowName}
    stepName={stepName}
    status={status}
    actions={[
      ...actions,
      <WorkflowExit
        key={"would-use-uui"}
        exitLabel="Save and close"
        exitTitle="Before you exit"
        exitDescription="Your content has not yet been saved. Click the button below or discard the changes"
        confirmExitLabel="Close and save"
        dismissExitLabel="Dismiss"
        onExit={(): void => alert("mock example of a save action")}
      />,
    ]}
    {...restProps}
  />
)

const VariantTemplate: StoryFn<WorkflowHeaderProps> = ({
  workflowName,
  stepName,
  status,
  actions,
  ...restProps
}) => (
  <WorkflowHeader
    workflowName={workflowName}
    stepName={stepName}
    status={status}
    actions={actions}
    {...restProps}
  />
)

Playground.args = { ...defaultArgs }

/** <p>`actions` gives consumers the ability to add multiple `JSX Element`'s to top of the Workflow Header.</p>
 * <p>We have provided a sensible default button: `WorkflowExit` that can trigger a modal to handle a customer leaving the workflow</p>
 * <p>There is no limit to the number of actions you can pass in, but please consider the limited realesate with labels.<p>  */
export const MultipleActions = VariantTemplate.bind({})

MultipleActions.args = {
  ...defaultArgs,
  actions: [
    <Button
      key="would-use-uui-1"
      label="Preview"
      icon={VisibleIcon}
      secondary
      iconPosition="start"
    />,
    <WorkflowExit
      key={"would-use-uui-2"}
      exitLabel="Save and close"
      exitTitle="Before you exit"
      exitDescription="Your content has not yet been saved. Click the button below or discard the changes"
      confirmExitLabel="Close and save"
      dismissExitLabel="Dismiss"
      onExit={(): void => alert("mock example of a save action")}
    />,
  ],
}
