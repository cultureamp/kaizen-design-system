import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Button } from '~components/__actions__/v2'
import { Icon, Tag } from '~components/__future__'
import { Workflow } from '../'
import { WorkflowControls } from './controls'

const meta = {
  title: 'Layout/Workflow/Components/Header',
  component: Workflow.Header,
  argTypes: {
    ...WorkflowControls.headerActions,
  },
  args: {
    workflowName: 'Create a self-reflection cycle',
    stepName: 'Settings',
    statusTag: <Tag color="purple">Draft</Tag>,
    headerActions: [
      <Button
        key="would-use-uui-2"
        label="Save and close"
        icon={<Icon name="close" isPresentational />}
        secondary
        iconPosition="end"
        onClick={(): void => alert('mock example of a save action')}
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
        sourceState: 'shown',
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
        icon={<Icon name="visibility" isPresentational isFilled />}
        secondary
        iconPosition="start"
      />,
      <Button
        key="would-use-uui-2"
        label="Save and close"
        icon={<Icon name="close" isPresentational />}
        secondary
        iconPosition="end"
        onClick={(): void => alert('mock example of a save action')}
      />,
    ],
  },
}
