import React from "react"
import classnames from "classnames"
import { ButtonProps } from "@kaizen/button"
import { Heading } from "@kaizen/typography"
import {
  GenericModal,
  ModalAccessibleLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../"
import styles from "./InputEditModal.module.scss"

export interface InputEditModalProps {
  readonly isOpen: boolean
  readonly unpadded?: boolean
  readonly mood: "positive" | "destructive"
  readonly title: string
  readonly onSubmit: () => void
  readonly onSecondaryAction?: () => void
  readonly onDismiss: () => void
  readonly onAfterLeave?: () => void
  readonly localeDirection?: "rtl" | "ltr"
  readonly submitLabel?: string
  readonly dismissLabel?: string
  readonly secondaryLabel?: string
  readonly automationId?: string
  readonly children: React.ReactNode
  readonly submitWorking?: { label: string; labelHidden?: boolean }
}

/**
 * {@link https://cultureamp.design/components/modal/#input-edit-modal Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-modal-input-edit-modal--input-edit-modal-example Storybook}
 */
export const InputEditModal = ({
  isOpen,
  mood,
  title,
  onSubmit,
  onSecondaryAction,
  onAfterLeave,
  localeDirection = "ltr",
  submitLabel = "Submit",
  dismissLabel = "Cancel",
  secondaryLabel,
  submitWorking,
  automationId,
  children,
  unpadded = false,
  ...props
}: InputEditModalProps): JSX.Element => {
  const onDismiss = submitWorking ? undefined : props.onDismiss
  const submitAction = { label: submitLabel, onClick: onSubmit }
  const workingProps = submitWorking
    ? {
        working: true,
        workingLabel: submitWorking.label,
        workingLabelHidden: submitWorking.labelHidden,
      }
    : {}

  const showSecondary = onSecondaryAction && secondaryLabel

  const footerActions: ButtonProps[] = [
    { ...submitAction, ...workingProps },
    {
      label: showSecondary ? secondaryLabel : dismissLabel,
      onClick: showSecondary ? onSecondaryAction : onDismiss,
      disabled: !!submitWorking,
    },
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
            className={classnames(
              styles.header,
              localeDirection === "rtl" && styles.textAlignRTL,
              !unpadded && styles.padded
            )}
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
            className={classnames(styles.body, !unpadded && styles.padded)}
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

InputEditModal.displayName = "InputEditModal"
