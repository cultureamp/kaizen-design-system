import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { Heading } from "@kaizen/typography"
import { ButtonProps } from "~components/Button"
import {
  GenericModal,
  ModalAccessibleFooter,
  ModalAccessibleHeader,
  ModalAccessibleLabel,
  ModalSection,
} from "~components/Modal/GenericModal"
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
  onAfterLeave,
  confirmLabel = "Confirm",
  confirmWorking,
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
      onAfterLeave={onAfterLeave}
    >
      <div className={styles.modal} data-modal {...props}>
        {renderBackground && renderBackground()}
        <ModalAccessibleHeader onDismiss={onDismiss}>
          <div
            className={classnames(styles.header, !unpadded && styles.padded)}
          >
            <ModalAccessibleLabel>
              <Heading variant="heading-2" tag="h2">
                {title}
              </Heading>
            </ModalAccessibleLabel>
          </div>
        </ModalAccessibleHeader>
        {contentHeader && (
          <div className={styles.contentHeader}>{contentHeader}</div>
        )}
        <ModalSection>
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
                    props.secondaryLabel
                      ? styles.footerWithSecondaryAction
                      : styles.footer
                  }
                ></div>
              )}
            </div>
          </div>
        </ModalSection>
        <ModalAccessibleFooter
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
