import classnames from "classnames"
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
  readonly unpadded?: boolean
  readonly type: "positive" | "negative"
  readonly title: string
  readonly onSubmit: () => void
  readonly onDismiss: () => void
  readonly localeDirection?: "rtl" | "ltr"
  readonly submitLabel?: string
  readonly dismissLabel?: string
  readonly automationId?: string
  readonly children: React.ReactNode
  readonly submitWorking?: { label: string; labelHidden?: boolean }
}

type InputEditModal = React.FunctionComponent<InputEditModalProps>

const InputEditModal = ({
  isOpen,
  type,
  title,
  onSubmit,
  localeDirection = "ltr",
  submitLabel = "Submit",
  dismissLabel = "Cancel",
  submitWorking,
  automationId,
  children,
  unpadded = false,
  ...props
}: InputEditModalProps) => {
  const onDismiss = submitWorking ? undefined : props.onDismiss
  const submitAction = { label: submitLabel, onClick: onSubmit }
  const workingProps = submitWorking
    ? {
        working: true,
        workingLabel: submitWorking.label,
        workingLabelHidden: submitWorking.labelHidden,
      }
    : {}

  const footerActions: ButtonProps[] = [
    { ...submitAction, ...workingProps },
    { label: dismissLabel, onClick: onDismiss, disabled: !!submitWorking },
  ]

  return (
    <GenericModal
      isOpen={isOpen}
      onEscapeKeyup={onDismiss}
      automationId={automationId}
    >
      <div className={styles.modal} dir={localeDirection}>
        <ModalHeader onDismiss={onDismiss}>
          <div
            className={classnames(styles.header, {
              [styles.textAlignRTL]: localeDirection === "rtl",
              [styles.padded]: !unpadded,
            })}
          >
            <ModalAccessibleLabel>
              <Text tag="h2" style="default-style" inheritBaseline inline>
                {title}
              </Text>
            </ModalAccessibleLabel>
          </div>
        </ModalHeader>
        <ModalBody>
          <div
            className={classnames(styles.body, { [styles.padded]: !unpadded })}
            dir={localeDirection}
          >
            {children}
          </div>
        </ModalBody>
        <ModalFooter
          actions={footerActions}
          appearance={type === "negative" ? "destructive" : "primary"}
          automationId={automationId}
          variant={"input"}
        />
      </div>
    </GenericModal>
  )
}

export default InputEditModal
