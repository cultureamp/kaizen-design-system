import React, { useState } from "react"
import { v4 } from "uuid"
import { Button } from "@kaizen/button"
import { Heading, Paragraph } from "@kaizen/typography"
import { Modal } from "../"

export interface ConfirmationModalProps {
  isOpen: boolean
  onDismiss: () => void
  onCancel?: () => void
  onConfirm: () => void
  headingText: React.ReactNode
  bodyText: React.ReactNode
  confirmLabel: string
  cancelLabel: string
}

export const ConfirmationModal = ({
  isOpen,
  onDismiss,
  onCancel = onDismiss,
  onConfirm,
  headingText,
  bodyText,
  confirmLabel,
  cancelLabel,
}: ConfirmationModalProps): JSX.Element => {
  const [titleId] = useState<string>(v4())
  const [descriptionId] = useState<string>(v4())
  return (
    <Modal
      isOpen={isOpen}
      onDismiss={onDismiss}
      accessibleLabelId={titleId}
      aria-describedby={descriptionId}
      role="alertdialog"
    >
      <Modal.Header>
        <Heading variant="heading-3" tag="div" id={titleId}>
          {headingText}
        </Heading>
      </Modal.Header>
      <Modal.Body>
        <Paragraph variant="body" id={descriptionId}>
          {bodyText}
        </Paragraph>
      </Modal.Body>
      <Modal.Footer>
        <Modal.Actions>
          <Button label={cancelLabel} onClick={onCancel} secondary />
          <Button label={confirmLabel} onClick={onConfirm} primary />
        </Modal.Actions>
      </Modal.Footer>
    </Modal>
  )
}
