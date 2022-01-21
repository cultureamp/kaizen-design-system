import React, { InputHTMLAttributes } from "react"
import classnames from "classnames"

import styles from "./styles.scss"

export type InputType = "text" | "email" | "password"
export type InputStatus = "default" | "success" | "error" | "caution"

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  automationId?: string
  ariaLabel?: string
  ariaDescribedBy?: string
  inputType?: InputType
  /*
   * The aim is to do a gentle deprecation of defaultInputValue and use the native defaultValue prop
   */
  defaultInputValue?: string
  inputRef?: React.RefObject<HTMLInputElement>
  /*
   * The aim is to do a gentle deprecation of inputValue and use the native value prop
   */
  inputValue?: string
  reversed?: boolean
  status?: InputStatus
  startIconAdornment?: React.ReactNode
  endIconAdornment?: React.ReactNode
}

type Input = React.FunctionComponent<InputProps>

const Input: Input = ({
  id,
  name,
  automationId,
  ariaLabel,
  ariaDescribedBy,
  className,
  inputType = "text",
  placeholder,
  disabled = false,
  inputValue,
  value,
  defaultInputValue,
  defaultValue,
  inputRef,
  reversed = false,
  status = "default",
  startIconAdornment,
  endIconAdornment,
  onChange,
  onBlur,
  onFocus,
  ...props
}) => (
  <div
    className={classnames(styles.wrapper, {
      [styles.withReversed]: reversed,
      [styles.withDisabled]: disabled,
      [styles.withStartIconAdornment]: startIconAdornment,
      [styles.withEndIconAdornment]: endIconAdornment,
    })}
  >
    {startIconAdornment && (
      <div className={styles.startIconAdornment}>{startIconAdornment}</div>
    )}

    <input
      id={id}
      name={name}
      data-automation-id={automationId}
      type={inputType}
      value={inputValue ?? value}
      defaultValue={defaultInputValue ?? defaultValue}
      ref={inputRef}
      aria-describedby={ariaDescribedBy}
      aria-label={ariaLabel}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      className={classnames(
        styles.input,
        styles[status],
        {
          [styles.default]: !reversed,
          [styles.reversed]: reversed,
          [styles.disabled]: disabled,
        },
        className
      )}
      {...props}
    />

    {/* Inputs aren't able to have pseudo elements like ::after on them,
          so we have to create an element ourselves for the focus ring */}
    <div className={styles.focusRing} />

    {endIconAdornment && (
      <div className={styles.endIconAdornment}>{endIconAdornment}</div>
    )}
  </div>
)

export default Input
