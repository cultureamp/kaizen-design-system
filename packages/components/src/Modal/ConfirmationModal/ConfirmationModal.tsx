import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { Heading } from "~components/__content__/v2"
import {
  CautionWhiteIcon,
  ExclamationWhiteIcon,
  InformationWhiteIcon,
  SuccessWhiteIcon,
} from "~components/Icon"
import {
  Assertive,
  Cautionary,
  Informative,
  Negative,
  Positive,
} from "~components/Illustration"
import {
  GenericModal,
  ModalAccessibleDescription,
  ModalFooter,
  ModalHeader,
  ModalAccessibleLabel,
  ModalBody,
} from "~components/Modal/GenericModal"
import { ButtonProps } from "~components/__actions__/v2"
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
  /** A callback that is triggered after the modal is opened. */
  onAfterEnter?: () => void
  /** A callback that is triggered after the modal is closed. */
  onAfterLeave?: () => void
  confirmLabel?: string
  dismissLabel?: string
  confirmWorking?: { label: string; labelHidden?: boolean }
  /**
   * @deprecated Please use data-testid
   */
  automationId?: string
  children: React.ReactNode
} & HTMLAttributes<HTMLDivElement>

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
  onAfterEnter,
  confirmLabel = "Confirm",
  dismissLabel = "Cancel",
  confirmWorking,
  onDismiss: propsOnDismiss,
  children,
  ...props
}: ConfirmationModalProps): JSX.Element => {
  const onDismiss = confirmWorking ? undefined : propsOnDismiss

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
      onAfterEnter={onAfterEnter}
    >
      <div className={styles.modal} data-modal {...props}>
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
            <ModalAccessibleLabel isProminent={isProminent}>
              <Heading tag="h2" variant="heading-2">
                {title}
              </Heading>
            </ModalAccessibleLabel>
          </div>
        </ModalHeader>
        <ModalBody>
          <div
            className={classnames(
              isProminent && styles.prominent,
              !unpadded && styles.padded
            )}
          >
            <ModalAccessibleDescription>{children}</ModalAccessibleDescription>
          </div>
        </ModalBody>
        <ModalFooter
          actions={footerActions}
          appearance={mood === "negative" ? "destructive" : "primary"}
          unpadded={unpadded}
        />
      </div>
    </GenericModal>
  )
}

ConfirmationModal.displayName = "ConfirmationModal"
