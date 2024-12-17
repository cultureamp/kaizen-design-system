import React, { HTMLAttributes } from 'react'
import { DOMAttributes, FocusableElement } from '@react-types/shared'
import classnames from 'classnames'
import { Label } from '~components/Label'
import { Icon } from '~components/__rc__/Icon'
import { OverrideClassName } from '~components/types/OverrideClassName'
import styles from './SelectToggle.module.scss'

export type SelectToggleProps = {
  label: React.ReactNode
  labelProps: DOMAttributes<FocusableElement>
  value: React.ReactNode
  /** Props for the element representing the selected value. */
  valueProps: DOMAttributes<FocusableElement>
  isOpen?: boolean
  /**
   * @deprecated Use of placeholder text goes against our a11y standards.
   * Use the `labelText` prop to provide a concise name, and the `description` prop for any help text.
   */
  placeholder?: string
  /** Updates the styling of the validation. */
  status?: 'error' | 'caution'
  isDisabled?: boolean
  /** Use the `reversed` styles. */
  isReversed?: boolean
} & OverrideClassName<HTMLAttributes<HTMLButtonElement>>

export const SelectToggle = React.forwardRef<HTMLButtonElement, SelectToggleProps>(
  (
    {
      label,
      labelProps,
      value,
      valueProps,
      isOpen,
      placeholder = 'Select',
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
          (value === null || value === undefined) && styles.placeholder,
          status === 'error' && styles.error,
          status === 'caution' && styles.caution,
          isDisabled && styles.disabled,
          isReversed && styles.reversed,
          classNameOverride,
        )}
      >
        <span {...valueProps} className={styles.value}>
          {value ?? placeholder}
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
