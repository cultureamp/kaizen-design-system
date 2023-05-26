import React, { useState, ReactNode } from "react"
import { Button } from "@kaizen/button"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"
import { ConfirmationModal, ConfirmationModalProps } from "@kaizen/draft-modal"
import { Paragraph } from "@kaizen/typography"

export interface WorkflowExitProps {
  exitLabel: string
  exitTitle: string
  exitDescription: ReactNode
  confirmExitLabel: string
  dismissExitLabel: string
  onExit?: () => void
  /** * @default: "cautionary" */
  mood?: ConfirmationModalProps["mood"]
}

/** A button that triggers a modal to confirm saving and exiting from the current workflow*/
export const WorkflowExit = ({
  exitLabel,
  exitTitle,
  exitDescription,
  confirmExitLabel,
  dismissExitLabel,
  onExit,
  mood = "cautionary",
}: WorkflowExitProps): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <>
      <Button
        label={exitLabel}
        icon={closeIcon}
        iconPosition="end"
        secondary
        onClick={() => {
          setShowModal(true)
        }}
      />
      <ConfirmationModal
        isOpen={showModal}
        mood={mood}
        isProminent={true}
        title={exitTitle}
        confirmLabel={confirmExitLabel}
        dismissLabel={dismissExitLabel}
        onConfirm={onExit}
        onDismiss={() => {
          setShowModal(false)
        }}
      >
        <div>
          <Paragraph variant="body">{exitDescription}</Paragraph>
        </div>
      </ConfirmationModal>
    </>
  )
}

WorkflowExit.displayName = "Workflow.WorkflowExit"
