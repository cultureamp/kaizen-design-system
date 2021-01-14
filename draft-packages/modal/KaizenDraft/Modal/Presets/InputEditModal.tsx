import * as React from "react"

import { Text } from "@kaizen/component-library"

import { ButtonProps } from "@kaizen/draft-button"
import {
  GenericModal,
  ModalAccessibleLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../"

import styles from "./InputEditModal.scss"

export interface InputEditModalProps {
  readonly isOpen: boolean
  readonly type: "positive" | "negative"
  readonly title: string
  readonly onSubmit: () => void
  readonly onDismiss: () => void
  readonly localeDirection?: "rtl" | "ltr"
  readonly submitLabel?: string
  readonly dismissLabel?: string
  readonly automationId?: string
  readonly children: React.ReactNode
  readonly submitButtonProps?: ButtonProps
  readonly dismissButtonProps?: ButtonProps
}

type InputEditModal = React.FunctionComponent<InputEditModalProps>

const InputEditModal = ({
  isOpen,
  type,
  title,
  onSubmit,
  onDismiss,
  localeDirection = "ltr",
  submitLabel = "Submit",
  dismissLabel = "Cancel",
  automationId,
  children,
  submitButtonProps,
  dismissButtonProps,
}: InputEditModalProps) => (
  <GenericModal
    isOpen={isOpen}
    onEscapeKeyup={onDismiss}
    automationId={automationId}
  >
    <div className={styles.modal} dir={localeDirection}>
      <ModalHeader unpadded onDismiss={onDismiss}>
        <div className={styles.header}>
          <ModalAccessibleLabel>
            <Text tag="h1" style="zen-heading-3" inline>
              {title}
            </Text>
          </ModalAccessibleLabel>
        </div>
      </ModalHeader>
      <ModalBody unpadded>
        <div className={styles.body} dir={localeDirection}>
          {children}
        </div>
      </ModalBody>
      <ModalFooter
        actions={[
          { label: submitLabel, onClick: onSubmit, ...submitButtonProps },
          { label: dismissLabel, onClick: onDismiss, ...dismissButtonProps },
        ]}
        appearance={type === "negative" ? "destructive" : "primary"}
        automationId={automationId}
      />
    </div>
  </GenericModal>
)

export default InputEditModal
