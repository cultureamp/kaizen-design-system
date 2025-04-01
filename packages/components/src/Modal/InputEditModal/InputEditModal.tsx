import React, { type HTMLAttributes } from 'react'
import type { ButtonProps } from '~components/Button'
import { Heading } from '~components/Heading'
import {
  GenericModal,
  ModalAccessibleLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '~components/Modal/GenericModal'

export type InputEditModalProps = {
  isOpen: boolean
  unpadded?: boolean
  /**
   * @deprecated we are no longer supporting different moods for InputModal, instead there will only be a single default variant set by the component.
   */
  mood?: 'positive' | 'destructive'
  title: string
  onSubmit: () => void
  onSecondaryAction?: () => void
  onDismiss: () => void
  /** A callback that is triggered after the modal is opened. */
  onAfterEnter?: () => void
  /** A callback that is triggered after the modal is closed. */
  onAfterLeave?: () => void
  submitLabel?: string
  dismissLabel?: string
  secondaryLabel?: string
  /**
   * @deprecated Please use data-testid
   */
  automationId?: string
  children: React.ReactNode
  submitWorking?: { label: string; labelHidden?: boolean }
} & Omit<HTMLAttributes<HTMLDivElement>, 'onSubmit'>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082093114/Modal#Input-Edit-Modal Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-modals-inputeditmodal--docs Storybook}
 */
export const InputEditModal = ({
  isOpen,
  mood,
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
      {...props}
    >
      <ModalHeader onDismiss={onDismiss} unpadded={unpadded}>
        <ModalAccessibleLabel>
          <Heading tag="h2" variant="heading-2" color="dark">
            {title}
          </Heading>
        </ModalAccessibleLabel>
      </ModalHeader>
      <ModalBody inputEdit>{children}</ModalBody>
      <ModalFooter
        actions={footerActions}
        appearance={mood === 'destructive' ? 'destructive' : 'primary'}
        variant="inputEdit"
        unpadded={unpadded}
      />
    </GenericModal>
  )
}

InputEditModal.displayName = 'InputEditModal'
