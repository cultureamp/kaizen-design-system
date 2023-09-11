import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Button } from "~components/Button"
import { CloseIcon, VisibleIcon } from "~components/Icons"
import { Workflow } from "../"
import { WorkflowControls } from "./controls"

const meta = {
  title: "Pages/Workflow/Components/Header",
  component: Workflow.Header,
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

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

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
