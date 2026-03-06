import React, { type HTMLAttributes } from 'react'
import { type DOMAttributes, type FocusableElement } from '@react-types/shared'
import classnames from 'classnames'
import { Icon } from '~components/Icon'
import { Label } from '~components/Label'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import styles from './SelectToggle.module.scss'

export type SelectToggleProps = {
  label: React.ReactNode
  labelProps: DOMAttributes<FocusableElement>
  value: React.ReactNode
  /** Props for the element representing the selected value. */
  valueProps: DOMAttributes<FocusableElement>
  isOpen?: boolean
  /** Updates the styling of the validation. */
  status?: 'error' | 'caution'
  isDisabled?: boolean
  /** Use the `reversed` styles. */
  isReversed?: boolean
} & OverrideClassName<Omit<HTMLAttributes<HTMLButtonElement>, 'placeholder'>>

export const SelectToggle = React.forwardRef<HTMLButtonElement, SelectToggleProps>(
  (
    {
      label,
      labelProps,
      value,
      valueProps,
      isOpen,
      status,
      isDisabled,
      isReversed,
      classNameOverride,
      ...restProps
    },
    ref,
  ) => (
    <div>
      <Label {...labelProps} reversed={isReversed} disabled={isDisabled}>
        {label}
      </Label>
      <button
        type="button"
        // for the eslint issue below, both of the attributes (aria-expanded and aria-controls) are on the button but it just doesn't know it
        // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
        role="combobox"
        {...restProps}
        ref={ref}
        className={classnames(
          styles.selectToggle,
          status === 'error' && styles.error,
          status === 'caution' && styles.caution,
          isDisabled && styles.disabled,
          isReversed && styles.reversed,
          classNameOverride,
        )}
      >
        <span {...valueProps} className={styles.value}>
          {value}
        </span>
        <Icon
          name={isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
          isPresentational
          className={styles.icon}
        />
      </button>
    </div>
  ),
)

SelectToggle.displayName = 'SelectToggle'
