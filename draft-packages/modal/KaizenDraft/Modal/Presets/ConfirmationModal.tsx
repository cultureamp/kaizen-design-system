import classnames from "classnames"
import * as React from "react"

import { Heading, Icon } from "@kaizen/component-library"
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
  readonly isProminent?: boolean
  readonly type: ModalType
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

type ModalType =
  | "positive"
  | "informative"
  | "negative"
  | "cautionary"
  | "assertive"

const getIcon = (type: ModalType, isProminent: boolean) => {
  switch (type) {
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
  type,
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
              [styles.cautionaryHeader]: type === "cautionary",
              [styles.informativeHeader]: type === "informative",
              [styles.negativeHeader]: type === "negative",
              [styles.positiveHeader]: type === "positive",
              [styles.assertiveHeader]: type === "assertive",
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
                {getIcon(type, isProminent)}
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
          appearance={type === "negative" ? "destructive" : "primary"}
          automationId={automationId}
          unpadded={unpadded}
        />
      </div>
    </GenericModal>
  )
}

export default ConfirmationModal
