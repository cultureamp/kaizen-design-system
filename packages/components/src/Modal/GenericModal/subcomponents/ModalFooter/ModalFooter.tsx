import React, { type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { Button, type ButtonProps } from '~components/Button'
import { useMediaQueries } from '~components/utils/useMediaQueries'
import { ModalBody } from '../ModalBody/ModalBody'
import styles from './ModalFooter.module.scss'

type ActionsVariantProps = 'context' | 'inputEdit'

export type ModalFooterProps = {
  /**
   * We have a special case for the InformationModal when it has an image.
   * Since this modal may have an image on the right side the actions might look disconected from the content.
   * So for this instance we need to flip the order of the actions so that the primary
   * action is anchored to the left edge of the modal.
   * For this rare instance added the variant prop as optional to update the order of action buttons.
   */
  'variant'?: ActionsVariantProps
  'unpadded'?: boolean
  'actions': ButtonProps[]
  /**
   * @deprecated we are no longer supporting different appearances for ModalFooter, instead there will only be a single default appearance set by the Button.
   */
  'appearance'?: 'primary' | 'destructive'
  'data-testid'?: string
  'alignStart'?: boolean
} & HTMLAttributes<HTMLDivElement>

export const ModalFooter = ({
  unpadded,
  actions,
  appearance = 'primary',
  alignStart,
  variant,
  ...props
}: ModalFooterProps): JSX.Element => {
  const { queries } = useMediaQueries()

  return (
    <ModalBody inputEdit={variant === 'inputEdit'}>
      <div
        className={classnames(
          styles.actions,
          !unpadded && styles.padded,
          variant === 'context' && styles.informationPadded,
          alignStart && styles.actionsAlignStart,
        )}
        {...props}
      >
        {actions.map((action, index) => (
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
