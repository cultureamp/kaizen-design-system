import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { Button } from "~components/Button"
import { CloseIcon } from "~icons/CloseIcon"
import { VisibleIcon } from "~icons/VisibleIcon"
import { Workflow, WorkflowProps } from "../"
import { WorkflowControls } from "./controls"

const MockContent = (): JSX.Element => (
  <div className="flex flex-col flex-1 m-24 items-center">
    <div className="max-w-[1392px] w-100">
      <h2>Name and schedule the self-reflection cycle</h2>
      <form
        id="workflow-form-id"
        className="bg-white rounded-default shadow-sm my-32 p-64"
      >
        <h3>Name the cycle</h3>
        <label
          className="block font-weight-paragraph-bold"
          htmlFor="input-workflow"
        >
          Cycle name
        </label>
        <input
          type="text"
          id="input-workflow"
          aria-describedby="input-workflow-desc"
        />
        <p id="input-workflow-desc">
          This is the name that will be displayed across the cycle for everyone
        </p>
      </form>
    </div>
  </div>
)

const defaultArgs = {
  workflowName: "Create a self-reflection cycle",
  currentStepId: "settings-step",
  steps: [
    { label: "Settings", id: "settings-step" },
    { label: "Questions", id: "questions-step" },
    { label: "Preview", id: "preview-step" },
    { label: "Employees", id: "employees-step" },
    { label: "Schedule", id: "schedule-step" },
  ],
  isComplete: false,
  status: {
    content: "Draft",
    variant: "statusDraft",
  },
  previousAction: <Button reversed label="Back" />,
  nextAction: <Button reversed label="Next" />,
  headerActions: [
    <Button
      key="would-use-uui-2"
      label="Save and close"
      icon={<CloseIcon />}
      secondary
      iconPosition="end"
    />,
  ],
  children: <MockContent />,
} satisfies WorkflowProps

const meta = {
  title: "Pages/Workflow/Components/Workflow",
  component: Workflow,
  args: defaultArgs,
  argTypes: WorkflowControls,
} satisfies Meta<typeof Workflow>

export default meta

export const Playground: StoryObj<typeof meta> = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
    chromatic: { disable: false },
  },
}

Playground.args = { ...defaultArgs }

export const MultipleActions: StoryObj<typeof meta> = {
  args: {
    workflowName: "Create a self-reflection cycle",
    currentStepId: "settings-step",
    steps: [
      { label: "Settings", id: "settings-step" },
      { label: "Questions", id: "questions-step" },
      { label: "Preview", id: "preview-step" },
      { label: "Employees", id: "employees-step" },
      { label: "Schedule", id: "schedule-step" },
    ],
    isComplete: false,
    status: {
      content: "Draft",
      variant: "statusDraft",
    },
    nextAction: <Button reversed label="Next" />,
    headerActions: [
      <Button
        key="would-use-uui-1"
        label="Preview"
        icon={<VisibleIcon />}
        secondary
        iconPosition="start"
      />,
      <Button
        key="would-use-uui-2"
        label="Save and close"
        icon={<CloseIcon />}
        secondary
        iconPosition="end"
        onClick={(): void => alert("mock example of a save action")}
      />,
    ],
  },
}

export const FinalStep: StoryObj<typeof meta> = {
  args: {
    workflowName: "Create a self-reflection cycle",
    currentStepId: "schedule-step",
    steps: [
      { label: "Settings", id: "settings-step" },
      { label: "Questions", id: "questions-step" },
      { label: "Preview", id: "preview-step" },
      { label: "Employees", id: "employees-step" },
      { label: "Schedule", id: "schedule-step" },
    ],
    isComplete: false,
    status: {
      content: "Draft",
      variant: "statusDraft",
    },
    nextAction: <Button reversed label="Next" />,
    headerActions: [
      <Button
        key="would-use-uui-2"
        label="Save and close"
        icon={<CloseIcon />}
        secondary
        iconPosition="end"
        onClick={(): void => alert("mock example of a save action")}
      />,
    ],
  },
}

export const CompletedWorkflow: StoryObj<typeof meta> = {
  args: {
    workflowName: "Create a self-reflection cycle",
    currentStepId: "settings-step",
    steps: [
      { label: "Settings", id: "settings-step" },
      { label: "Questions", id: "questions-step" },
      { label: "Preview", id: "preview-step" },
      { label: "Employees", id: "employees-step" },
      { label: "Schedule", id: "schedule-step" },
    ],
    isComplete: true,
    status: {
      content: "Draft",
      variant: "statusDraft",
    },
    nextAction: <Button reversed label="Next" />,
    headerActions: [
      <Button
        key="would-use-uui-2"
        label="Save and close"
        icon={<CloseIcon />}
        secondary
        iconPosition="end"
        onClick={(): void => alert("mock example of a save action")}
      />,
    ],
  },
  parameters: {
    chromatic: { disable: false },
  },
}

export const ComposableWorkflow: StoryFn<WorkflowProps> = ({
  steps,
  isComplete,
  workflowName,
  currentStepId,
  status,
  headerActions,
  previousAction,
  nextAction,
  ...restProps
}) => (
  <Workflow.Wrapper {...restProps}>
    <Workflow.Header
      workflowName={workflowName}
      stepName={steps.find(step => step.id === currentStepId)!.label}
      status={status}
      headerActions={headerActions}
    />
    <Workflow.Main>
      <h3>Content</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error
        labore dolorum debitis eaque laboriosam qui quidem itaque necessitatibus
        obcaecati aut earum consectetur excepturi accusamus nulla libero maxime,
        quibusdam vero?
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
)

ComposableWorkflow.parameters = {
  chromatic: { disable: false },
}

export const ResponsiveWorkflow: StoryObj<typeof meta> = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "hidden",
      },
    },
    viewport: {
      viewports: {
        vieportZoomed: {
          name: "Simulate 400% zoom",
          styles: {
            width: "500px",
            height: "800px",
          },
          type: "mobile",
        },
      },
      defaultViewport: "vieportZoomed",
    },
    chromatic: {
      disable: false,
      viewports: [500, 1200],
    },
  },
}

ResponsiveWorkflow.args = { ...defaultArgs }
