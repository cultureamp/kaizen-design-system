import React from "react"
import { Button } from "~components/Button"
import { CloseIcon, VisibleIcon } from "~components/Icons"

export const WorkflowControls = {
  headerActions: {
    control: {
      type: "radio",
    },
    options: {
      "Single action": [
        <Button
          key="would-use-uui-1"
          label="Close"
          icon={<CloseIcon role="presentation" />}
          secondary
          iconPosition="end"
        />,
      ],
      "Multiple actions": [
        <Button
          key="would-use-uui-1"
          label="Close"
          icon={<CloseIcon role="presentation" />}
          secondary
          iconPosition="end"
        />,
        <Button
          key="would-use-uui-2"
          label="Preview"
          icon={<VisibleIcon role="presentation" />}
          secondary
          iconPosition="start"
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
  currentStepId: {
    control: {
      type: "select",
    },
    options: {
      "settings-step": "settings-step",
      "questions-step": "questions-step",
      "preview-step": "preview-step",
      "employees-step": "employees-step",
      "schedule-step": "schedule-step",
    },
  },
}
