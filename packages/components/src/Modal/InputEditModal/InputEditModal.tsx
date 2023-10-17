import React from "react"
import classnames from "classnames"
import { Heading } from "@kaizen/typography"
import { ButtonProps } from "~components/Button"
import { GenericModal } from "../GenericModal"
import { ModalFooter } from "../GenericModal/subcomponents/ModalFooter"
import { ModalHeader } from "../GenericModal/subcomponents/ModalHeader"
import { ModalLabel } from "../GenericModal/subcomponents/ModalLabel"
import { ModalSection } from "../GenericModal/subcomponents/ModalSection"
import styles from "./InputEditModal.module.scss"

export type InputEditModalProps = {
  isOpen: boolean
  unpadded?: boolean
  mood: "positive" | "destructive"
  title: string
  onSubmit: () => void
  onSecondaryAction?: () => void
  onDismiss: () => void
  onAfterLeave?: () => void
  localeDirection?: "rtl" | "ltr"
  submitLabel?: string
  dismissLabel?: string
  secondaryLabel?: string
  automationId?: string
  children: React.ReactNode
  submitWorking?: { label: string; labelHidden?: boolean }
}

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082093114/Modal#Input-Edit-Modal Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-modals-inputeditmodal--docs Storybook}
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
      onAfterLeave={onAfterLeave}
    >
      <div className={styles.modal} dir={localeDirection} data-modal>
        <ModalHeader onDismiss={onDismiss}>
          <div
            className={classnames(
              styles.header,
              localeDirection === "rtl" && styles.textAlignRTL,
              !unpadded && styles.padded
            )}
          >
            <ModalLabel>
              <Heading tag="h2" variant="heading-2">
                {title}
              </Heading>
            </ModalLabel>
          </div>
        </ModalHeader>
        <ModalSection>
          <div
            className={classnames(styles.body, !unpadded && styles.padded)}
            dir={localeDirection}
          >
            {children}
          </div>
        </ModalSection>
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
