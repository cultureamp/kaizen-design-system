import React, { type InputHTMLAttributes } from 'react'
import classnames from 'classnames'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { type InputStatus, type InputTypes } from './types'
import styles from './Input.module.scss'

export type InputType = (typeof InputTypes)[number]
export type InputStatusType = (typeof InputStatus)[number]

export type InputProps = {
  inputRef?: React.RefObject<HTMLInputElement>
  status?: InputStatusType
  startIconAdornment?: React.ReactNode
  endIconAdornment?: React.ReactNode
  reversed?: boolean
  type?: InputType
  /**
   * @deprecated Use of placeholder text goes against our a11y standards.
   * Use the `labelText` prop to provide a concise name, and the `description` prop for any help text.
   */
  placeholder?: string
} & OverrideClassName<InputHTMLAttributes<HTMLInputElement>>

export const Input = ({
  inputRef,
  status = 'default',
  startIconAdornment,
  endIconAdornment,
  reversed = false,
  type = 'text',
  value,
  defaultValue,
  classNameOverride,
  disabled,
  ...restProps
}: InputProps): JSX.Element => (
  <div
    className={classnames(
      styles.wrapper,
      reversed && styles.withReversed,
      disabled && styles.withDisabled,
      startIconAdornment && styles.withStartIconAdornment,
      endIconAdornment && styles.withEndIconAdornment,
      status != 'default' && styles.hasStatus,
    )}
  >
    {startIconAdornment && <div className={styles.startIconAdornment}>{startIconAdornment}</div>}

    <input
      ref={inputRef}
      type={type}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      className={classnames(
        styles.input,
        styles[status],
        classNameOverride,
        reversed ? styles.reversed : styles.default,
        disabled && styles.disabled,
      )}
      {...restProps}
    />

    {endIconAdornment && <div className={styles.endIconAdornment}>{endIconAdornment}</div>}
  </div>
)

Input.displayName = 'Input'
