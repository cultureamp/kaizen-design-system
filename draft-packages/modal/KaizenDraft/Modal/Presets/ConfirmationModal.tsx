import classnames from "classnames"
import * as React from "react"

import { Icon } from "@kaizen/component-library"
import { Heading } from "@kaizen/typography"
import {
  Assertive,
  Cautionary,
  Informative,
  Negative,
  Positive,
} from "@kaizen/draft-illustration"

import exclamationIcon from "@kaizen/component-library/icons/exclamation-white.icon.svg"
import informationIcon from "@kaizen/component-library/icons/information-white.icon.svg"
import successIcon from "@kaizen/component-library/icons/success-white.icon.svg"

import { ButtonProps } from "@kaizen/draft-button"
import {
  GenericModal,
  ModalAccessibleDescription,
  ModalAccessibleLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../"

import styles from "./ConfirmationModal.scss"

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
  readonly confirmLabel?: string
  readonly dismissLabel?: string
  readonly confirmWorking?: { label: string; labelHidden?: boolean }
  readonly automationId?: string
  readonly children: React.ReactNode
}

type ConfirmationModal = React.FunctionComponent<ConfirmationModalProps>

type Mood = "positive" | "informative" | "negative" | "cautionary" | "assertive"

const getIcon = (mood: Mood, isProminent: boolean) => {
  switch (mood) {
    case "cautionary":
      return isProminent ? (
        <Cautionary alt="" isAnimated />
      ) : (
        <Icon icon={exclamationIcon} inheritSize role="presentation" />
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
        <Icon icon={exclamationIcon} inheritSize role="presentation" />
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
        <Icon icon={exclamationIcon} inheritSize role="presentation" />
      )
  }
}

const ConfirmationModal = ({
  isOpen,
  isProminent = false,
  unpadded = false,
  mood,
  title,
  onConfirm,
  confirmLabel = "Confirm",
  dismissLabel = "Cancel",
  confirmWorking,
  automationId,
  children,
  ...props
}: ConfirmationModalProps) => {
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
    >
      <div className={styles.modal}>
        <ModalHeader onDismiss={onDismiss}>
          <div
            className={classnames(styles.header, {
              [styles.cautionaryHeader]: mood === "cautionary",
              [styles.informativeHeader]: mood === "informative",
              [styles.negativeHeader]: mood === "negative",
              [styles.positiveHeader]: mood === "positive",
              [styles.assertiveHeader]: mood === "assertive",
              [styles.prominent]: isProminent,
              [styles.padded]: !unpadded,
            })}
          >
            <div
              className={classnames(styles.iconContainer, {
                [styles.prominent]: isProminent,
              })}
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
            className={classnames(styles.body, {
              [styles.prominent]: isProminent,
              [styles.padded]: !unpadded,
            })}
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

export default ConfirmationModal
