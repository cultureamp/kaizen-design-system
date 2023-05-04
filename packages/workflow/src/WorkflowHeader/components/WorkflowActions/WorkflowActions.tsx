import React, { useState, PropsWithChildren } from "react"
import { Button } from "@kaizen/button"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"
import { ConfirmationModal, ConfirmationModalProps } from "@kaizen/draft-modal"
import { Paragraph } from "@kaizen/typography"

export interface WorkflowActionsProps {
  confirmationTriggerLabel: string
  modalTitle: string
  modalContent: string
  modalConfirmLabel: string
  modalDismissLabel: string
  modalConfirmAction?: () => void
  /** * @default: "cautionary" */
  modalMood?: ConfirmationModalProps["mood"]
}

export const WorkflowActions = ({
  modalTitle,
  modalContent,
  modalConfirmLabel,
  modalDismissLabel,
  modalConfirmAction,
  confirmationTriggerLabel,
  modalMood = "cautionary",
  children,
}: PropsWithChildren<WorkflowActionsProps>): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <div className="max-large:basis-1/4 flex basis-1/12 justify-end">
      {children}
      <Button
        label={confirmationTriggerLabel}
        icon={closeIcon}
        iconPosition={"end"}
        secondary
        onClick={() => {
          setShowModal(true)
        }}
      />
      <ConfirmationModal
        isOpen={showModal}
        mood={modalMood}
        isProminent={true}
        title={modalTitle}
        confirmLabel={modalConfirmLabel}
        dismissLabel={modalDismissLabel}
        onConfirm={modalConfirmAction}
        onDismiss={() => {
          setShowModal(false)
        }}
      >
        <div>
          <Paragraph variant="body">{modalContent}</Paragraph>
        </div>
      </ConfirmationModal>
    </div>
  )
}

WorkflowActions.displayName = "WorkflowActions"
