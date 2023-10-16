import React from "react"
import classnames from "classnames"
import {
  Assertive,
  Cautionary,
  Informative,
  Negative,
  Positive,
} from "@kaizen/draft-illustration"
import { ButtonProps } from "~components/Button"
import { Heading } from "~components/Heading"
import {
  CautionWhiteIcon,
  ExclamationWhiteIcon,
  InformationWhiteIcon,
  SuccessWhiteIcon,
} from "~components/Icon"
import { ModalDescription } from "../GenericModal/subcomponents/ModalDescription"
import { ModalFooter } from "../GenericModal/subcomponents/ModalFooter"
import { ModalHeader } from "../GenericModal/subcomponents/ModalHeader"
import { ModalLabel } from "../GenericModal/subcomponents/ModalLabel"
import { ModalSection } from "../GenericModal/subcomponents/ModalSection"
import { GenericModal } from ".."
import styles from "./ConfirmationModal.module.scss"

export type ConfirmationModalProps = {
  isOpen: boolean
  unpadded?: boolean
  /**
   * To display the Prominent variation of the modal types
   */
  isProminent?: boolean
  /**
   * Defines the modal type or mood
   */
  mood: Mood
  title: string
  onConfirm?: () => void
  onDismiss: () => void
  onAfterLeave?: () => void
  confirmLabel?: string
  dismissLabel?: string
  confirmWorking?: { label: string; labelHidden?: boolean }
  automationId?: string
  children: React.ReactNode
}

type Mood = "positive" | "informative" | "negative" | "cautionary" | "assertive"

const getIcon = (mood: Mood, isProminent: boolean): JSX.Element => {
  switch (mood) {
    case "cautionary":
      return isProminent ? (
        <Cautionary />
      ) : (
        <CautionWhiteIcon inheritSize role="presentation" />
      )
    case "informative":
      return isProminent ? (
        <Informative />
      ) : (
        <InformationWhiteIcon inheritSize role="presentation" />
      )
    case "negative":
      return isProminent ? (
        <Negative />
      ) : (
        <ExclamationWhiteIcon inheritSize role="presentation" />
      )
    case "positive":
      return isProminent ? (
        <Positive />
      ) : (
        <SuccessWhiteIcon inheritSize role="presentation" />
      )
    case "assertive":
      return isProminent ? (
        <Assertive />
      ) : (
        <ExclamationWhiteIcon inheritSize role="presentation" />
      )
  }
}

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082093114/Modal Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-modals-confirmationmodal--docs Storybook}
 */
export const ConfirmationModal = ({
  isOpen,
  isProminent = false,
  unpadded = false,
  mood,
  title,
  onConfirm,
  onAfterLeave,
  confirmLabel = "Confirm",
  dismissLabel = "Cancel",
  confirmWorking,
  automationId,
  children,
  ...props
}: ConfirmationModalProps): JSX.Element => {
  const onDismiss = confirmWorking ? undefined : props.onDismiss

  const footerActions: ButtonProps[] = []
  if (onConfirm) {
    const confirmAction = { label: confirmLabel, onClick: onConfirm }
    const workingProps = confirmWorking
      ? {
          working: true,
          workingLabel: confirmWorking.label,
          workingLabelHidden: confirmWorking.labelHidden,
        }
      : {}

    footerActions.push({ ...confirmAction, ...workingProps })
  }

  footerActions.push({
    label: dismissLabel,
    onClick: onDismiss,
    disabled: !!confirmWorking,
  })

  return (
    <GenericModal
      isOpen={isOpen}
      onEscapeKeyup={onDismiss}
      onOutsideModalClick={onDismiss}
      onAfterLeave={onAfterLeave}
    >
      <div className={styles.modal} data-modal>
        <ModalHeader onDismiss={onDismiss}>
          <div
            className={classnames(
              styles.header,
              styles[`${mood}Header`],
              isProminent && styles.prominent,
              !unpadded && styles.padded
            )}
          >
            <div
              className={classnames(
                styles.iconContainer,
                isProminent && styles.prominent
              )}
            >
              <div className={styles.spotIcon}>
                {getIcon(mood, isProminent)}
              </div>
            </div>
            <ModalLabel isProminent={isProminent}>
              <Heading tag="h2" variant="heading-2">
                {title}
              </Heading>
            </ModalLabel>
          </div>
        </ModalHeader>
        <ModalSection>
          <div
            className={classnames(
              isProminent && styles.prominent,
              !unpadded && styles.padded
            )}
          >
            <ModalDescription>{children}</ModalDescription>
          </div>
        </ModalSection>
        <ModalFooter
          actions={footerActions}
          appearance={mood === "negative" ? "destructive" : "primary"}
          automationId={automationId}
          unpadded={unpadded}
        />
      </div>
    </GenericModal>
  )
}

ConfirmationModal.displayName = "ConfirmationModal"
