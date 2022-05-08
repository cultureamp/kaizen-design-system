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
  | "reversed"

export interface validationMessagesProps {
  error?: React.ReactNode
}

export interface DateInputProps extends Omit<InputProps, OmittedInputProps> {
  id: string
  calendarId: string
  buttonRef?: React.RefObject<HTMLButtonElement>
  labelText: React.ReactNode
  icon: React.SVGAttributes<SVGSymbolElement>
  /**
   * A description that provides context for the text field
   */
  description?: React.ReactNode
  isOpen: boolean
  onButtonClick: () => void
  isReversed: boolean
}

export const DateInput: React.VFC<DateInputProps> = ({
  id,
  disabled = false,
  buttonRef,
  labelText,
  value,
  description,
  isReversed = false,
  icon,
  onButtonClick,
  calendarId,
  isOpen,
  ...inputProps
}) => (
  <FieldGroup inline={true}>
    <Label
      htmlFor={id}
      labelText={labelText}
      reversed={isReversed}
      disabled={disabled}
    />
    <Input
      id={id}
      inputType="text"
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="dialog"
      aria-controls={calendarId}
      aria-describedby={description ? `${id}-field-message` : undefined}
      autoComplete="off"
      value={value}
      disabled={disabled}
      reversed={isReversed}
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
          reversed={isReversed}
        />
      </div>
    )}
  </FieldGroup>
)

DateInput.displayName = "DateInput"
