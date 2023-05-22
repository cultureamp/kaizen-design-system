import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Button } from "@kaizen/button"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import {
  Workflow,
  WorkflowExit,
  WorkflowProps,
  Header,
  Footer,
  Main,
} from "../"

const defaultArgs = {
  workflowName: "Create a self-reflection cycle",
  stepName: "Settings",
  steps: ["Settings", "Questions", "Preview", "Employees", "Schedule"],
  isComplete: false,
  status: {
    content: "Draft",
    variant: "statusDraft",
  },
  previousAction: <Button reversed label="back" />,
  nextAction: <Button reversed label="next" />,
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
      "yarn add @kaizen/workflow",
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
<p>This is a page template component containing the header, footer and main landmarks that compose a Workflow page. Its purpose is to guide an customer through a multi-step form to create a Workflow.</p>
<p>The Worflow's children will be wrapped in a unstyled main landmark to provide felxibility of content styles.</p>
 */
export const Playground: StoryFn<WorkflowProps> = ({
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
  <Workflow
    workflowName={workflowName}
    stepName={stepName}
    status={status}
    headerActions={headerActions}
    steps={steps}
    isComplete={isComplete}
    nextAction={nextAction}
    previousAction={previousAction}
    {...restProps}
  >
    <div>
      <h3>Content</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error
        labore dolorum debitis eaque laboriosam qui quidem itaque necessitatibus
        obcaecati aut earum consectetur excepturi accusamus nulla libero maxime,
        quibusdam vero?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error
        labore dolorum debitis eaque laboriosam qui quidem itaque necessitatibus
        obcaecati aut earum consectetur excepturi accusamus nulla libero maxime,
        quibusdam vero?
      </p>
    </div>
  </Workflow>
)

Playground.args = { ...defaultArgs }

/**
<p>While we advise against it, each component is exported from the `@kaizen/workflow` package so a custom workflow can be composed from its children if absolutely neccessary</p>
 */
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

ComposableWorkflow.args = { ...defaultArgs }
