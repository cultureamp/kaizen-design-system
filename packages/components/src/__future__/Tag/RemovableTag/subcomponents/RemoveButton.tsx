import React, { ButtonHTMLAttributes } from 'react'
import classnames from 'classnames'
import { Icon } from '~components/__future__/Icon'
import { OverrideClassName } from '~components/types/OverrideClassName'
import styles from './RemoveButton.module.scss'

export type RemoveButtonBaseProps = {
  ariaLabel: string
  onClick: () => void
}
export type RemoveButtonProps = OverrideClassName<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'color'> &
    RemoveButtonBaseProps
>

export const RemoveButton = ({
  classNameOverride,
  // color = "gray",
  ariaLabel,
  onClick,
  ...restProps
}: RemoveButtonProps): JSX.Element => (
  <button
    type="button"
    aria-label={ariaLabel}
    className={classnames(styles.removeButton, classNameOverride)}
    onClick={onClick}
    {...restProps}
  >
    <Icon name="close" isPresentational />
  </button>
)

RemoveButton.displayName = 'RemoveButton'
