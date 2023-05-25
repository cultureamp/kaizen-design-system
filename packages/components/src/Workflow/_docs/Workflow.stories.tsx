import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { Button } from "@kaizen/button"
import VisibleIcon from "@kaizen/component-library/icons/visible.icon.svg"
import {
  Workflow,
  WorkflowExit,
  WorkflowProps,
  Header,
  Footer,
  Main,
} from "../"
import { WorkflowControls } from "./controls"

const MockContent = (): JSX.Element => (
  <div className="flex flex-col flex-1 m-24 items-center">
    <div className="max-w-[1392px] w-100">
      <h3>Name and schedule the self-reflection cycle</h3>
      <form
        id="workflow-form-id"
        className="bg-white rounded-default shadow-sm my-32 p-64"
      >
        <h4>Name the cycle</h4>
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
  stepName: "Settings",
  steps: ["Settings", "Questions", "Preview", "Employees", "Schedule"],
  isComplete: false,
  status: {
    content: "Draft",
    variant: "statusDraft",
  },
  previousAction: <Button reversed label="Back" />,
  nextAction: <Button reversed label="Next" />,
  headerActions: [
    <WorkflowExit
      key="would-use-uui"
      exitLabel="Save and close"
      exitTitle="Before you exit"
      exitDescription="Your content has not yet been saved. Click the button below or discard the changes"
      confirmExitLabel="Close and save"
      dismissExitLabel="Dismiss"
      onExit={(): void => alert("mock example of a save action")}
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
  },
}

Playground.args = { ...defaultArgs }

export const MultipleActions: StoryObj<typeof meta> = {
  args: {
    workflowName: "Create a self-reflection cycle",
    stepName: "Settings",
    steps: ["Settings", "Questions", "Preview", "Employees", "Schedule"],
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
        icon={VisibleIcon}
        secondary
        iconPosition="start"
      />,
      <WorkflowExit
        key="would-use-uui-2"
        exitLabel="Save and close"
        exitTitle="Before you exit"
        exitDescription="Your content has not yet been saved. Click the button below or discard the changes"
        confirmExitLabel="Close and save"
        dismissExitLabel="Dismiss"
        onExit={(): void => alert("mock example of a save action")}
      />,
    ],
  },
}

export const FinalStep: StoryObj<typeof meta> = {
  args: {
    workflowName: "Create a self-reflection cycle",
    stepName: "Settings",
    steps: ["Settings", "Questions", "Preview", "Employees", "Schedule"],
    isComplete: false,
    status: {
      content: "Draft",
      variant: "statusDraft",
    },
    nextAction: <Button reversed label="Next" />,
    headerActions: [
      <WorkflowExit
        key="would-use-uui"
        exitLabel="Save and close"
        exitTitle="Before you exit"
        exitDescription="Your content has not yet been saved. Click the button below or discard the changes"
        confirmExitLabel="Close and save"
        dismissExitLabel="Dismiss"
        onExit={(): void => alert("mock example of a save action")}
      />,
    ],
  },
}

export const CompletedWorkflow: StoryObj<typeof meta> = {
  args: {
    workflowName: "Create a self-reflection cycle",
    stepName: "Settings",
    steps: ["Settings", "Questions", "Preview", "Employees", "Schedule"],
    isComplete: true,
    status: {
      content: "Draft",
      variant: "statusDraft",
    },
    nextAction: <Button reversed label="Next" />,
    headerActions: [
      <WorkflowExit
        key="would-use-uui"
        exitLabel="Save and close"
        exitTitle="Before you exit"
        exitDescription="Your content has not yet been saved. Click the button below or discard the changes"
        confirmExitLabel="Close and save"
        dismissExitLabel="Dismiss"
        onExit={(): void => alert("mock example of a save action")}
      />,
    ],
  },
}

export const ComposableWorkflow: StoryFn<WorkflowProps> = ({
  steps,
  isComplete,
  workflowName,
  stepName,
  status,
  headerActions,
  previousAction,
  nextAction,
  ...restProps
}) => (
  <div {...restProps}>
    <Header
      workflowName={workflowName}
      stepName={stepName}
      status={status}
      headerActions={headerActions}
    />
    <Main>
      <h3>Content</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error
        labore dolorum debitis eaque laboriosam qui quidem itaque necessitatibus
        obcaecati aut earum consectetur excepturi accusamus nulla libero maxime,
        quibusdam vero?
      </p>
    </Main>
    <Footer
      stepName={stepName}
      steps={steps}
      isComplete={isComplete}
      nextAction={nextAction}
      previousAction={previousAction}
    />
  </div>
)
