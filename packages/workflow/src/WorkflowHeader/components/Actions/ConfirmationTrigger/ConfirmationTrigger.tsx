import React, { useState, PropsWithChildren, ReactNode } from "react"
import { Button } from "@kaizen/button"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"
import { ConfirmationModal, ConfirmationModalProps } from "@kaizen/draft-modal"
import { Paragraph } from "@kaizen/typography"

export interface ConfirmationTriggerProps {
  triggerLabel: string
  title: string
  content: ReactNode
  confirmLabel: string
  dismissLabel: string
  confirmAction?: () => void
  /** * @default: "cautionary" */
  mood?: ConfirmationModalProps["mood"]
}

/** A confirmation trigger and modal for exiting a workflow */
export const ConfirmationTrigger = ({
  triggerLabel,
  title,
  content,
  confirmLabel,
  dismissLabel,
  confirmAction,
  mood = "cautionary",
}: ConfirmationTriggerProps): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <>
      <Button
        label={triggerLabel}
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
        title={title}
        confirmLabel={confirmLabel}
        dismissLabel={dismissLabel}
        onConfirm={confirmAction}
        onDismiss={() => {
          setShowModal(false)
        }}
      >
        <div>
          <Paragraph variant="body">{content}</Paragraph>
        </div>
      </ConfirmationModal>
    </>
  )
}

ConfirmationTrigger.displayName = "ConfirmationTrigger"
