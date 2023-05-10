import React from "react"
import classnames from "classnames"
import { ButtonProps } from "@kaizen/button"
import { Icon } from "@kaizen/component-library"
import cautionIcon from "@kaizen/component-library/icons/caution-white.icon.svg"
import errorIcon from "@kaizen/component-library/icons/exclamation-white.icon.svg"
import informationIcon from "@kaizen/component-library/icons/information-white.icon.svg"
import successIcon from "@kaizen/component-library/icons/success-white.icon.svg"
import {
  Assertive,
  Cautionary,
  Informative,
  Negative,
  Positive,
} from "@kaizen/draft-illustration"
import { Heading } from "@kaizen/typography"
import {
  GenericModal,
  ModalAccessibleDescription,
  ModalAccessibleLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../"
import styles from "./ConfirmationModal.module.scss"

export interface ConfirmationModalProps {
  readonly isOpen: boolean
  readonly unpadded?: boolean
  /**
   * To display the Prominent variation of the modal types
   */
  readonly isProminent?: boolean
  /**
   * Defines the modal type or mood
   */
  readonly mood: Mood
  readonly title: string
  readonly onConfirm?: () => void
  readonly onDismiss: () => void
  readonly onAfterLeave?: () => void
  readonly confirmLabel?: string
  readonly dismissLabel?: string
  readonly confirmWorking?: { label: string; labelHidden?: boolean }
  readonly automationId?: string
  readonly children: React.ReactNode
}

type Mood = "positive" | "informative" | "negative" | "cautionary" | "assertive"

const getIcon = (mood: Mood, isProminent: boolean): JSX.Element => {
  switch (mood) {
    case "cautionary":
      return isProminent ? (
        <Cautionary alt="" isAnimated />
      ) : (
        <Icon icon={cautionIcon} inheritSize role="presentation" />
      )
    case "informative":
      return isProminent ? (
        <Informative alt="" isAnimated />
      ) : (
        <Icon icon={informationIcon} inheritSize role="presentation" />
      )
    case "negative":
      return isProminent ? (
        <Negative alt="" isAnimated />
      ) : (
        <Icon icon={errorIcon} inheritSize role="presentation" />
      )
    case "positive":
      return isProminent ? (
        <Positive alt="" isAnimated />
      ) : (
        <Icon icon={successIcon} inheritSize role="presentation" />
      )
    case "assertive":
      return isProminent ? (
        <Assertive alt="" isAnimated />
      ) : (
        <Icon icon={errorIcon} inheritSize role="presentation" />
      )
  }
}

/**
 * {@link https://cultureamp.design/components/modal/#confirmation-modal Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-modal--confirmation-modal-example Storybook}
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
      automationId={automationId}
      onAfterLeave={onAfterLeave}
    >
      <div className={styles.modal}>
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
          automationId={automationId}
          unpadded={unpadded}
        />
      </div>
    </GenericModal>
  )
}

ConfirmationModal.displayName = "ConfirmationModal"
