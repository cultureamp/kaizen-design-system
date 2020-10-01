import classnames from "classnames"
import * as React from "react"

import { Heading, Icon } from "@kaizen/component-library"
import cautionary from "../illustrations/cautionary.icon.svg"
import informative from "../illustrations/informative.icon.svg"
import negative from "../illustrations/negative.icon.svg"
import positive from "../illustrations/positive.icon.svg"

import {
  GenericModal,
  ModalAccessibleDescription,
  ModalAccessibleLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../"

import styles from "./ConfirmationModal.scss"

interface Props {
  readonly isOpen: boolean
  readonly type: ModalType
  readonly title: string
  readonly onConfirm: () => void
  readonly onDismiss: () => void
  readonly confirmLabel?: string
  readonly dismissLabel?: string
  readonly automationId?: string
  readonly children: React.ReactNode
}

type ConfirmationModal = React.FunctionComponent<Props>
type ModalType = "positive" | "informative" | "negative" | "cautionary"

const getIcon = (type: ModalType) => {
  switch (type) {
    case "cautionary":
      return cautionary
    case "informative":
      return informative
    case "negative":
      return negative
    case "positive":
      return positive
  }
}

const ConfirmationModal = ({
  isOpen,
  type,
  title,
  onConfirm,
  onDismiss,
  confirmLabel = "Confirm",
  dismissLabel = "Cancel",
  automationId,
  children,
}: Props) => (
  <GenericModal
    isOpen={isOpen}
    onEscapeKeyup={onDismiss}
    onOutsideModalClick={onDismiss}
    automationId={automationId}
  >
    <div className={styles.modal}>
      <ModalHeader unpadded reversed onDismiss={onDismiss}>
        <div
          className={classnames(styles.header, {
            [styles.cautionaryHeader]: type === "cautionary",
            [styles.informativeHeader]: type === "informative",
            [styles.negativeHeader]: type === "negative",
            [styles.positiveHeader]: type === "positive",
          })}
        >
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <Icon icon={getIcon(type)} role="presentation" />
            </div>
          </div>
          <ModalAccessibleLabel>
            <Heading tag="h1" variant="heading-1">
              {title}
            </Heading>
          </ModalAccessibleLabel>
        </div>
      </ModalHeader>
      <ModalBody>
        <ModalAccessibleDescription>{children}</ModalAccessibleDescription>
      </ModalBody>
      <ModalFooter
        actions={[
          { label: confirmLabel, action: onConfirm },
          { label: dismissLabel, action: onDismiss },
        ]}
        appearance={type === "negative" ? "destructive" : "primary"}
        automationId={automationId}
      />
    </div>
  </GenericModal>
)

export default ConfirmationModal
