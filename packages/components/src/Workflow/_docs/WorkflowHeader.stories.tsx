import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Button } from "@kaizen/button"
import { CloseIcon, VisibleIcon } from "~components/Icons"
import { ComponentDocsTemplate } from "~storybook/components/DocsContainer"
import { Workflow } from "../"
import { WorkflowControls } from "./controls"

const meta = {
  tags: ["autodocs"],
  title: "Pages/Workflow/Legacy/Components/Header",
  component: Workflow.Header,
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
    headerActions: WorkflowControls.headerActions,
  },
  args: {
    workflowName: "Create a self-reflection cycle",
    stepName: "Settings",
    status: {
      content: "Draft",
      variant: "statusDraft",
    },
    headerActions: [
      <Button
        key="would-use-uui-2"
        label="Save and close"
        icon={<CloseIcon role="presentation" />}
        secondary
        iconPosition="end"
        onClick={(): void => alert("mock example of a save action")}
      />,
    ],
  },
} satisfies Meta<typeof Workflow.Header>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

/** <p>`headerActions` gives consumers the ability to add multiple `JSX Element`'s to top of the Workflow Header. We assume these will be Button or Button-like components</p>
 * <p>There is no limit to the number of actions you can pass in, but please consider the limited realesate with labels.</p>  */
export const MultipleActions: Story = {
  args: {
    headerActions: [
      <Button
        key="would-use-uui-1"
        label="Preview"
        icon={<VisibleIcon role="presentation" />}
        secondary
        iconPosition="start"
      />,
      <Button
        key="would-use-uui-2"
        label="Save and close"
        icon={<CloseIcon role="presentation" />}
        secondary
        iconPosition="end"
        onClick={(): void => alert("mock example of a save action")}
      />,
    ],
  },
}
