import React, { type HTMLAttributes, type ReactNode } from 'react'
import classnames from 'classnames'
import { Button, type ButtonProps } from '~components/Button'
import { useMediaQueries } from '~components/utils/useMediaQueries'
import styles from './ModalFooter.module.css'

type ActionsVariantProps = 'inputEdit'

export type ModalFooterProps = {
  variant?: ActionsVariantProps
  unpadded?: boolean
  /**
   * @deprecated Use children instead. It is recommended to use the latest Button or LinkButton component
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
  children?: ReactNode
} & HTMLAttributes<HTMLDivElement>

export const ModalFooter = ({
  unpadded,
  actions,
  appearance = 'primary',
  variant,
  children,
  className,
  ...props
}: ModalFooterProps): JSX.Element => {
  const { queries } = useMediaQueries()

  return (
    <div
      className={classnames(
        styles.footer,
        variant === 'inputEdit' && styles.gray,
        !unpadded && styles.padded,
        className,
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
  )
}

ModalFooter.displayName = 'ModalFooter'
