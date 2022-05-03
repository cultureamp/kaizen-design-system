import React from "react"
import { Icon } from "@kaizen/component-library"
import classnames from "classnames"
import {
  FieldGroup,
  FieldMessage,
  Input,
  InputProps,
  Label,
} from "@kaizen/draft-form"

import styles from "./DateInput.scss"

type OmittedInputProps =
  | "startIconAdornment"
  | "endIconAdornment"
  | "inputType"
  | "inputValue"

export interface validationMessagesProps {
  error?: string | React.ReactNode
}

export interface DateInputProps extends Omit<InputProps, OmittedInputProps> {
  id: string
  calendarId?: string
  buttonRef?: React.RefObject<HTMLButtonElement>
  labelText: string | React.ReactNode
  inline?: boolean
  icon: React.SVGAttributes<SVGSymbolElement>
  /**
   * A description that provides context for the text field
   */
  description?: string | React.ReactNode
  isOpen: boolean
  onButtonClick: () => void
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void
  handleOnBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
}

export const DateInput: React.VFC<DateInputProps> = ({
  id,
  disabled = false,
  buttonRef,
  labelText,
  defaultInputValue,
  inputRef,
  value,
  description,
  reversed = false,
  inline = false,
  status = "default",
  icon,
  onButtonClick,
  calendarId,
  isOpen,
  onKeyDown,
  handleOnBlur,
  ...inputProps
}) => (
  <FieldGroup id={`${id}-field-group`} inline={inline}>
    <Label
      id={`${id}-field-label`}
      htmlFor={`${id}-field-input`}
      labelText={labelText}
      reversed={reversed}
      disabled={disabled}
    />
    <Input
      id={`${id}-field-input`}
      inputType="text"
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="dialog"
      aria-controls={calendarId}
      ariaDescribedBy={`${id}-field-message`}
      autoComplete="off"
      value={value}
      defaultInputValue={defaultInputValue}
      inputRef={inputRef}
      disabled={disabled}
      reversed={reversed}
      status={status}
      onBlur={handleOnBlur}
      endIconAdornment={
        <button
          ref={buttonRef}
          aria-disabled={disabled ? true : undefined}
          disabled={disabled}
          onClick={onButtonClick}
          type="button"
          className={classnames(styles.iconButton, {
            [styles.calendarActive]: isOpen,
          })}
          aria-label={value ? `Change date, ${value}` : "Choose date"}
        >
          <div
            className={classnames({
              [styles.disabled]: disabled,
            })}
          >
            <Icon icon={icon} role="presentation" />
          </div>
        </button>
      }
      isDatePicker
      onKeyDown={onKeyDown}
      {...inputProps}
    />

    {description && (
      <div
        className={classnames(styles.message, {
          [styles.disabled]: disabled,
        })}
      >
        <FieldMessage
          id={`${id}-field-message`}
          message={description}
          reversed={reversed}
        />
      </div>
    )}
  </FieldGroup>
)

DateInput.displayName = "DatePickerInput"
