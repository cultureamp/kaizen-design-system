import React, { type HTMLAttributes, type ReactNode } from 'react'
import classnames from 'classnames'
import { Button, type ButtonProps } from '~components/Button'
import { useMediaQueries } from '~components/utils/useMediaQueries'
import { ModalBody } from '../ModalBody/ModalBody'
import styles from './ModalFooter.module.css'

type ActionsVariantProps = 'context' | 'inputEdit'

export type ModalFooterProps = {
  /**
   * We have a special case for the InformationModal when it has an image.
   * Since this modal may have an image on the right side the actions might look disconected from the content.
   * So for this instance we need to flip the order of the actions so that the primary
   * action is anchored to the left edge of the modal.
   * For this rare instance added the variant prop as optional to update the order of action buttons.
   */
  variant?: ActionsVariantProps
  unpadded?: boolean
  /**
   * @deprecated Use children instead to insert whatever buttons you want
   */
  actions?: ButtonProps[]
  /**
   * @deprecated we are no longer supporting different appearances for ModalFooter, instead there will only be a single default appearance set by the Button.
   */
  appearance?: 'primary' | 'destructive'
  /**
   * @deprecated Please use data-testid
   */
  automationId?: string
  alignStart?: boolean
  children?: ReactNode
} & HTMLAttributes<HTMLDivElement>

export const ModalFooter = ({
  unpadded,
  actions,
  appearance = 'primary',
  alignStart,
  variant,
  children,
  ...props
}: ModalFooterProps): JSX.Element => {
  const { queries } = useMediaQueries()

  return (
    <ModalBody inputEdit={variant === 'inputEdit'} unpadded={unpadded}>
      <div
        className={classnames(
          styles.actions,
          variant === 'context' && styles.informationPadded,
          alignStart && styles.actionsAlignStart,
        )}
        {...props}
      >
        {children}
        {actions?.map((action, index) => (
          <div className={styles.actionButton} key={index}>
            <Button
              type="button"
              primary={index === 0 && appearance === 'primary'}
              destructive={index === 0 && appearance === 'destructive'}
              secondary={index > 0}
              fullWidth={queries.isSmall}
              {...action}
            />
          </div>
        ))}
      </div>
    </ModalBody>
  )
}

ModalFooter.displayName = 'ModalFooter'
