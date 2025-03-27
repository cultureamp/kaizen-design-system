import React, { type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { IconButton } from '~components/Button'
import { Icon } from '~components/__next__/Icon'
import styles from './ModalHeader.module.css'

type Variant = 'default' | 'success' | 'informative' | 'warning' | 'cautionary'

export type ModalHeaderProps = {
  unpadded?: boolean
  reversed?: boolean
  onDismiss?: (evt: React.MouseEvent) => void
  variant?: Variant
  children: React.ReactNode
} & HTMLAttributes<HTMLDivElement>

export const ModalHeader = ({
  reversed,
  onDismiss,
  unpadded,
  variant,
  children,
  className,
  ...restProps
}: ModalHeaderProps): JSX.Element => (
  <div
    className={classnames(
      styles.header,
      className,
      unpadded && styles.unpadded,
      variant && styles[variant],
    )}
    {...restProps}
  >
    <div className={styles.dismissButton}>
      <IconButton
        label="Dismiss"
        icon={<Icon name="close" isPresentational />}
        reversed={reversed}
        onClick={onDismiss}
        disabled={onDismiss == undefined}
      />
    </div>
    {children}
  </div>
)

ModalHeader.displayName = 'ModalHeader'
