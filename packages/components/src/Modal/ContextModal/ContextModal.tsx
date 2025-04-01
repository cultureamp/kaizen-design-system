import React, { type HTMLAttributes } from 'react'
import classnames from 'classnames'
import type { ButtonProps } from '~components/Button'
import { Heading } from '~components/Heading'
import {
  GenericModal,
  ModalAccessibleLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '~components/Modal/GenericModal'
import styles from './ContextModal.module.css'

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
    layout?: 'portrait' | 'landscape'
    title: string
    onConfirm?: () => void
    onDismiss: () => void
    /** A callback that is triggered after the modal is opened. */
    onAfterEnter?: () => void
    /** A callback that is triggered after the modal is closed. */
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
  layout = 'portrait',
  title,
  onConfirm,
  onDismiss: propsOnDismiss,
  onAfterLeave,
  onAfterEnter,
  confirmLabel = 'Confirm',
  confirmWorking,
  renderBackground,
  children,
  contentHeader,
  image,
  secondaryLabel,
  onSecondaryAction,
  className,
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
      onAfterEnter={onAfterEnter}
      className={className}
      size="large"
      {...props}
    >
      {renderBackground?.()}
      <ModalHeader onDismiss={onDismiss} unpadded={unpadded}>
        <ModalAccessibleLabel>
          <Heading variant="heading-2" tag="h2">
            {title}
          </Heading>
        </ModalAccessibleLabel>
      </ModalHeader>
      {contentHeader && <div className={styles.contentHeader}>{contentHeader}</div>}
      <ModalBody>
        <div className={classnames(styles.contentLayout, styles[`${layout}Contentlayout`])}>
          {image && <div className={styles.image}>{image}</div>}
          <div className={styles.content}>{children}</div>
        </div>
      </ModalBody>
      <ModalFooter actions={footerActions} appearance="primary" unpadded={unpadded} />
    </GenericModal>
  )
}

ContextModal.displayName = 'ContextModal'
