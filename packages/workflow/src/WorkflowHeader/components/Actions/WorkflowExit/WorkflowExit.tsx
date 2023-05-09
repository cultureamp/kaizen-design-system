import React, { useState, PropsWithChildren, ReactNode } from "react"
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

/** A confirmation trigger and modal for exiting a workflow */
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
        iconPosition={"end"}
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

WorkflowExit.displayName = "WorkflowExit"
