import * as React from "react"

import { Text } from "@kaizen/component-library"

import {
  GenericModal,
  ModalAccessibleLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../"

const styles = require("./InformationModal.scss")

interface Props {
  readonly isOpen: boolean
  readonly title: string
  readonly onConfirm?: () => void
  readonly onDismiss: () => void
  readonly confirmLabel?: string
  readonly renderBackground?: () => React.ReactNode
  readonly children: React.ReactNode
}

type InformationModal = React.FunctionComponent<Props>

const InformationModal = ({
  isOpen,
  title,
  onConfirm,
  onDismiss,
  confirmLabel = "Confirm",
  renderBackground,
  children,
}: Props) => (
  <GenericModal
    isOpen={isOpen}
    onEscapeKeyup={onDismiss}
    onOutsideModalClick={onDismiss}
  >
    <div className={styles.modal}>
      {renderBackground && renderBackground()}
      <ModalHeader unpadded onDismiss={onDismiss}>
        <div className={styles.header}>
          <ModalAccessibleLabel>
            <Text tag="h1" style="title" inline>
              {title}
            </Text>
          </ModalAccessibleLabel>
        </div>
      </ModalHeader>
      <ModalBody unpadded>
        <div
          className={onConfirm == null ? styles.bodyWithoutFooter : styles.body}
        >
          <div className={styles.content}>{children}</div>
        </div>
      </ModalBody>
      {onConfirm != null && (
        <ModalFooter
          actions={[{ label: confirmLabel, action: onConfirm }]}
          appearance={"primary"}
        />
      )}
    </div>
  </GenericModal>
)

export default InformationModal
