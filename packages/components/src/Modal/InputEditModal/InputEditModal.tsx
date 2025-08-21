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
import styles from './InputEditModal.module.scss'

export type InputEditModalProps = {
  'isOpen': boolean
  'unpadded'?: boolean
  'title': string
  'onSubmit': () => void
  'onSecondaryAction'?: () => void
  'onDismiss': () => void
  /** A callback that is triggered after the modal is opened. */
  'onAfterEnter'?: () => void
  /** A callback that is triggered after the modal is closed. */
  'onAfterLeave'?: () => void
  'submitLabel'?: string
  'dismissLabel'?: string
  'secondaryLabel'?: string
  'data-testid'?: string
  'children': React.ReactNode
  'submitWorking'?: { label: string; labelHidden?: boolean }
} & Omit<HTMLAttributes<HTMLDivElement>, 'onSubmit'>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082093114/Modal#Input-Edit-Modal Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-modals-inputeditmodal--docs Storybook}
 */
export const InputEditModal = ({
  isOpen,
  title,
  onSubmit,
  onSecondaryAction,
  onAfterLeave,
  submitLabel = 'Submit',
  dismissLabel = 'Cancel',
  secondaryLabel,
  submitWorking,
  children,
  unpadded = false,
  onDismiss: propsOnDismiss,
  onAfterEnter,
  className,
  ...props
}: InputEditModalProps): JSX.Element => {
  const onDismiss = submitWorking ? undefined : propsOnDismiss
  const submitAction = { label: submitLabel, onClick: onSubmit }
  const workingProps = submitWorking
    ? {
        working: true,
        workingLabel: submitWorking.label,
        workingLabelHidden: submitWorking.labelHidden,
      }
    : {}

  const showSecondary = onSecondaryAction && secondaryLabel

  const footerActions: ButtonProps[] = [
    { ...submitAction, ...workingProps },
    {
      label: showSecondary ? secondaryLabel : dismissLabel,
      onClick: showSecondary ? onSecondaryAction : onDismiss,
      disabled: !!submitWorking,
    },
  ]

  return (
    <GenericModal
      isOpen={isOpen}
      onEscapeKeyup={onDismiss}
      onAfterLeave={onAfterLeave}
      onAfterEnter={onAfterEnter}
      className={className}
    >
      <div className={styles.modal} data-modal {...props}>
        <ModalHeader onDismiss={onDismiss}>
          <div className={classnames(styles.header, !unpadded && styles.padded)}>
            <ModalAccessibleLabel>
              <Heading tag="h2" variant="heading-2">
                {title}
              </Heading>
            </ModalAccessibleLabel>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className={classnames(styles.body, !unpadded && styles.padded)}>{children}</div>
        </ModalBody>
        <ModalFooter actions={footerActions} variant="inputEdit" unpadded={unpadded} />
      </div>
    </GenericModal>
  )
}

InputEditModal.displayName = 'InputEditModal'
