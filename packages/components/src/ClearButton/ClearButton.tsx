import React, { type ButtonHTMLAttributes } from 'react'
import classnames from 'classnames'
import { Icon } from '~components/Icon'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import styles from './ClearButton.module.scss'

export type ClearButtonProps = {
  isReversed?: boolean
} & OverrideClassName<Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>>

export const ClearButton = ({
  classNameOverride,
  isReversed = false,
  ...restProps
}: ClearButtonProps): JSX.Element => (
  <button
    type="button"
    aria-label="clear"
    className={classnames(
      styles.clearButton,
      isReversed ? styles.reversed : styles.default,
      classNameOverride,
    )}
    {...restProps}
  >
    <Icon name="cancel" isPresentational isFilled />
  </button>
)

ClearButton.displayName = 'ClearButton'
