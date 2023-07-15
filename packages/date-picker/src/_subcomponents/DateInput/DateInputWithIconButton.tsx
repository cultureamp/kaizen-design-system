import React from "react"
import classnames from "classnames"

import { isRefObject } from "../../utils/isRefObject"
import { IconDateStart } from "../Icons"
import { DateInput, DateInputProps } from "./DateInput"
import styles from "./DateInputWithIconButton.module.scss"

export interface DateInputWithIconButtonProps
  extends Omit<DateInputProps, "startIconAdornment" | "endIconAdornment"> {
  /**
   * Icon button onClick handler
   */
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>
}

export type DateInputWithIconButtonRefs = {
  inputRef?: React.RefObject<HTMLInputElement>
  buttonRef?: React.RefObject<HTMLButtonElement>
}

export const DateInputWithIconButton = React.forwardRef<
  DateInputWithIconButtonRefs,
  DateInputWithIconButtonProps
>(({ onButtonClick, disabled, value, ...restProps }, ref) => {
  const customRefObject = isRefObject(ref) ? ref.current : null
  const inputRef = customRefObject?.inputRef
  const buttonRef = customRefObject?.buttonRef

  const IconButton: React.ReactNode = (
    <button
      ref={buttonRef}
      type="button"
      onClick={onButtonClick}
      aria-label={value ? `Change date, ${value}` : "Choose date"}
      aria-disabled={disabled}
      disabled={disabled}
      className={classnames(
        styles.iconButton,
        restProps["aria-expanded"] && styles.calendarActive,
        disabled && styles.disabled
      )}
    >
      <IconDateStart />
    </button>
  )

  return (
    <DateInput
      ref={inputRef}
      disabled={disabled}
      value={value}
      endIconAdornment={IconButton}
      {...restProps}
    />
  )
})

DateInputWithIconButton.displayName = "DateInputWithIconButton"
