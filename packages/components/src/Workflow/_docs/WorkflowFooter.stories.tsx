import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Button } from '~components/__actions__/v2'
import { Workflow } from '../'
import { WorkflowControls } from './controls'

const meta = {
  title: 'Layout/Workflow/Components/Footer',
  component: Workflow.Footer,
  argTypes: {
    ...WorkflowControls.nextAction,
    ...WorkflowControls.previousAction,
    ...WorkflowControls.currentStepId,
  },
  args: {
    currentStepId: 'preview-step',
    steps: [
      { label: 'Settings', id: 'settings-step' },
      { label: 'Questions', id: 'questions-step' },
      { label: 'Preview', id: 'preview-step' },
      { label: 'Employees', id: 'employees-step' },
      { label: 'Schedule', id: 'schedule-step' },
    ],
    isComplete: false,
    previousAction: <Button label="Back" />,
    nextAction: <Button primary label="Next" />,
  },
} satisfies Meta<typeof Workflow.Footer>

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

/** <p>Next and previous button are passed in by the consumer to allow for page routing method to be determined by the user</p> */
export const FirstStep: Story = {
  args: { currentStepId: 'settings-step' },
}

export const NextStepDisabled: Story = {
  args: { nextAction: <Button disabled primary label="Next" /> },
}

export const LastStep: Story = {
  args: {
    currentStepId: 'schedule-step',
    nextAction: <Button primary disabled form="worflow-form-id-for-submit" label="Finish" />,
  },
}

export const AllStepsComplete: Story = {
  args: {
    currentStepId: 'schedule-step',
    isComplete: true,
  },
}

export const FewerSteps: Story = {
  args: {
    currentStepId: 'questions-step',
    steps: [
      { label: 'Settings', id: 'settings-step' },
      { label: 'Questions', id: 'questions-step' },
      { label: 'Preview', id: 'preview-step' },
    ],
  },
}

export const EightSteps: Story = {
  args: {
    currentStepId: 'questions-step',
    steps: [
      ...meta.args.steps,
      { label: 'Plan', id: 'plan-step' },
      { label: 'Provision', id: 'provision-step' },
      { label: 'Procure', id: 'procure-step' },
    ],
  },
}
