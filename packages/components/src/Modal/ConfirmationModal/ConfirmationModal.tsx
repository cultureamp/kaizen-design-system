import React, { type HTMLAttributes } from 'react'
import classnames from 'classnames'
import type { ButtonProps } from '~components/Button'
import { Heading } from '~components/Heading'
import { Assertive, Cautionary, Informative, Negative, Positive } from '~components/Illustration'
import {
  GenericModal,
  ModalAccessibleDescription,
  ModalAccessibleLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '~components/Modal/GenericModal'
import { Icon } from '~components/__next__/Icon'
import styles from './ConfirmationModal.module.css'

type Mood = 'positive' | 'informative' | 'negative' | 'cautionary' | 'assertive'
type Variant = 'success' | 'informative' | 'warning' | 'cautionary'

type BaseConfirmationModalProps = {
  isOpen: boolean
  unpadded?: boolean
  /**
   * To display the Prominent variation of the modal types
   */
  isProminent?: boolean
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

type ConfirmationModalMoods = {
  /**
   * @deprecated Please use `variant` instead
   */
  mood: Mood
  variant?: never
}

type ConfirmationModalVariants = {
  /**
   * @deprecated Please use `variant` instead
   */
  mood?: never
  /**
   * If you are transitioning from Moods:
   * - `positive` should be `success`
   * - `negative` should be `warning`
   * - `assertive` should be `cautionary`
   */
  variant: Variant
}

export type ConfirmationModalProps = BaseConfirmationModalProps &
  (ConfirmationModalMoods | ConfirmationModalVariants)

const getIconName = (variantName: Mood | Variant): string => {
  switch (variantName) {
    case 'cautionary':
      return 'warning'
    case 'informative':
      return 'info'
    case 'negative':
    case 'warning':
      return 'error'
    case 'positive':
    case 'success':
      return 'check_circle'
    case 'assertive':
      return 'error'
  }
}

const getIcon = (variantName: Mood | Variant, isProminent: boolean): JSX.Element => {
  if (isProminent) {
    switch (variantName) {
      case 'cautionary':
        return <Cautionary />
      case 'informative':
        return <Informative />
      case 'negative':
      case 'warning':
        return <Negative />
      case 'positive':
      case 'success':
        return <Positive />
      case 'assertive':
        return <Assertive />
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
  mood,
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
  const variantName = variant ?? mood

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
      {...props}
    >
      <ModalHeader
        onDismiss={onDismiss}
        variant={variant}
        unpadded={unpadded}
        className={classnames(
          styles.header,
          variant ? styles[variant] : styles[`${mood}Header`],
          isProminent && styles.prominent,
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
      </ModalHeader>
      <ModalBody unpadded={unpadded}>
        <div className={classnames(isProminent && styles.prominent, !unpadded && styles.padded)}>
          <ModalAccessibleDescription>{children}</ModalAccessibleDescription>
        </div>
      </ModalBody>
      <ModalFooter
        actions={footerActions}
        appearance={mood === 'negative' || variant == 'warning' ? 'destructive' : 'primary'}
        unpadded={unpadded}
      />
    </GenericModal>
  )
}

ConfirmationModal.displayName = 'ConfirmationModal'
