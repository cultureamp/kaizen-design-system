import React, { useState } from "react"
import classnames from "classnames"
import { v4 } from "uuid"
// import { Icon } from "@kaizen/component-library"
import { Heading, Paragraph } from "@kaizen/typography"
import { Modal } from "~components/Modal"
import { HeaderMood } from "../types"
// import { getIconSvg } from "./utils/getIconSvg"
import styles from "./ConfirmationModal.module.scss"

export interface ConfirmationModalProps {
  isOpen: boolean
  onDismiss: () => void
  onCancel?: () => void
  onConfirm: () => void
  headingText: React.ReactNode
  bodyText: React.ReactNode
  confirmLabel: string
  cancelLabel: string
  mood?: HeaderMood
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
  mood,
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
      <Modal.Header classNameOverride={mood && styles.iconHeader}>
        {mood && (
          <div className={classnames(styles.iconContainer, styles[mood])}>
            {/* <Icon icon={getIconSvg(mood)} inheritSize role="presentation" /> */}
          </div>
        )}
        <Heading variant="heading-4" tag="div" id={titleId}>
          {headingText}
        </Heading>
      </Modal.Header>
      <Modal.Body>
        <Paragraph variant="body" id={descriptionId}>
          {bodyText}
        </Paragraph>
      </Modal.Body>
      <Modal.Footer>
        <Modal.ActionButton label={cancelLabel} onClick={onCancel} secondary />
        <Modal.ActionButton
          destructive={mood === "negative"}
          label={confirmLabel}
          onClick={onConfirm}
          primary
        />
      </Modal.Footer>
    </Modal>
  )
}
