import React, { InputHTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./Input.module.scss"

export type InputType = "text" | "email" | "password"
export type InputStatus = "default" | "success" | "error" | "caution"

export interface InputProps
  extends OverrideClassName<InputHTMLAttributes<HTMLInputElement>> {
  inputRef?: React.RefObject<HTMLInputElement>
  status?: InputStatus
  startIconAdornment?: React.ReactNode
  endIconAdornment?: React.ReactNode
  reversed?: boolean
  type?: InputType
  /**
   * **Deprecated:** Use `type` instead
   * @deprecated
   */
  inputType?: InputType
  /**
   * **Deprecated:** Use `aria-label` instead
   * @deprecated
   */
  ariaLabel?: string
  /**
   * **Deprecated:** Use `aria-describedby` instead
   * @deprecated
   */
  ariaDescribedBy?: string
  /**
   * **Deprecated:** Use `value` instead
   * @deprecated
   */
  inputValue?: string
  /**
   * **Deprecated:** Use `defaultValue` instead
   * @deprecated
   */
  defaultInputValue?: string
  /**
   * **Deprecated:** Use `classNameOverride` instead
   * @deprecated
   */
  className?: string
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
}

export const Input = ({
  inputRef,
  status = "default",
  startIconAdornment,
  endIconAdornment,
  reversed = false,
  type,
  inputType = "text",
  ariaLabel,
  ariaDescribedBy,
  value,
  inputValue,
  defaultValue,
  defaultInputValue,
  classNameOverride,
  className,
  automationId,
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
      status != "default" && styles.hasStatus
    )}
  >
    {startIconAdornment && (
      <div className={styles.startIconAdornment}>{startIconAdornment}</div>
    )}

    <input
      ref={inputRef}
      data-automation-id={automationId}
      type={type || inputType}
      value={inputValue || value}
      defaultValue={defaultInputValue || defaultValue}
      aria-describedby={ariaDescribedBy} // will be replaced by `aria-describedby` in restProps
      aria-label={ariaLabel} // will be replaced by `aria-label` in restProps
      disabled={disabled}
      className={classnames(
        styles.input,
        styles[status],
        className,
        classNameOverride,
        reversed ? styles.reversed : styles.default,
        disabled && styles.disabled
      )}
      {...restProps}
    />

    {/* Inputs aren't able to have pseudo elements like ::after on them,
          so we have to create an element ourselves for the focus ring */}
    <div className={styles.focusRing} />

    {endIconAdornment && (
      <div className={styles.endIconAdornment}>{endIconAdornment}</div>
    )}
  </div>
)

Input.displayName = "Input"
