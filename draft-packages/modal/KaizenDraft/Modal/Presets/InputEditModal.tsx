import classnames from "classnames"
import * as React from "react"
import { Heading } from "@kaizen/typography"
import { ButtonProps } from "@kaizen/button"
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
  readonly mood: "positive" | "destructive"
  readonly title: string
  readonly onSubmit: () => void
  readonly onDismiss: () => void
  readonly onAfterLeave?: () => void
  readonly localeDirection?: "rtl" | "ltr"
  readonly submitLabel?: string
  readonly dismissLabel?: string
  readonly automationId?: string
  readonly children: React.ReactNode
  readonly submitWorking?: { label: string; labelHidden?: boolean }
}

type InputEditModal = React.FunctionComponent<InputEditModalProps>

/**
 * {@link https://cultureamp.design/components/modal/#input-edit-modal Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-modal-input-edit-modal--input-edit-modal-example Storybook}
 */
const InputEditModal = ({
  isOpen,
  mood,
  title,
  onSubmit,
  onAfterLeave,
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
      onAfterLeave={onAfterLeave}
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
              <Heading tag="h2" variant="heading-2">
                {title}
              </Heading>
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
          appearance={mood === "destructive" ? "destructive" : "primary"}
          automationId={automationId}
          variant="inputEdit"
          unpadded={unpadded}
        />
      </div>
    </GenericModal>
  )
}

export default InputEditModal
