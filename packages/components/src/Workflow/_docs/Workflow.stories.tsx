import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Button } from '~components/Button'
import { Heading } from '~components/Heading'
import { Text } from '~components/Text'
import { TextField } from '~components/TextField'
import { Icon, Tag } from '~components/__next__'
import { Workflow } from '../'
import { WorkflowControls } from './controls'

const MockContent = (): JSX.Element => (
  <div className="flex flex-col flex-1 m-24 items-center">
    <div className="max-w-[1392px] w-full">
      <Text variant="intro-lede">Name and schedule the self-reflection cycle</Text>
      <form id="workflow-form-id" className="bg-white rounded shadow-sm my-32 p-64">
        <Heading variant="heading-3" classNameOverride="mb-24">
          Name the cycle
        </Heading>
        <TextField
          labelText="Cycle name"
          type="text"
          id="input-workflow"
          description="This is the name that will be displayed across the cycle for everyone"
        />
      </form>
    </div>
  </div>
)

const meta = {
  title: 'Pages/Workflow',
  component: Workflow,
  argTypes: WorkflowControls,
  args: {
    workflowName: 'Create a self-reflection cycle',
    currentStepId: 'settings-step',
    steps: [
      { label: 'Settings', id: 'settings-step' },
      { label: 'Questions', id: 'questions-step' },
      { label: 'Preview', id: 'preview-step' },
      { label: 'Employees', id: 'employees-step' },
      { label: 'Schedule', id: 'schedule-step' },
    ],
    isComplete: false,
    statusTag: <Tag color="purple">Draft</Tag>,
    previousAction: <Button label="Back" />,
    nextAction: <Button primary label="Next" />,
    headerActions: [
      <Button
        key="would-use-uui-2"
        label="Save and close"
        icon={<Icon name="close" isPresentational />}
        secondary
        iconPosition="end"
      />,
    ],
    children: <MockContent />,
  },
} satisfies Meta<typeof Workflow>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
    chromatic: { disable: false },
  },
}

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

export const FinalStep: Story = {
  args: { currentStepId: 'schedule-step' },
}

export const CompletedWorkflow: Story = {
  args: { isComplete: true },
  parameters: { chromatic: { disable: false } },
}

export const ComposableWorkflow: Story = {
  render: ({
    steps,
    isComplete,
    workflowName,
    currentStepId,
    statusTag,
    headerActions,
    previousAction,
    nextAction,
    ...restProps
  }) => (
    <Workflow.Wrapper {...restProps}>
      <Workflow.Header
        workflowName={workflowName}
        stepName={steps.find((step) => step.id === currentStepId)!.label}
        statusTag={statusTag}
        headerActions={headerActions}
      />
      <Workflow.Main>
        <h3>Content</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error labore dolorum
          debitis eaque laboriosam qui quidem itaque necessitatibus obcaecati aut earum consectetur
          excepturi accusamus nulla libero maxime, quibusdam vero?
        </p>
      </Workflow.Main>
      <Workflow.Footer
        currentStepId={currentStepId}
        steps={steps}
        isComplete={isComplete}
        nextAction={nextAction}
        previousAction={previousAction}
      />
    </Workflow.Wrapper>
  ),
  parameters: { chromatic: { disable: false } },
}

export const ResponsiveWorkflow: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden',
      },
    },
    viewport: {
      viewports: {
        vieportZoomed: {
          name: 'Simulate 400% zoom',
          styles: {
            width: '500px',
            height: '800px',
          },
          type: 'mobile',
        },
      },
      defaultViewport: 'vieportZoomed',
    },
    chromatic: {
      disable: false,
      viewports: [500, 1200],
    },
  },
}
