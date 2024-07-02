import React from "react"
import { ArgTypes } from "@storybook/react"
import { Button } from "~components/__actions__/Button/v1"
import { CloseIcon, VisibleIcon } from "~components/Icon"

export const WorkflowControls: Partial<ArgTypes> = {
  headerActions: {
    control: {
      type: "radio",
    },
    options: ["Single action", "Multiple actions", "No actions"],
    mapping: {
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
    options: ["Next active", "Next disabled", "Next submit", "No next action"],
    mapping: {
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
    options: [
      "Previous active",
      "Previous disabled",
      "Previous submit",
      "No Previous action",
    ],
    mapping: {
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
    options: [
      "settings-step",
      "questions-step",
      "preview-step",
      "employees-step",
      "schedule-step",
    ],
    mapping: {
      "settings-step": "settings-step",
      "questions-step": "questions-step",
      "preview-step": "preview-step",
      "employees-step": "employees-step",
      "schedule-step": "schedule-step",
    },
  },
}
