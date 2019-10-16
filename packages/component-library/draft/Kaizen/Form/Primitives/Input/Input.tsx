import { hot } from "react-hot-loader"

import classnames from "classnames"
import * as React from "react"

const styles = require("./styles.scss")

export type InputType = "text" | "email" | "password"
export type InputStatus = "default" | "success" | "error"

export type InputProps = {
  id?: string
  name?: string
  automationId?: string
  ariaDescribedBy?: string
  className?: string
  inputType?: InputType
  placeholder?: string
  disabled?: boolean
  inputValue?: string
  reversed?: boolean
  status?: InputStatus
  startIconAdornment?: React.ReactNode
  endIconAdornment?: React.ReactNode
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any
}

type Input = React.FunctionComponent<InputProps>

const Input: Input = ({
  id,
  name,
  automationId,
  ariaDescribedBy,
  className,
  inputType = "text",
  placeholder,
  disabled = false,
  inputValue = "",
  reversed = false,
  status = "default",
  startIconAdornment,
  endIconAdornment,
  onChange,
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
      value={inputValue}
      aria-describedby={ariaDescribedBy}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      className={classnames(
        styles.input,
        {
          [styles.error]: status === "error",
          [styles.success]: status === "success",
          [styles.default]: !reversed,
          [styles.reversed]: reversed,
          [styles.disabled]: disabled,
        },
        className
      )}
    />

    {endIconAdornment && (
      <div className={styles.endIconAdornment}>{endIconAdornment}</div>
    )}
  </div>
)

export default hot(module)(Input)
