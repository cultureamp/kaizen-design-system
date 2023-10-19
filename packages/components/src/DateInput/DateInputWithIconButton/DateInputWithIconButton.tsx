import React from "react"
import classnames from "classnames"
import { DateStartIcon } from "~components/Icon"
import { isRefObject } from "~utils/isRefObject"
import { DateInput, DateInputProps } from "../DateInput"
import styles from "./DateInputWithIconButton.module.scss"

export type DateInputWithIconButtonProps = {
  /**
   * Icon button onClick handler
   */
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>
} & Omit<DateInputProps, "startIconAdornment" | "endIconAdornment">

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
      <DateStartIcon role="presentation" />
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
