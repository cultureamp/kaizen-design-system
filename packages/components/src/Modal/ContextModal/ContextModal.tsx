import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { ButtonProps } from "~components/Button"
import { Heading } from "~components/Heading"
import {
  GenericModal,
  ModalFooter,
  ModalHeader,
  ModalAccessibleLabel,
  ModalBody,
} from "~components/Modal/GenericModal"
import styles from "./ContextModal.module.scss"

export type ContextModalSecondaryActionProps =
  | {
      secondaryLabel: string
      onSecondaryAction: () => void
    }
  | {
      secondaryLabel?: undefined
      onSecondaryAction?: never
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
    /**
     * @deprecated use data-testid instead
     */
    automationId?: string
    renderBackground?: () => React.ReactNode
    image?: React.ReactNode
    children: React.ReactNode
    contentHeader?: React.ReactNode
  } & ContextModalSecondaryActionProps &
    HTMLAttributes<HTMLDivElement>
>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082093114/Modal Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-modals--contextmodal--docs Storybook}
 */
export const ContextModal = ({
  isOpen,
  unpadded = false,
  layout = "portrait",
  title,
  onConfirm,
  onDismiss: propsOnDismiss,
  onAfterLeave,
  confirmLabel = "Confirm",
  confirmWorking,
  renderBackground,
  children,
  contentHeader,
  image,
  secondaryLabel,
  onSecondaryAction,
  ...props
}: ContextModalProps): JSX.Element => {
  const onDismiss = confirmWorking ? undefined : propsOnDismiss

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

  if (secondaryLabel) {
    footerActions.push({
      label: secondaryLabel,
      onClick: onSecondaryAction,
      disabled: !!confirmWorking,
    })
  }

  return (
    <GenericModal
      isOpen={isOpen}
      onEscapeKeyup={onDismiss}
      onOutsideModalClick={onDismiss}
      onAfterLeave={onAfterLeave}
    >
      <div className={styles.modal} data-modal {...props}>
        {renderBackground && renderBackground()}
        <ModalHeader onDismiss={onDismiss}>
          <div
            className={classnames(styles.header, !unpadded && styles.padded)}
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
            className={classnames(
              styles.contentLayout,
              styles[`${layout}Contentlayout`]
            )}
          >
            {image && <div className={styles.image}>{image}</div>}
            <div className={styles.content}>
              {children}
              {onConfirm != null && (
                <div
                  className={
                    secondaryLabel
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
          unpadded={unpadded}
        />
      </div>
    </GenericModal>
  )
}

ContextModal.displayName = "ContextModal"
