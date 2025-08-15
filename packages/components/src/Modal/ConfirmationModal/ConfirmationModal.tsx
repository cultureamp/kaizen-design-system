import React, { type HTMLAttributes } from 'react'
import classnames from 'classnames'
import type { ButtonProps } from '~components/ButtonV1'
import { Heading } from '~components/Heading'
import { Icon } from '~components/Icon'
import { Cautionary, Informative, Negative, Positive } from '~components/Illustration'
import {
  GenericModal,
  ModalAccessibleDescription,
  ModalAccessibleLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '~components/Modal/GenericModal'
import styles from './ConfirmationModal.module.scss'

type Variant = 'success' | 'informative' | 'warning' | 'cautionary'

type BaseConfirmationModalProps = {
  'isOpen': boolean
  'unpadded'?: boolean
  /**
   * To display the Prominent variation of the modal types
   */
  'isProminent'?: boolean
  'title': string
  'onConfirm'?: () => void
  'onDismiss': () => void
  /** A callback that is triggered after the modal is opened. */
  'onAfterEnter'?: () => void
  /** A callback that is triggered after the modal is closed. */
  'onAfterLeave'?: () => void
  'confirmLabel'?: string
  'dismissLabel'?: string
  'confirmWorking'?: { label: string; labelHidden?: boolean }
  'data-testid'?: string
  'children': React.ReactNode
} & HTMLAttributes<HTMLDivElement>

type ConfirmationModalVariants = {
  variant: Variant
}

export type ConfirmationModalProps = BaseConfirmationModalProps & ConfirmationModalVariants

const getIconName = (variantName: Variant): string => {
  switch (variantName) {
    case 'cautionary':
      return 'warning'
    case 'informative':
      return 'info'
    case 'warning':
      return 'error'
    case 'success':
      return 'check_circle'
  }
}

const getIcon = (variantName: Variant, isProminent: boolean): JSX.Element => {
  if (isProminent) {
    switch (variantName) {
      case 'cautionary':
        return <Cautionary />
      case 'informative':
        return <Informative />
      case 'warning':
        return <Negative />
      case 'success':
        return <Positive />
    }
  }

  const iconName = getIconName(variantName)
  return <Icon name={iconName} isPresentational isFilled />
}

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082093114/Modal Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-modals-confirmationmodal--docs Storybook}
 */
export const ConfirmationModal = ({
  isOpen,
  isProminent = false,
  unpadded = false,
  variant,
  title,
  onConfirm,
  onAfterLeave,
  onAfterEnter,
  confirmLabel = 'Confirm',
  dismissLabel = 'Cancel',
  confirmWorking,
  onDismiss: propsOnDismiss,
  children,
  className,
  ...props
}: ConfirmationModalProps): JSX.Element => {
  const variantName = variant

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
      className={className}
    >
      <div className={styles.modal} data-modal {...props}>
        <ModalHeader onDismiss={onDismiss}>
          <div
            className={classnames(
              styles.header,
              styles[variant],
              isProminent && styles.prominent,
              !unpadded && styles.padded,
            )}
          >
            <div className={classnames(styles.iconContainer, isProminent && styles.prominent)}>
              <div className={styles.spotIcon}>{getIcon(variantName, isProminent)}</div>
            </div>
            <ModalAccessibleLabel isProminent={isProminent}>
              <Heading tag="h2" variant="heading-2">
                {title}
              </Heading>
            </ModalAccessibleLabel>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className={classnames(isProminent && styles.prominent, !unpadded && styles.padded)}>
            <ModalAccessibleDescription>{children}</ModalAccessibleDescription>
          </div>
        </ModalBody>
        <ModalFooter
          actions={footerActions}
          appearance={variant == 'warning' ? 'destructive' : 'primary'}
          unpadded={unpadded}
        />
      </div>
    </GenericModal>
  )
}

ConfirmationModal.displayName = 'ConfirmationModal'
