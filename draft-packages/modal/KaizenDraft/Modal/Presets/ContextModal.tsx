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
} from ".."
import styles from "./ContextModal.module.scss"

export type ContextModalSecondaryActionProps =
  | {
      secondaryLabel: string
      onSecondaryAction: () => void
    }
  | {
      secondaryLabel?: undefined
    }

export type ContextModalProps = Readonly<
  {
    isOpen: boolean
    unpadded?: boolean
    /**
     * Defines the orientation layout of the image and content
     */
    layout?: "portrait" | "landscape"
    title: string
    onConfirm?: () => void
    onDismiss: () => void
    onAfterLeave?: () => void
    confirmLabel?: string
    confirmWorking?: { label: string; labelHidden?: boolean }
    automationId?: string
    renderBackground?: () => React.ReactNode
    image?: React.ReactNode
    children: React.ReactNode
    contentHeader?: React.ReactNode
  } & ContextModalSecondaryActionProps
>

/**
 * {@link https://cultureamp.design/components/modal/#context-modals-previously-information-modal Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-modal--context-modal-example Storybook}
 */
export const ContextModal = ({
  isOpen,
  unpadded = false,
  layout = "portrait",
  title,
  onConfirm,
  onAfterLeave,
  confirmLabel = "Confirm",
  confirmWorking,
  automationId,
  renderBackground,
  children,
  contentHeader,
  image,
  ...props
}: ContextModalProps): JSX.Element => {
  const onDismiss = confirmWorking ? undefined : props.onDismiss

  const footerActions: ButtonProps[] = []

  const workingProps = confirmWorking
    ? {
        working: true,
        workingLabel: confirmWorking.label,
        workingLabelHidden: confirmWorking.labelHidden,
      }
    : {}

  if (onConfirm) {
    const confirmAction = { label: confirmLabel, onClick: onConfirm }
    footerActions.push({ ...confirmAction, ...workingProps })
  }

  if (props.secondaryLabel) {
    footerActions.push({
      label: props.secondaryLabel,
      onClick: props.onSecondaryAction,
      disabled: !!confirmWorking,
    })
  }

  return (
    <GenericModal
      isOpen={isOpen}
      onEscapeKeyup={onDismiss}
      onOutsideModalClick={onDismiss}
      automationId={automationId}
      onAfterLeave={onAfterLeave}
    >
      <div className={styles.modal}>
        {renderBackground && renderBackground()}
        <ModalHeader onDismiss={onDismiss}>
          <div
            className={classnames(styles.header, {
              [styles.padded]: !unpadded,
            })}
          >
            <ModalAccessibleLabel>
              <Heading variant="heading-2" tag="h2">
                {title}
              </Heading>
            </ModalAccessibleLabel>
          </div>
        </ModalHeader>
        {contentHeader && (
          <div className={styles.contentHeader}>{contentHeader}</div>
        )}
        <ModalBody>
          <div
            className={classnames(styles.contentLayout, {
              [styles.portraitContentlayout]: layout === "portrait",
              [styles.landscapeContentlayout]: layout === "landscape",
            })}
          >
            {image && <div className={styles.image}>{image}</div>}
            <div className={styles.content}>
              {children}
              {onConfirm != null && (
                <div
                  className={
                    props.secondaryLabel
                      ? styles.footerWithSecondaryAction
                      : styles.footer
                  }
                ></div>
              )}
            </div>
          </div>
        </ModalBody>
        <ModalFooter
          variant={image ? "context" : undefined}
          actions={footerActions}
          appearance="primary"
          automationId={automationId}
          unpadded={unpadded}
        />
      </div>
    </GenericModal>
  )
}

ContextModal.displayName = "ContextModal"
