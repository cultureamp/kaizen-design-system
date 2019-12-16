import classnames from "classnames"
import * as React from "react"

import { Text } from "@cultureamp/kaizen-component-library"

import {
  GenericModal,
  ModalAccessibleLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../"

const styles = require("./InputEditModal.scss")

interface Props {
  readonly isOpen: boolean
  readonly type: "positive" | "negative"
  readonly title: string
  readonly onSubmit: () => void
  readonly onDismiss: () => void
  readonly submitLabel?: string
  readonly dismissLabel?: string
  readonly children: React.ReactNode
  readonly submitDisabled?: boolean
}

type InputEditModal = React.FunctionComponent<Props>

const InputEditModal = ({
  isOpen,
  type,
  title,
  onSubmit,
  onDismiss,
  submitLabel = "Submit",
  dismissLabel = "Cancel",
  children,
  submitDisabled = false,
}: Props) => (
  <GenericModal
    isOpen={isOpen}
    onEscapeKeyup={onDismiss}
    onOutsideModalClick={onDismiss}
  >
    <div className={styles.modal}>
      <ModalHeader unpadded onDismiss={onDismiss}>
        <div className={styles.header}>
          <ModalAccessibleLabel>
            <Text tag="h1" style="display" inline>
              {title}
            </Text>
          </ModalAccessibleLabel>
        </div>
      </ModalHeader>
      <ModalBody unpadded>
        <div className={styles.body}>{children}</div>
      </ModalBody>
      <ModalFooter
        actions={[
          { label: submitLabel, action: onSubmit, disabled: submitDisabled },
          { label: dismissLabel, action: onDismiss },
        ]}
        appearance={type === "negative" ? "destructive" : "primary"}
      />
    </div>
  </GenericModal>
)

export default InputEditModal
