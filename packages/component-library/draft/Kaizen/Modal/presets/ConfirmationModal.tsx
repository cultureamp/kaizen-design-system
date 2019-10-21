import classnames from "classnames"
import * as React from "react"

import { Icon, Text } from "@cultureamp/kaizen-component-library"
const information = require("@cultureamp/kaizen-component-library/icons/information.icon.svg")
  .default
const success = require("@cultureamp/kaizen-component-library/icons/success.icon.svg")
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
  readonly type: "positive" | "informative" | "negative"
  readonly title: string
  readonly onConfirm: () => void
  readonly onDismiss: () => void
  readonly confirmLabel?: string
  readonly dismissLabel?: string
  readonly children: React.ReactNode
}

type ConfirmationModal = React.FunctionComponent<Props>

const ConfirmationModal = ({
  isOpen,
  type,
  title,
  onConfirm,
  onDismiss,
  confirmLabel = "Confirm",
  dismissLabel = "Cancel",
  children,
}: Props) => (
  <GenericModal
    isOpen={isOpen}
    onEscapeKeyup={onDismiss}
    onOutsideModalClick={onDismiss}
  >
    <div className={styles.modal}>
      <ModalHeader unpadded reversed onDismiss={onDismiss}>
        <div
          className={classnames(styles.header, {
            [styles.positiveHeader]: type === "positive",
            [styles.informativeHeader]: type === "informative",
            [styles.negativeHeader]: type === "negative",
          })}
        >
          <div className={styles.iconContainer}>
            <svg className={styles.iconBackground}>
              <circle cx="75" cy="75" r="75" />
            </svg>
            <div className={styles.icon}>
              <Icon
                icon={type === "positive" ? success : information}
                role="presentation"
              />
            </div>
          </div>
          <ModalAccessibleLabel>
            <Text tag="h1" inline>
              {title}
            </Text>
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
      />
    </div>
  </GenericModal>
)

export default ConfirmationModal
