import React from "react"
import { Button } from "@kaizen/button"
import VisibleIcon from "@kaizen/component-library/icons/visible.icon.svg"
import { WorkflowExit } from "../../"

export const WorkflowControls = {
  headerActions: {
    control: {
      type: "radio",
    },
    options: {
      "ExitWorkflow action": [
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
      "Multiple actions": [
        <Button
          key="would-use-uui-1"
          label="Preview"
          icon={VisibleIcon}
          secondary
          iconPosition="start"
        />,
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
      "No actions": [],
    },
  },
  nextAction: {
    control: {
      type: "radio",
    },
    options: {
      "Next active": <Button reversed label="Next" />,
      "Next disabled": <Button reversed disabled label="Next" />,
      "Next submit": (
        <Button reversed formTarget="workflow-form-id" primary label="Finish" />
      ),
      "No next action": undefined,
    },
  },
  previousAction: {
    control: {
      type: "radio",
    },
    options: {
      "Previous active": <Button reversed label="Back" />,
      "Previous disabled": <Button reversed disabled label="Back" />,
      "Previous submit": (
        <Button reversed formTarget="workflow-form-id" primary label="Back" />
      ),
      "No Previous action": undefined,
    },
  },
}
