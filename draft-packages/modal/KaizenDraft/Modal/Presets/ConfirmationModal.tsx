import classnames from "classnames"
import * as React from "react"

import { Heading, Icon } from "@kaizen/component-library"
const information = require("@kaizen/component-library/icons/information.icon.svg")
  .default
const success = require("@kaizen/component-library/icons/success.icon.svg")
  .default
const exclamation = require("@kaizen/component-library/icons/exclamation.icon.svg")
  .default

import {
  GenericModal,
  ModalAccessibleDescription,
  ModalAccessibleLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../"

const styles = require("./ConfirmationModal.scss")

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
    case "positive":
      return success
    case "cautionary":
      return exclamation
    default:
      return information
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
            [styles.positiveHeader]: type === "positive",
            [styles.informativeHeader]: type === "informative",
            [styles.negativeHeader]: type === "negative",
            [styles.cautionaryHeader]: type === "cautionary",
          })}
        >
          <div className={styles.iconContainer}>
            <svg className={styles.iconBackground}>
              <circle cx="75" cy="75" r="75" />
            </svg>
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
